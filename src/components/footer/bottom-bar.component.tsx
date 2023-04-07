import React from "react";

export const BottomBar = () => {
  const year = new Date().getFullYear();
  return (
    <div style={{ backgroundColor: "#151513" }} className="py-6">
      <div className="wrapper flex justify-between  flex-col lg:flex-row">
        <div className="flex items-center flex-col lg:flex-row">
          <img
            src="/images/logo-white.svg"
            alt="NOIND logo"
            className="mb-5 lg:mb-2 lg:mr-5"
            width={130}
          />
          <p className="font-serif text-sm text-white">
            Alle rechten voorbehouden - NOIND {year}
          </p>
        </div>
        <p className="font-serif text-sm text-white text-center lg:text-left">
          <a href="#" className="hover:underline">
            Privacy policy
          </a>{" "}
          |{" "}
          <a href="#" className="hover:underline">
            Cookie policy
          </a>
        </p>
      </div>
    </div>
  );
};
