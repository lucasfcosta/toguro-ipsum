import "react";
import { default as HeadTag } from "next/head";

const Head = () => {
  return (
    <HeadTag>
      <title>Toguro Ipsum</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <script
        async
        defer
        src="https://scripts.simpleanalyticscdn.com/latest.js"
      ></script>
      <noscript>
        <img
          src="https://queue.simpleanalyticscdn.com/noscript.gif"
          alt=""
          referrerpolicy="no-referrer-when-downgrade"
        />
      </noscript>

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@thewizardlucas" />
      <meta name="twitter:title" content="Toguro Ipsum" />
      <meta
        name="twitter:description"
        content="2022, ano da tecnologia: deixe o shape falar por você."
      />
      <meta name="twitter:image" content="/togs.png" />
    </HeadTag>
  );
};

export default Head;
