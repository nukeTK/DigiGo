import { NextPage } from "next";
import { Text ,Image,Box, Heading,Card, CardHeader, CardBody, CardFooter,useDisclosure,Button} from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react'
import { MdGroupWork } from 'react-icons/md'
import { Layout } from "@/components/Layout";
import { Unit } from "@/components/Unit";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { QRCodeScannerModal } from "@/components/QRCodeScannerModal";
import configJsonFile from "../../config.json";
import { useEffect, useState } from "react";
type PaymentPageMode = "scan" | "review" | "confirm" | "walletConnected" ;
import {
  WagmiConfig,
  createClient,
  defaultChains,
  configureChains,
  useAccount, useConnect, useSigner
} from 'wagmi'
import { useDigiGoWallet } from "@/hooks/useDigiGoWallet";
import { MockPayment__factory } from "../../../../account-abstraction/packages/contracts/typechain-types/factories/contracts/MockPayment__factory";

import deploymentsJsonFile from "../../../../account-abstraction/packages/contracts/deployments.json";
import { useErrorToast } from "@/hooks/useErrorToast";

const HomePage: NextPage = () => {
  const { connector: activeConnector, isConnected, address } = useAccount()
  const { data: signer} = useSigner()
  const { digiGoWallet } = useDigiGoWallet()
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()
  const [mode, setMode] = useState<PaymentPageMode>("scan");
    console.log(isConnected,activeConnector)
    const scanModalDisclosure = useDisclosure();
    const [scanedText, setScanedText] = useState("");
    
    const openScanModal = () => {
      scanModalDisclosure.onOpen();
    };

    const [isPaymentLoading, setIsPaymentLoading] = useState(false)
    const { handle } = useErrorToast()
    const confirmPay = async () => {
      console.log("start payment")
      if (!address || !signer || !signer.provider || !digiGoWallet) {
        console.log("address", address)
        console.log("signer", signer)
        console.log("digiGoWallet", digiGoWallet)
        console.log("not defined")
        return;
      }
      try {
        // eslint-disable-next-line camelcase
        const mockPayment = MockPayment__factory.connect(deploymentsJsonFile.mockPayment, signer);
        console.log(digiGoWallet.address);
  
        // await signer.sendTransaction({ to: digiGoWallet.address, value: ethers.utils.parseEther("0.5") });
        const data = mockPayment.interface.encodeFunctionData("pay");
        const op = await digiGoWallet.userOpHandler.createSignedUserOp({
          target: mockPayment.address,
          data,
          value: 100,
          gasLimit: 6100000,
          maxFeePerGas: 50000000000,
          maxPriorityFeePerGas: 55000000000
        });
        console.log("user op", op)
        digiGoWallet.bundlerClient.sendUserOpToBundler(op).then((tx) => {
          console.log(tx);
        });
        setIsPaymentLoading(true);
        console.log(digiGoWallet);
      } catch (e) {
        handle(e);
      } finally {
        setIsPaymentLoading(false);
      }
  
      setMode("confirm")
    }

    useEffect(() => {
      if (!scanedText) {
        return;
      }
      console.log("scanned", scanedText);
      setMode("review");
      
    }, [scanedText]);
  return (
    
    <Box
    pos="relative"
    h="100vh"
  
    _before={{
      content: '""',
      bgColor: (isConnected ? "DADADA":"white"),
      bgImage: (isConnected ? "":"assets/images/BackgroundLogin.png"),
      bgSize: "cover",
      pos: "absolute",
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      
    }}
  >
    <Layout>
    <Heading mt={"10vh"} color="accent">Welcome to DIGIGO</Heading>
{isConnected?
<Card>
  <CardBody>
    <Text color="white">View a summary of all your transactions over the last month.</Text>
  </CardBody>
</Card>:null
}
  <Box className= { (isConnected? 'userConectedButton' : "bottomConnectButton")} >

  <ConnectButton accountStatus={"address"} showBalance={false} chainStatus={"icon"}  />
  </Box>

{mode === "scan" && isConnected && <Box  className="stickyPayBtn"><Icon onClick={openScanModal}as={MdGroupWork} w={20} h={20} color='accent' /></Box>}
        {mode === "review" && (
          <>
          <Text fontSize="sm" color={configJsonFile.style.color.black.text.secondary}>
            Payment review goes here. And technical integration goes here too.
          </Text>
          <Button mt={25} onClick={confirmPay}>Confirm PAY</Button>
          </>
        )}

         <QRCodeScannerModal
        isOpen={scanModalDisclosure.isOpen}
        onScan={setScanedText}
        onClose={scanModalDisclosure.onClose}
      />
      {mode === "confirm" && (<Heading>Thank you payment. You Recived 2$ as reward</Heading>)}

      
    </Layout>
    </Box>
 
  );
};

export default HomePage;
