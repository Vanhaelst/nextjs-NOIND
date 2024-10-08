import Head from "next/head";
import {
  WorkingWith,
  Hero,
  Intro,
  Footer,
  Video,
  Evaluate,
  Demo,
  Navigation,
} from "@/components";
import { Bebas_Neue, IBM_Plex_Mono } from "next/font/google";
import { homeIntro } from "@/data/home-intro";
import React, { useEffect } from "react";
import { CookieBanner } from "@/components/cookie/cookie-banner.component";
import { gtmVirtualPageView } from "@/utils/gtmVirtualPageView";
import { useRouter } from "next/router";
import Popup from "@/molecules/event-popup/event-popup.component";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-ibmPlexMono",
});

export default function Home() {
  const { pathname } = useRouter();

  useEffect(() => {
    const mainDataLayer = {
      url: pathname,
    };

    gtmVirtualPageView("VirtualPageView", mainDataLayer);
  }, [pathname]);

  return (
    <>
      <Head>
        <title>NOIND</title>
        <meta
          name="description"
          content="NOIND is een virtueel ontwerp- en productieplatform en de centrale spil in een netwerk van ruimtelijke ontwerpers. NOIND verbindt ruimtelijk ontwerp met digitale productie, dat samenspel vertaalt zich in holografische productie."
        />
      </Head>

      <main className={`${bebasNeue.variable} ${ibmPlexMono.variable} `}>
        <Navigation />
        <Hero />
        <Demo />
        <Popup />

        <Intro
          paragraphs={homeIntro}
          cta="Ontdek onze academy en team"
          href="/academy"
          images
        />
        <WorkingWith />
        <Video />
        <Evaluate />
        <Footer />
        <CookieBanner />
      </main>
    </>
  );
}
