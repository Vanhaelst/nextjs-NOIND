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
              content="virtueel, digitale productie, creatieve denkers, beeldend, virtuele realiteit, technologische evolutie, holografisch ontwerp, academy"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="NOIND" />
          <meta property="og:type" content="page" />
          <meta property="og:url" content="http://www.noind.be/" />
          <meta
              property="og:image"
              content="http://www.noind.be/noind-share.png"
          />
          <meta
              property="og:description"
              content="NOIND is een virtueel ontwerp- en productieplatform en de centrale spil in een netwerk van ruimtelijke ontwerpers. NOIND verbindt ruimtelijk ontwerp met digitale productie, dat samenspel vertaalt zich in holografische productie"
          />
          <meta property="og:site_name" content="NOIND" />
          {/*<meta property="fb:admins" content="Facebook numberic ID" />*/}
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
            background-image: none;
          }
        `}</style>

          <Script
              id="HotJarAnalytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                  __html: `(function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3503931,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
              }}
          />
      </Head>
      <body>
          <Main />
          <NextScript />
          <noscript
              dangerouslySetInnerHTML={{
                  __html: `<iframe src=https://www.googletagmanager.com/ns.html?id=GTM-M2KZZ5M" height="0" width="0" style="display: none; visibility: hidden;" />`,
              }}
          />
      </body>

      <script src="https://player.vimeo.com/api/player.js" async></script>
    </Html>
  );
}
