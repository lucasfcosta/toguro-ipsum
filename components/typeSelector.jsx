import React from "react";
import { ButtonGroup, Button } from "@chakra-ui/react";

const TypeSelector = () => {
  const [value, setValue] = React.useState("p");

  return (
    <ButtonGroup
      marginBottom="12px"
      width="90%"
      size="sm"
      isAttached
      variant="outline"
    >
      <Button
        isActive={value === "p"}
        onClick={() => setValue("p")}
        width="100%"
      >
        Parágrafos
      </Button>
      <Button
        isActive={value === "w"}
        onClick={() => setValue("w")}
        width="100%"
      >
        Palavras
      </Button>
    </ButtonGroup>
  );
};

export default TypeSelector;
