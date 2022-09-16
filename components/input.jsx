import React from "react";
import {
  Box,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

const Input = ({ label, isLast, value, onChange }) => {
  return (
    <Box display="block" width="90%" marginBottom={isLast ? "12px" : "24px"}>
      <FormLabel>{label}</FormLabel>
      <NumberInput w="100%" value={value} onChange={onChange}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Box>
  );
};

export default Input;
