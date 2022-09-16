import { Flex } from "@chakra-ui/react";

const ControlsArea = ({ children }) => {
  return (
    <Flex
      flexDirection="column"
      marginX={{ base: "auto", lg: "24px" }}
      width={{ base: "100%", lg: "20%" }}
      justifyContent="flex-start"
      alignItems="center"
      marginTop={{ base: "12px", lg: "0" }}
    >
      {children}
    </Flex>
  );
};

export default ControlsArea;
