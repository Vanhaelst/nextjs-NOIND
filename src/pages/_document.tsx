import { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title />
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
                  
          .fm_body {
            background-color: transparent !important;
            color: white;
            overflow: hidden;
          }
         
          td {
            display: flex;
          }

          #flxml_frm input {
            height: 50px !important;
            margin-top: 24px;
            border-radius: 6px !important;
            background-color: #323232;
            color: white !important;
            margin-top: 0;
          }
          #flxml_frm button {
            padding: 13px 50px;
            color: black;
            background-color: white !important;
            position: relative;
            margin-bottom: 45px;
            background-image: none;
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
