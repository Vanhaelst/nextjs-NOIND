import Head from "next/head";
import { Banner, Navigation, Footer } from "@/components";
import { Bebas_Neue, IBM_Plex_Mono } from "next/font/google";
import React from "react";
import { policy } from "@/data/policy";

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
        <title>NOIND - Policy</title>
        <meta
          name="description"
          content="A novel way to express what we never thought we were able to express."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${bebasNeue.variable} ${ibmPlexMono.variable} `}>
        <Navigation />
        <Banner title="Policy" />

        <section className="pt pb" id="evaluate">
          <div className="wrapper grid">
            {policy.map(({ title, description }) => (
              <div className="mb-20">
                <h2 className="subtitle full mb-5 font-sans">{title}</h2>
                {description?.map((text) => (
                  <p className="full mb-20 mb-2 font-serif leading-7 md:leading-10">
                    {text}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
