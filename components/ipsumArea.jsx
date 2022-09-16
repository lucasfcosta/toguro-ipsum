import { Textarea, Center } from "@chakra-ui/react";

const IpsumArea = ({ value }) => {
  return (
    <Center>
      <Textarea
        width={{ base: "90%", lg: "800px" }}
        height={{ base: "180px", lg: "280px" }}
        placeholder="Palavras de um mero camponês"
        marginY={{ base: "12px", lg: "auto" }}
        value={value}
      />
    </Center>
  );
};

export default IpsumArea;
