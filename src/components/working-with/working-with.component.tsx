import React from "react";
import { Button } from "@/molecules/button/button.molecule";

export const WorkingWith = (): JSX.Element => {
  return (
    <section className="bg-dark pt pb" id="working-with">
      <div className="wrapper">
        <h2 className="title mb-12 font-sans text-white">Werken met noind</h2>
        <p className="mb-8 font-serif leading-7 text-white md:leading-10">
          NOIND bestaat door en voor creatieve conceptuele denkers die al
          beeldend aan de slag willen om tot unieke ontwerpen te komen in
          co-creatie met hun eindklant. Designen met ondersteuning van een
          holografisch productieplatform optimaliseert de designcyclus en
          efficiëntie van het traject. NOIND faciliteert een gedecentraliseerde
          werkwijze en het creëren van een beeldende tussentaal tussen klant en
          designer.
        </p>
        <p className="mb-10 font-serif leading-7 text-white md:leading-10">
          In samenwerking met onze vakkundige productiepartners bezorgt de
          NOIND-designer de eindklant een kwalitatief materieel eindproduct
          bovenop een unieke en betekenisvolle beleving.
        </p>
        <Button cta="Lees meer" />
      </div>
    </section>
  );
};
