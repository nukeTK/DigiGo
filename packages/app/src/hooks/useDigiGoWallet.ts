/* eslint-disable camelcase */
import { HttpRpcClient } from "@account-abstraction/sdk/dist/src/HttpRpcClient";
import { ethers } from "ethers";
import { createContext, useEffect, useState } from "react";
import { useAccount, useSigner } from "wagmi";

import deploymentsConfigFile from "../../../../account-abstraction/packages/contracts/deployments.json";
import { DigiGoWalletUserOpHandler } from "../../../../account-abstraction/packages/contracts/lib/account-abstraction/DigiGoWalletUserOpHandler";
import {
  DigiGoWallet,
  DigiGoWallet__factory,
} from "../../../../account-abstraction/packages/contracts/typechain-types";

export interface DigiGoWalletContextValue {
  bundlerClient: HttpRpcClient;
  userOpHandler: DigiGoWalletUserOpHandler;
  address: string;
  contract: DigiGoWallet;
  isDeployed: boolean;
  signerAddress: string;
  ethBalanceBigNumber: ethers.BigNumber;
  ethFormatedBalance: string;
}

export interface DigiGoWalletContextParams {
  DigiGoWallet?: DigiGoWalletContextValue;
}

export const defaultDigiGoWalletContextValue = {
  DigiGoWallet: undefined,
};

export const DigiGoWalletContext = createContext<DigiGoWalletContextParams>(defaultDigiGoWalletContextValue);

export interface DigiGoWalletContextProviderProps {
  children: React.ReactNode;
}

const GNOSIS_SAFE_SINGLETON = "0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552";

export const useDigiGoWallet = () => {
  const { isConnected } = useAccount();
  const { data: signer } = useSigner();
  const [digiGoWallet, setDigiGoWallet] = useState<DigiGoWalletContextValue>();
  const [isIntervalSet, setIsIntervalSet] = useState(false);

  useEffect(() => {
    (async () => {
      if (!isConnected || !signer) {
        setDigiGoWallet(undefined);
        return;
      }
      const provider = signer.provider as any;
      const load = async () => {
        const bundlerClient = new HttpRpcClient(
          `${window.location.origin}/api/bundler/80001/rpc`, // only this
          deploymentsConfigFile.entryPoint,
          80001
        );
        const userOpHandler = new DigiGoWalletUserOpHandler({
          entryPointAddress: deploymentsConfigFile.entryPoint,
          aaModuleAddress: deploymentsConfigFile.accountAbstractionModule,
          singletonAddress: GNOSIS_SAFE_SINGLETON,
          signer,
          factoryAddress: deploymentsConfigFile.factory,
        });
        const address = await userOpHandler.getWalletAddress();
        const contract = DigiGoWallet__factory.connect(address, signer);
        const isDeployed = await provider
          .getCode(address)
          .then((code: string) => code !== "0x")
          .catch(() => false);
        const signerAddress = await signer.getAddress();
        const ethBalanceBigNumber = await provider.getBalance(address);
        const ethFormatedBalance = ethers.utils.formatEther(ethBalanceBigNumber);
        setDigiGoWallet({
          bundlerClient,
          userOpHandler,
          address,
          contract,
          isDeployed,
          signerAddress,
          ethBalanceBigNumber,
          ethFormatedBalance,
        });
      };
      load();
      if (!isIntervalSet) {
        setIsIntervalSet(true);
        setInterval(async () => {
          load();
        }, 10000);
      }
    })();
  }, [isConnected, signer]);

  return { digiGoWallet };
};
