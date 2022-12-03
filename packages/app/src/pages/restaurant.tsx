import { NextPage } from "next";
import { Text, Image, Stack } from "@chakra-ui/react";

import { Layout } from "@/components/Layout";
import { Unit } from "@/components/Unit";

import configJsonFile from "../../config.json";

const RestaurantPage: NextPage = () => {
  return (
    <Layout>
      <Unit header="Restaurant">
        <Stack>
          <Text fontSize="sm" fontWeight="bold" color={configJsonFile.style.color.black.text.secondary}>
            This page is for restaurant. This should be on separated app in prod, we put together for simple demo
            purpose only.
          </Text>
          <Image src={"/assets/utils/sample-qr-code.png"} alt="qr" />
        </Stack>
      </Unit>
    </Layout>
  );
};

export default RestaurantPage;
