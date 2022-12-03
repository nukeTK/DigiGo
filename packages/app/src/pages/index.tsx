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
type PaymentPageMode = "scan" | "review" | "confirm" | "walletConnected";
import {
  WagmiConfig,
  createClient,
  defaultChains,
  configureChains,
  useAccount, useConnect
} from 'wagmi'
const HomePage: NextPage = () => {
  const { connector: activeConnector, isConnected } = useAccount()
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()
  const [mode, setMode] = useState<PaymentPageMode>("scan");
    console.log(isConnected,activeConnector)
    const scanModalDisclosure = useDisclosure();
    const [scanedText, setScanedText] = useState("");

    const openScanModal = () => {
      scanModalDisclosure.onOpen();
    };

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

{mode === "scan" && isConnected && <Box  className="stickyPayBtn"><Icon onClick={openScanModal} as={MdGroupWork} w={20} h={20} color='accent' /></Box>}
        {mode === "review" && (
          <Text fontSize="sm" color={configJsonFile.style.color.black.text.secondary}>
            Payment review goes here. And technical integration goes here too.
          </Text>
        )}

         <QRCodeScannerModal
        isOpen={scanModalDisclosure.isOpen}
        onScan={setScanedText}
        onClose={scanModalDisclosure.onClose}
      />
    </Layout>
    </Box>
 
  );
};

export default HomePage;
