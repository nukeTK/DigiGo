import {
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FaGithub } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";

import { Head } from "@/components/Head";

import configJsonFile from "../../../config.json";
import { useRouter } from "next/router";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  const routes = [
    { path: "/", name: "Home" },
    { path: "/payment", name: "Payment" },
    { path: "/restaurant", name: "Restaurant" },
  ];

  return (
    <Flex minHeight={"100vh"} direction={"column"} bg={configJsonFile.style.color.black.bg}>
      <Head />
      <Container as="section" maxW="8xl">
        <Box as="nav" py="4">
          <HStack justify="space-between" alignItems={"center"} h="12">
            <Text color={configJsonFile.style.color.white.text.primary} fontWeight="bold">
              <Link href="/">{configJsonFile.name}</Link>
            </Text>
            <HStack spacing="3">
              <ConnectButton accountStatus={"address"} showBalance={false} chainStatus={"icon"} />
              <Menu>
                <MenuButton
                  rounded={configJsonFile.style.radius}
                  as={IconButton}
                  aria-label="Options"
                  icon={<AiOutlineMenu />}
                  variant="outline"
                />
                <MenuList>
                  {routes.map(({ path, name }) => {
                    return (
                      <MenuItem
                        key={path}
                        onClick={() => {
                          router.push(path);
                        }}
                      >
                        {name}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
            </HStack>
          </HStack>
        </Box>
      </Container>
      <Container maxW="lg" flex={1}>
        {children}
      </Container>
      <Container maxW="8xl">
        <Box as="nav" py="4">
          <HStack justify={"space-between"}>
            <Text fontSize={"xs"} color={configJsonFile.style.color.white.text.secondary} fontWeight={"medium"}>
              <Text as="span" mr="2">
                😘
              </Text>
              Built in{" "}
              <Link href={configJsonFile.url.hackathon} target={"_blank"}>
                ETHIndia
              </Link>
            </Text>
            <HStack spacing={"4"}>
              <Link href={configJsonFile.url.docs} target={"_blank"}>
                <Icon
                  as={MdArticle}
                  aria-label="article"
                  color={configJsonFile.style.color.white.text.secondary}
                  w={6}
                  h={6}
                />
              </Link>
              <Link href={configJsonFile.url.github} target={"_blank"}>
                <Icon
                  as={FaGithub}
                  aria-label="github"
                  color={configJsonFile.style.color.white.text.secondary}
                  w={6}
                  h={6}
                />
              </Link>
            </HStack>
          </HStack>
        </Box>
      </Container>
    </Flex>
  );
};
