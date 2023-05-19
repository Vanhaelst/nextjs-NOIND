import React from "react";
import { Button } from "@/molecules/button/button.molecule";
import Link from "next/link";
import { demo } from "@/components/navigation/navigation.data";
import {gtmVirtualPageView} from "@/utils/gtmVirtualPageView";

export const Demo = (): JSX.Element => {
  return (
    <section className="demo bg-blue pt pb" id="demo">
      <div className="wrapper grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <h2 className="title mb-12 font-sans text-white">
            Bezoek onze digitale toonzaal
          </h2>
          <p className="mb-8 font-serif leading-7 text-white md:leading-10">
            Meer weten over NOIND? Breng een bezoek aan onze digitale toonzaal.
            Dit kan vanop eigen locatie, enige vereiste is dat u een VR-bril ter
            beschikking hebt.<sup>*</sup>
          </p>
          <p className="mb-8 font-serif leading-7 text-white md:leading-10">
            Na reservering van uw bezoek, krijgt u een bevestigingsmail met
            verdere instructies.
          </p>
          <p className="mb-8 font-serif leading-7 text-white md:leading-10">
            Wees welkom in het NOIND Universe!
          </p>
          <p className="mb-8 font-serif text-xs leading-loose text-white">
            <sup>*</sup>Hebt u geen VR-bril, maar wenst u toch contact? Stuur een mailtje naar{" "}
            <a href="mailto:info@noind.be" className="hover:underline">
              info@noind.be
            </a>
            .
          </p>
          <Link href={demo} target="_blank" onClick={() => gtmVirtualPageView("button_click", "demo_book")}>
            <Button cta="Boek hier" />
          </Link>
        </div>
        <img
          src="/images/demo.png"
          alt="demo"
          className="flex self-center justify-self-center pt-10 md:justify-self-end md:pt-0"
          style={{ width: "80%" }}
        />
      </div>
    </section>
  );
};
