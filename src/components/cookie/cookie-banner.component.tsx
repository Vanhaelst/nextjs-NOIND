import React, { useEffect, useState } from "react";
import Link from "next/link";

const GOOGLE_ANALYTICS = "UA-";
const setCookies = () => {
  const googleTagManager = document.createElement("script");
  googleTagManager.type = "text/javascript";
  googleTagManager.async = true;
  googleTagManager.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS}`;
  const foo = document.getElementsByTagName("script")[0];
  foo.parentNode.insertBefore(googleTagManager, foo);

  const dataLayer = document.createElement("script");
  dataLayer.text = `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${GOOGLE_ANALYTICS}');
          `;
  const bar = document.getElementsByTagName("script")[1];
  bar.parentNode.insertBefore(dataLayer, bar);

  // you can add facebook-pixel and other cookies here
};

export const CookieBanner = () => {
  const [show, setShow] = useState(false);
  const [isCookieSet, setIsCookieSet] = useState(false);

  useEffect(() => {
    const acceptedCookies = localStorage.getItem("acceptedCookies");

    if (!acceptedCookies) {
      setTimeout(() => {
        setShow(true);
      }, 2500);
    }
  }, [show]);

  useEffect(() => {
    if (!isCookieSet) {
      const acceptedCookies = localStorage.getItem("acceptedCookies");
      if (acceptedCookies) {
        setCookies();
        setIsCookieSet(true);
      }
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
          className="w-72 rounded-lg bg-white p-6 shadow-md"
          style={{ cursor: "auto" }}
        >
          <span className="text-md mb-3 block  w-full font-serif leading-normal text-gray-800 sm:w-48">
            We use cookies to provide a better user experience.
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
                className="w-full rounded-lg bg-indigo-600  px-4 py-2 text-center font-serif text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  focus:ring-offset-indigo-200 "
                onClick={handleClick}
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
