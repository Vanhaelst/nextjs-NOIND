import React from "react";

export const Banner = ({ title }: { title: string }): JSX.Element => (
  <div
    style={{ backgroundImage: "url('/images/hero.png')", height: "35vh" }}
    className="hero flex justify-center bg-cover bg-center"
  >
    <div className="wrapper flex flex-col items-center justify-center lg:flex-row">
      <h1 className="title mb-4 mt-10 pt-10 text-center font-sans text-white md:text-left">
        {title}
      </h1>
    </div>
  </div>
);
