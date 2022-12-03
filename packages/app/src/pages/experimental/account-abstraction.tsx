/* eslint-disable camelcase */
import { Button, Stack, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { useState } from "react";
import { useAccount, useSigner } from "wagmi";

import { Layout } from "@/components/Layout";
import { Unit } from "@/components/Unit";
import { useDigiGoWallet } from "@/hooks/useDigiGoWallet";
import { useErrorToast } from "@/hooks/useErrorToast";

import deploymentsJsonFile from "../../../../../account-abstraction/packages/contracts/deployments.json";
import { MockPayment__factory } from "../../../../../account-abstraction/packages/contracts/typechain-types";
import configJsonFile from "../../../config.json";

const AccountAbstractionPage: NextPage = () => {
  const { address } = useAccount();
  const { data: signer } = useSigner();
  const { handle } = useErrorToast();

  const { digiGoWallet } = useDigiGoWallet();

  const [isLoading, setIsLoading] = useState(false);

  const deploySafe = async () => {
    if (!address || !signer || !signer.provider || !digiGoWallet) {
      return;
    }
    try {
      const mockPayment = MockPayment__factory.connect(deploymentsJsonFile.mockPayment, signer);
      console.log(digiGoWallet.address);

      // await signer.sendTransaction({ to: digiGoWallet.address, value: ethers.utils.parseEther("0.5") });
      const data = mockPayment.interface.encodeFunctionData("pay");
      const op = await digiGoWallet.userOpHandler.createSignedUserOp({
        target: mockPayment.address,
        data,
        value: 100,
        gasLimit: 6100000,
      });
      const tx = await digiGoWallet.bundlerClient.sendUserOpToBundler(op);
      console.log(tx);
      setIsLoading(true);
      console.log(digiGoWallet);
    } catch (e) {
      handle(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <Unit header="Account Abstraction Portal">
        <Stack>
          <Text fontSize="sm" color={configJsonFile.style.color.black.text.secondary}>
            Here you can enable Account Abstraction with Safe
          </Text>
          {!address && (
            <Text fontSize="sm" color={configJsonFile.style.color.black.text.secondary}>
              Please connect wallet
            </Text>
          )}
          {address && (
            <Button
              onClick={deploySafe}
              isLoading={isLoading}
              isDisabled={!address || !signer || !signer.provider || !digiGoWallet}
            >
              Test
            </Button>
          )}
        </Stack>
      </Unit>
    </Layout>
  );
};

export default AccountAbstractionPage;
