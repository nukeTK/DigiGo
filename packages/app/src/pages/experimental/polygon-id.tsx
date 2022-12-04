/* eslint-disable camelcase */
import { Stack, Text } from "@chakra-ui/react";
import { NextPage } from "next";

import { Layout } from "@/components/Layout";
import { Unit } from "@/components/Unit";

import configJsonFile from "../../../config.json";
import { useMemo } from "react";
import { QRCode } from "react-qr-svg";
import { proofRequest } from "../../lib/polygonId";

const PolygonIdPage: NextPage = () => {

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
