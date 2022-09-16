import "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
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
    </ChakraProvider>
  );
}
