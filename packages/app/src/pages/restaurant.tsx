import { NextPage } from "next";
import { Text } from "@chakra-ui/react";

import { Layout } from "@/components/Layout";
import { Unit } from "@/components/Unit";

import configJsonFile from "../../config.json";

const RestaurantPage: NextPage = () => {
  return (
    <Layout>
      <Unit header="Restaurant">
        <Text fontSize="sm" color={configJsonFile.style.color.black.text.secondary}>
          This page is for restaurant. Static payment QR Code goes here.
        </Text>
      </Unit>
    </Layout>
  );
};

export default RestaurantPage;
