import { Button, useDisclosure, Text } from "@chakra-ui/react";
import { NextPage } from "next";

import { Layout } from "@/components/Layout";
import { QRCodeScannerModal } from "@/components/QRCodeScannerModal";
import { Unit } from "@/components/Unit";
import configJsonFile from "../../config.json";
import { useEffect, useState } from "react";

type PaymentPageMode = "scan" | "review" | "confirm";

const PaymentPage: NextPage = () => {
  const scanModalDisclosure = useDisclosure();

  const [mode, setMode] = useState<PaymentPageMode>("scan");

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
    <Layout>
      <Unit header="Scan Restaurant QR">
        <Text fontSize="sm" color={configJsonFile.style.color.black.text.secondary}>
          This page is for payment. Scan QR Code and review the payment, and confirmation.
        </Text>
        {mode === "scan" && <Button onClick={openScanModal}>Scan</Button>}
        {mode === "review" && (
          <Text fontSize="sm" color={configJsonFile.style.color.black.text.secondary}>
            Payment review goes here. And technical integration goes here too.
          </Text>
        )}
      </Unit>
      <QRCodeScannerModal
        isOpen={scanModalDisclosure.isOpen}
        onScan={setScanedText}
        onClose={scanModalDisclosure.onClose}
      />
    </Layout>
  );
};

export default PaymentPage;
