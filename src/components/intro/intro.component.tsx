import React from "react";
import { Button } from "@/molecules/button/button.molecule";
import { Images } from "@/components/intro/images.component";
import Link from "next/link";

export const Intro = (): JSX.Element => {
  return (
    <>
      <section className="wrapper pt intro">
        <p className="width-85 mb-8 font-serif leading-7 text-black md:leading-10">
          NOIND is een virtueel ruimtelijk design-platform en de centrale spil
          in een netwerk van ruimtelijke ontwerpers. NOIND verbindt ruimtelijk
          design met digitale productie, dat samenspel vertaalt zich naar
          holografische productie. Een efficiënt en gedecentraliseerd model die
          designers dichter bij hun klanten brengt, klanten dichter bij zichzelf
          en de wereld dichter bij een duurzame toekomst.
        </p>
        <p className="width-85 mb-10 font-serif leading-7 text-black md:leading-10">
          NOIND ontwikkelt, integreert en schaalt ruimtelijk design op basis van
          digital-twin-concepten. Op unieke wijze gidst een technologische
          toepassing de designer en klant naar een betekenisvolle verbinding met
          als einddoel het doorlopen van een uiterst efficiënte designcylus die
          aansluit bij budget, productiemogelijkheden en klantvraag.
        </p>
        <Link href="/academy" >
          <Button cta="Ontdek onze academy" />
        </Link>
      </section>
      <Images />
    </>
  );
};
