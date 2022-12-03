import { NextPage } from "next";
import { Text, Stack } from "@chakra-ui/react";

import { Layout } from "@/components/Layout";
import { Unit } from "@/components/Unit";

import configJsonFile from "../../config.json";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Unit header="Home">
        <Stack>
          <Text fontSize="sm" color={configJsonFile.style.color.black.text.secondary}>
            This page is for home. Cool things go here.
          </Text>
        </Stack>
      </Unit>
    </Layout>
  );
};

export default HomePage;
