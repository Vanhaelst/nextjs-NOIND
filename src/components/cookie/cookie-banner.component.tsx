import React, { useEffect, useState } from "react";
import Link from "next/link";

export const CookieBanner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const acceptedCookies = localStorage.getItem("acceptedCookies");
    if (!acceptedCookies) {
      setTimeout(() => {
        setShow(true);
      }, 2500);
    }
  }, [show]);

  const handleClick = () => {
    localStorage.setItem("acceptedCookies", "true");
    setShow(false);
  };

  return (
    <div className={`cookie-policy ${show ? "show" : ""}`}>
      <div style={{ backgroundColor: "rgb(255, 255, 255)" }}>
        <div
          className="w-96 rounded-lg bg-white p-6 shadow-md max-w-full"
          style={{ cursor: "auto" }}
        >
          <span className="text-md mb-3 block  w-full font-serif leading-normal text-gray-800 sm:w-80 max-w-full">
            We gebruiken cookies om een betere gebruikerservaring te bieden.
          </span>
          <div className="flex items-center justify-between">
            <Link
              className="mr-1 font-serif text-xs text-gray-400 hover:text-gray-800"
              href="/policy"
            >
              Privacy Policy
            </Link>
            <div className="w-1/2">
              <button
                type="button"
                className="w-full rounded-lg bg-orange-600  px-4 py-2 text-center font-serif text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2  focus:ring-offset-orange-200 "
                onClick={handleClick}
              >
                Aanvaarden
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
