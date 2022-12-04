/* eslint-disable camelcase */
import { Button, Input, Stack, Text } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import WalletConnect from "@walletconnect/client";
import { convertHexToUtf8 } from "@walletconnect/utils";
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
  const { address, isConnected } = useAccount();
  const { data: signer } = useSigner();
  const { handle } = useErrorToast();

  const { digiGoWallet } = useDigiGoWallet();

  const [isLoading, setIsLoading] = useState(false);

  const [walletConnectURI, setWalletConnectURI] = useState("");
  const [isWalletConnectConnecting, setIsWalletConnectConnecting] = useState(false);
  const [isWalletConnectSessionEstablished, setIsWalletConnectSessionEstablished] = useState(false);
  const [connectedApp, setConnectedApp] = useState<{ name: string; url: string }>();

  const connectWithWalletConnect = async (walletConnectURI: string) => {
    if (!signer || !digiGoWallet) {
      return;
    }
    setIsWalletConnectConnecting(true);
    try {
      let walletConnectConnector = new WalletConnect({
        uri: walletConnectURI,
      });
      if (walletConnectConnector.connected) {
        console.log("kill previous session and recreate session");

        await walletConnectConnector.killSession();
        walletConnectConnector = new WalletConnect({
          uri: walletConnectURI,
        });
      }
      walletConnectConnector.on("session_request", async (error, payload) => {
        console.log("session_request", payload);
        if (error) {
          throw error;
        }
        console.log("approving session");
        walletConnectConnector.approveSession({ chainId: 80001, accounts: [digiGoWallet.address] });
        console.log("session approved");
        const { peerMeta } = payload.params[0];
        setConnectedApp({ ...peerMeta });
        setIsWalletConnectConnecting(false);
        setIsWalletConnectSessionEstablished(true);
      });
      walletConnectConnector.on("call_request", async (error, payload) => {
        console.log("call_request", payload);
        if (error) {
          throw error;
        }
        if (payload.method === "eth_sendTransaction") {
          console.log("eth_sendTransaction");
          // await processTx(
          //   linkWalletAddress,
          //   payload.params[0].to,
          //   payload.params[0].data,
          //   payload.params[0].value,
          //   payload.params[0].gas
          // );
          // walletConnectConnector.approveRequest({
          //   id: payload.id,
          //   result: transactionHash,
          // });
        }
        if (payload.method === "personal_sign") {
          console.log("personal_sign");
          const message = convertHexToUtf8(payload.params[0]);
          console.log("signing message");
          const signature = await signer.signMessage(message);
          console.log("signature", signature);
          walletConnectConnector.approveRequest({
            id: payload.id,
            result: signature,
          });
        }
        if (payload.method === "eth_signTypedData") {
          console.log("eth_signTypedData");
          // console.log("signing message");
          // console.log(payload.params[1]);
          // const { domain, message: value, types } = JSON.parse(payload.params[1]);
          // delete types.EIP712Domain;
          // console.log(domain, types, value);
          // const signature = await signTypedData({ domain, types, value });
          // console.log("signature", signature);
          // walletConnectConnector.approveRequest({
          //   id: payload.id,
          //   result: signature,
          // });
        }
      });
      walletConnectConnector.on("disconnect", (error, payload) => {
        console.log("disconnect", payload);
        if (error) {
          throw error;
        }
        // clearWalletConnect();
      });
    } catch (e) {
      handle(e);
      // clearWalletConnect();
    }
  };

  return (
    <Layout>
      <Unit header="Account Abstraction Identity Portal">
        <Stack spacing="4">
          <Text fontSize="sm" color={configJsonFile.style.color.black.text.secondary}>
            Here you can enable Account Abstraction with Safe
          </Text>
          <ConnectButton />
          {isConnected && digiGoWallet && (
            <Stack>
              <Text fontSize={"sm"} fontWeight={"bold"}>
                Account
              </Text>
              <Text fontSize={"sm"}>{digiGoWallet.address}</Text>
              <Text fontSize={"sm"} fontWeight={"bold"}>
                Wallet Connect
              </Text>
              <Input
                placeholder="wallet connect"
                onChange={(e) => setWalletConnectURI(e.target.value)}
                value={walletConnectURI}
              ></Input>
              <Button onClick={() => connectWithWalletConnect(walletConnectURI)}>Connect</Button>
            </Stack>
          )}
        </Stack>
      </Unit>
    </Layout>
  );
};

export default AccountAbstractionPage;
