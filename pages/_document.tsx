import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <div id="notifications-root" />
        <div id="modals-root" />
        <NextScript />
      </body>
    </Html>
  );
}
