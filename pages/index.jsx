import "react";
import { ChakraProvider, Box, Text, Link, Center } from "@chakra-ui/react";
import Head from "../components/head";
import Header from "../components/header";
import IpsumGenerator from "../components/ipsumGenerator";

export default function Home() {
  return (
    <ChakraProvider>
      <Head />
      <Header />
      <Box pb="36px">
        <IpsumGenerator />
      </Box>
      <Center>
        <Text marginBottom="2em">
          <Link color="teal.500" href="https://twitter.com/thewizardlucas">
            Twitter
          </Link>
          {" — "}
          <Link
            color="teal.500"
            href="https://github.com/lucasfcosta/toguro-ipsum"
          >
            Github
          </Link>
        </Text>
      </Center>
    </ChakraProvider>
  );
}
