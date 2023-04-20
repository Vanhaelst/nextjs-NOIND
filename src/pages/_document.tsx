import { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title title="NOIND"></title>
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

        <Script src="../../flexmail.js" />
        <style id="flx-styles">{`
          #flxml_frm input[type="text"] {
            width: 100%;
            height: 50px;
            margin-top: 24px;
            border-radius: 6px;
            background-color: #323232;
            color: white;
          }
        `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>

      <script src="https://player.vimeo.com/api/player.js" async></script>
    </Html>
  );
}
