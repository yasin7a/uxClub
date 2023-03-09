import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className="bg-white"
        style={{
          fontFamily: "Hind Siliguri, Roboto, sans-serif",
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
