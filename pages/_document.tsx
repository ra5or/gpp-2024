import { fontSans } from "@config/fonts";
import clsx from "clsx";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head />
      <body className={clsx("font-sans antialiased", fontSans.variable)}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
