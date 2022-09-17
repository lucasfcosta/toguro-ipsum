import React from "react";
import { Box, Flex, Center, Button } from "@chakra-ui/react";
import IpsumArea from "./ipsumArea";
import ControlsArea from "./controlsArea";
import Input from "./input";
import { STARTER, MIDDLE } from "../utils/phrases";

const getRandomItem = (arr) => {
  const i = Math.floor(Math.random() * arr.length);
  return arr[i];
};

const clean = (str) => {
  const punctuation = ["!", "?", "."];
  const hasPunctuation = punctuation.some((p) => str.endsWith(p));
  return hasPunctuation ? str : str + ".";
};

const generate = (paragraphs, words) => {
  const result = [];

  for (let i = 0; i < paragraphs; i++) {
    const paragraph = [];
    paragraph.push(clean(getRandomItem(STARTER)));

    while (paragraph.join(" ").split(" ").length < words) {
      let next = clean(getRandomItem(MIDDLE));

      // Dedupe
      while (next === paragraph[paragraph.length - 1]) {
        next = clean(getRandomItem(MIDDLE));
      }

      paragraph.push(next);
    }

    result.push(paragraph.join(" "));
  }

  return result.join("\n\n");
};

const DEFAULT_PARAGRAPHS = 2;
const DEFAULT_WORDS = 50;

const IpsumGenerator = () => {
  const [paragraphs, setParagraphs] = React.useState(DEFAULT_PARAGRAPHS);
  const [words, setWords] = React.useState(DEFAULT_WORDS);
  const [content, setContent] = React.useState("");

  const newIpsum = () => {
    if (sa_event) {
      sa_event("ipsum_generated");
    }
    const content = generate(paragraphs, words);
    setContent(content);
  };

  return (
    <Center width={{ base: "100%" }}>
      <Box width={{ base: "100%", lg: "auto" }} justifyContent="center">
        <Flex justifyContent="center" flexDir={{ base: "column", lg: "row" }}>
          <IpsumArea value={content} />
          <ControlsArea>
            <Input
              label="Parágrafos"
              value={paragraphs}
              onChange={setParagraphs}
            />
            <Input
              label="Palavras (approx. por parágrafo)"
              value={words}
              onChange={setWords}
              isLast
            />
          </ControlsArea>
        </Flex>
        <Center flexBasis="100%">
          <Flex flexDirection="column" width="100%" alignItems="center">
            <Button
              marginTop="24px"
              height="48px"
              w={{ base: "90%", lg: "100%" }}
              colorScheme="teal"
              onClick={newIpsum}
            >
              O shape fala por mim
            </Button>
          </Flex>
        </Center>
      </Box>
    </Center>
  );
};

export default IpsumGenerator;
