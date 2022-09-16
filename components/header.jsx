import { Center, Heading, Container, Text } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import { year } from "../utils/year";

const Header = () => {
  return (
    <Center>
      <Container
        p={{ base: "auto", lg: "36px" }}
        pt={{ base: "36px" }}
        centerContent
      >
        <Heading
          as="h1"
          size={{ base: "3xl", lg: "4xl" }}
          textAlign="center"
          width="100%"
          centerContent
        >
          Toguro Ipsum
        </Heading>
        <Text fontSize={{ base: "sm", lg: "2xl" }} p="24px">
          Em pleno {year},{" "}
          <Typewriter
            options={{
              strings: [
                "ano da tecnologia",
                "ano de copa do mundo",
                "ano de eleição",
                "ano da liberdade",
                "ano do foguete",
                "ano do amor",
                "ano do Elon Musk",
                "obrigação estar sheipado",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </Text>
      </Container>
    </Center>
  );
};

export default Header;
