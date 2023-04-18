import React from "react";
import Link from "next/link";

export const BottomBar = () => {
  const year = new Date().getFullYear();
  return (
    <div style={{ backgroundColor: "#151513" }} className="pt-6 pb-20">
      <div className="wrapper flex flex-col items-center justify-between lg:flex-row">
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <img
            src="/images/logo-white.svg"
            alt="NOIND logo"
            className="mb-5 lg:mb-0 lg:mr-5"
            width={130}
          />
          <p className="font-serif text-sm text-white text-center lg:text-left">
            Alle rechten voorbehouden - NOIND {year}
          </p>
        </div>
        <p className="text-center font-serif text-sm text-white lg:text-left">
          <Link href="/policy" className="hover:underline">
            Privacy and cookie policy
          </Link>{" "}
          - Made by{" "}
          <a href="http://www.pixell.be" target="_blank" className="hover:underline">
            Pixell
          </a>
        </p>
      </div>
    </div>
  );
};
