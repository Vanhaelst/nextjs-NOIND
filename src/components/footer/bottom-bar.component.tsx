import React from "react";

export const BottomBar = () => {
  const year = new Date().getFullYear();
  return (
    <div style={{ backgroundColor: "#151513" }} className="py-6">
      <div className="wrapper flex justify-between">
        <div className="flex items-center">
          <img
            src="/images/logo-white.svg"
            alt="NOIND logo"
            className="mr-5"
            width={130}
          />
          <p className="font-serif text-sm text-white">
            Alle rechten voorbehouden - NOIND {year}
          </p>
        </div>
        <p className="font-serif text-sm text-white">
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
