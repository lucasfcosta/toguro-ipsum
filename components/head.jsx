import "react";
import { default as HeadTag } from "next/head";

const Head = () => {
  return (
    <HeadTag>
      <title>Toguro Ipsum</title>
      <link rel="icon" href="/favicon.ico" />
    </HeadTag>
  );
};

export default Head;
