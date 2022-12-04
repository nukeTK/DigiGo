/* eslint-disable camelcase */
import { Stack, Text, Button } from "@chakra-ui/react";
import { NextPage } from "next";

import { Layout } from "@/components/Layout";
import { Unit } from "@/components/Unit";

import configJsonFile from "../../../config.json";
import { useMemo } from "react";
import { QRCode } from "react-qr-svg";
import { proofRequest } from "../../lib/polygonId";
import { useDigiGoWallet } from "@/hooks/useDigiGoWallet";

const PolygonIdPage: NextPage = () => {
  const { digiGoWallet } = useDigiGoWallet();
  return (
    <Layout>
      <Unit header="Account Abstraction Portal">
        <Stack>
          <Text fontSize="sm" color={configJsonFile.style.color.black.text.secondary}>
            Polygon ID Verify Example
          </Text>
          <QRCode level="Q" style={{ width: 256 }} value={JSON.stringify(proofRequest)} />
        </Stack>
      </Unit>
    </Layout>
  );
};

export default PolygonIdPage;
