import type { AppProps } from "next/app";
import Script from "next/script";

import "@/styles/globals.css";
import "../molecules/button/button.styles.css";
import "../components/navigation/navigation.styles.css";
import "../components/hero/hero.styles.css";
import "../components/intro/images.styles.css";

import "../components/academy-images/images.styles.css";
import "../components/intro/intro.styles.css";
import "../components/evaluate/evaluate.styles.css";

import "../components/evaluate/images.styles.css";
import "../components/footer/footer.styles.css";
import "../components/video/video.styles.css";

import "../components/founders/founders.styles.css";
import "../components/working-with/working-with.styles.css";

const GTM_ID = "GTM-M2KZZ5M";
export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Script id="google-tag-manager" strategy="afterInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `}
    </Script>
    <Component {...pageProps} />
    </>;
}
