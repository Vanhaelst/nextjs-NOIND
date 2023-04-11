import React from "react";
import { Button } from "@/molecules/button/button.molecule";
import { Images } from "@/components/intro/images.component";
import Link from "next/link";

export const Intro = (): JSX.Element => {
  return (
    <>
      <section className="wrapper pt intro">
        <p className="width-85 mb-8 font-serif italic leading-7 text-black md:leading-10">
          ‘Meer doen met minder’ is het streefdoel in het ontwikkelen van
          technologie die digitalisering van ontwerp en maakprocessen mogelijk
          maakt. Transitie is topsport en vraagt om een slimme integrator van
          technologische innovaties die onmiddellijke waarde toevoegt in
          transformatieve projecten.
        </p>
        <p className="width-85 mb-8 font-serif leading-7 text-black md:leading-10">
          NOIND bouwt op de fundamentele vraag: Hoe zou een product, dienst,
          assemblage zichzelf definiëren, mocht het daar de hefbomen toe hebben?
          Zelflerende AI oplossingen formuleren daar vandaag al antwoorden op.
          In intuïtie en verbinding verschillen humane en zelflerende systemen
          van elkaar. NOIND kiest voor virtuele co-creatie omdat het de
          gebruiker als vol beschouwt én het de rol van de ontwerper en de
          ontwerpcyclus durft te actualiseren.
        </p>
        <p className="width-85 mb-10 font-serif leading-7 text-black md:leading-10">
          NOIND is een virtueel ontwerp- en productieplatform en de centrale
          spil in een netwerk van ruimtelijke ontwerpers. NOIND verbindt
          ruimtelijk ontwerp met digitale productie, dat samenspel vertaalt zich
          in holografische productie. Een efficiënt en gedecentraliseerd model
          die ontwerpers dichter bij hun klanten brengt, klanten dichter bij
          zichzelf en de wereld dichter bij een duurzame toekomst.
        </p>
        <p className="width-85 mb-10 font-serif leading-7 text-black md:leading-10">
          NOIND ontwikkelt, integreert en schaalt ruimtelijk ontwerp op basis
          van digital-twin-concepten. Op unieke wijze gidst een technologische
          toepassing de ontwerper en klant naar een betekenisvolle verbinding
          met als einddoel het doorlopen van een uiterst efficiënte
          ontwerpcyclus die aansluit bij budget, productiemogelijkheden en
          klantvraag.
        </p>
        <Link href="/academy">
          <Button cta="Ontdek onze academy" />
        </Link>
      </section>
      <Images />
    </>
  );
};
