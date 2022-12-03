/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
import { Button, Stack, Text } from "@chakra-ui/react";
import Safe, { SafeFactory } from "@safe-global/safe-core-sdk";
import EthersAdapter from "@safe-global/safe-ethers-lib";
import { ethers } from "ethers";
import { NextPage } from "next";
import { useState } from "react";
import { useAccount, useSigner } from "wagmi";

import { Layout } from "@/components/Layout";
import { Unit } from "@/components/Unit";
import { useErrorToast } from "@/hooks/useErrorToast";

import deploymentsJsonFile from "../../../../../account-abstraction/packages/contracts/deployments.json";
import { DeterministicDeployer } from "../../../../../account-abstraction/packages/contracts/lib/infinitism/DeterministicDeployer";
import { SafeProxy4337__factory } from "../../../../../account-abstraction/packages/contracts/typechain-types";
import configJsonFile from "../../../config.json";

const AccountAbstractionPage: NextPage = () => {
  const { address } = useAccount();
  const { data: signer } = useSigner();
  const { handle } = useErrorToast();

  const [isLoading, setIsLoading] = useState(false);

  const deploySafe = async () => {
    if (!address || !signer || !signer.provider) {
      return;
    }
    try {
      setIsLoading(true);

      const safeProxy4337CreationArgument = ethers.utils.defaultAbiCoder.encode(
        ["address", "address", "address"],
        [deploymentsJsonFile.sindleton, deploymentsJsonFile.accountAbstractionModule, address]
      );
      const safeProxy4337CreationCreationCode = ethers.utils.solidityPack(
        ["bytes", "bytes"],
        [SafeProxy4337__factory.bytecode, safeProxy4337CreationArgument]
      );
      const safe = await DeterministicDeployer.deploy(safeProxy4337CreationCreationCode);

      // const ethAdapter = new EthersAdapter({
      //   ethers,
      //   signerOrProvider: signer,
      // });
      // const safeFactory = await SafeFactory.create({ ethAdapter });
      // const safeAccountConfig = {
      //   owners: [address],
      //   threshold: 1,
      // };
      // const safeDeploymentConfig = {
      //   saltNonce: "0",
      // };
      // const predictedDeployAddress = await safeFactory.predictSafeAddress({
      //   safeAccountConfig,
      //   safeDeploymentConfig,
      // });
      // console.log("predictedDeployAddress", predictedDeployAddress);
      // const code = await signer.provider.getCode(predictedDeployAddress);
      // let safe: Safe;
      // if (code === "0x") {
      //   console.log("Safe is not deployed");
      //   safe = await safeFactory.deploySafe({
      //     safeAccountConfig,
      //     safeDeploymentConfig,
      //   });
      // } else {
      //   console.log("Safe is already deployed");
      //   safe = await Safe.create({
      //     ethAdapter,
      //     safeAddress: predictedDeployAddress,
      //   });
      // }

      // const accountAbstractionModule = EIP4337Manager__factory.connect(
      //   deploymentsJsonFile.accountAbstractionModule,
      //   signer
      // );

      // accountAbstractionModule
      // accountAbstractionModule.setupEIP4337();

      // safe.executeTransaction();
      // safe.isModuleEnabled();
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
            <Button onClick={deploySafe} isLoading={isLoading}>
              Test
            </Button>
          )}
        </Stack>
      </Unit>
    </Layout>
  );
};

export default AccountAbstractionPage;
