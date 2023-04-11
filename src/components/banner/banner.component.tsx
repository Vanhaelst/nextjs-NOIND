import React from "react";

export const Banner = (): JSX.Element => (
  <div
    style={{ backgroundImage: "url('/images/hero.png')", height: '40vh' }}
    className="hero flex justify-center bg-cover bg-center"
  >
    <div className="wrapper flex flex-col items-center justify-center lg:flex-row">
      <h1 className="title mb-4 text-center font-sans text-white md:text-left pt-10">
        NOIND ACADEMY
      </h1>
    </div>
  </div>
);
