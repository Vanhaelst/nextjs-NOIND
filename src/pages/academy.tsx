import Head from "next/head";
import { Banner, Demo, Intro, Navigation, Footer } from "@/components";
import { Bebas_Neue, IBM_Plex_Mono } from "next/font/google";
import { academyIntro } from "@/data/academy-intro";
import { Founders } from "@/components/founders/founders.component";
import { AcademyImages } from "@/components/academy-images/academy-images.component";
import React, {useEffect} from "react";
import { CookieBanner } from "@/components/cookie/cookie-banner.component";
import {useRouter} from "next/router";
import {gtmVirtualPageView} from "@/utils/gtmVirtualPageView";

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
        <title>NOIND - Academy</title>
        <meta
          name="description"
          content="Om bij te dragen aan deze technologische evolutie, is er diepgaand onderzoek nodig naar sociaal-maatschappelijke vraagstukken over die digitale transitie. Onze academy is een kennis laboratorium ter ondersteuning van fundamentele vernieuwing. "
        />
      </Head>
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
