import { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <meta charSet="UTF-8" />
          <meta name="robots" content={process.env.META_ROBOTS} />
          <title>NOIND - Life changing interiors</title>
          <meta
              name="keywords"
              content="keuken, badkamer, totaalinterieur, Kletz, trends, inspiratie, creativiteit, ontwerpen, douche, bad, huis, interieur, stijl, welzijnsindex, modulariteit, toekomstgericht, visueliserren, tips"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="Kletz - Life changing interiors" />
          <meta property="og:type" content="page" />
          <meta property="og:url" content="http://www.kletz.be/" />
          <meta
              property="og:image"
              content="/images/kletz-share.png"
          />
          <meta
              property="og:description"
              content="Op zoek naar keuken, badkamer of totaalinterieur van je dromen? Er is maar 1 adres, Kletz! Wij helpen met ontwerpen tot realiseren. Een ruimte waar gebruiksgemak en trends worden samen gevoegd tot de wonderkamer waarvan u niet wist dat ze bestond."
          />
          <meta property="og:site_name" content="Pergo-Lux" />
          <meta property="fb:admins" content="Facebook numberic ID" />
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
      { process.env.environment === 'production'
          ? <div className="overlay-black" id="go-live"/>
          : <Main />
      }
        <NextScript />
      </body>

      <script src="https://player.vimeo.com/api/player.js" async></script>
    </Html>
  );
}
