import { fontSans } from "@config/fonts";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head />
      <body className={`font-sans antialiased ${fontSans.variable}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
