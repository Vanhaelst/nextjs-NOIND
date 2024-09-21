import React from "react";
import { Founder } from "@/components/founders/founder.component";
import { team } from "@/data/team";

export const Founders = () => {
  return (
    <section className="demo pt pb founders bg-gray-100" id="founders">
      <div className="wrapper grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <h2 className="title mb-12 font-sans">Ontmoet de founders</h2>
          <p className="text-md intro mb-8 font-serif leading-7 md:leading-10">
            Het Academy netwerk zal opgebouwd en geleid worden door
            NOIND-founders Mario Fleurinck en Maud Mertens.
          </p>
          <div className="hidden md:block">
            <Founder {...team.mario} />
            <Founder {...team.moud} />
            <Founder {...team.filip} />
            <Founder {...team.dimi} />
          </div>
        </div>

        <div>
          <Founder {...team.mario} classnames="block md:hidden" />
          <Founder {...team.sammy} />
          <Founder {...team.moud} classnames="block md:hidden" />
          <Founder {...team.brecht} />
          <Founder {...team.filip} classnames="block md:hidden" />
          <Founder {...team.wout} />
          <Founder {...team.dimi} classnames="block md:hidden" />
          <Founder {...team.lisa} />
        </div>
      </div>
    </section>
  );
};
