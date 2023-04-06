import React from "react";
import { Button } from "@/molecules/button/button.molecule";

export const Demo = (): JSX.Element => {
  return (
    <section className="demo bg-blue pt pb">
      <div className="wrapper grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <h2 className="title mb-12 font-sans text-white">Boek een demo</h2>
          <p className="mb-8 font-serif leading-7 text-white md:leading-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
            finibus orci. Pellentesque vel erat accumsan, malesuada augue eget,
            ultricies enim. Vivamus condimentum scelerisque nisi eget euismod.
            Sed pulvinar gravida placerat. Fusce faucibus pellentesque mauris,
            at eleifend turpis suscipit sit amet. In est nunc,
          </p>
          <Button cta="Boek hier" />
        </div>
        <img src="/images/demo.png" alt="demo" className="flex justify-self-center self-center pt-10 md:justify-self-end md:pt-0" style={{ width: "80%" }} />
      </div>
    </section>
  );
};
