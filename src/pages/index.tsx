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
import React from "react";
import {CookieBanner} from "@/components/cookie/cookie-banner.component";

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
        <Intro
          paragraphs={homeIntro}
          cta="Ontdek onze academy"
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
