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
          <Link
            onClick={() => {
              if (!sa_event) return;
              sa_event("twitter-link");
            }}
            color="teal.500"
            href="https://twitter.com/thewizardlucas"
          >
            Twitter
          </Link>
          {" — "}
          <Link
            onClick={() => {
              if (!sa_event) return;
              sa_event("github-link");
            }}
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
