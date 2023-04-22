import Head from "next/head";
import { Banner, Demo, Intro, Navigation, Footer } from "@/components";
import { Bebas_Neue, IBM_Plex_Mono } from "next/font/google";
import { academyIntro } from "@/data/academy-intro";
import { Founders } from "@/components/founders/founders.component";
import { AcademyImages } from "@/components/academy-images/academy-images.component";
import React from "react";
import { CookieBanner } from "@/components/cookie/cookie-banner.component";

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
        <title>NOIND - Academy</title>
        <meta
          name="description"
          content="A novel way to express what we never thought we were able to express."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*<div className="overlay-black" id="go-live"/>*/}

      <main className={`${bebasNeue.variable} ${ibmPlexMono.variable} `}>
        <Navigation />
        <Banner title="NOIND ACADEMY" />
        <Intro
          paragraphs={academyIntro}
          cta="Ontmoet de founders"
          href="#founders"
        />
        <Founders />
        <AcademyImages />
        <Demo />
        <Footer />

        <CookieBanner />
      </main>
    </>
  );
}
