import React, { useState } from "react";
import { navigation } from "./navigation.data";

export const Navigation = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  /*
  // Burger menus
  document.addEventListener("DOMContentLoaded", function () {
    // open
    const burger = document.querySelectorAll(".navbar-burger");
    const menu = document.querySelectorAll(".navbar-menu");

    if (burger.length && menu.length) {
      for (var i = 0; i < burger.length; i++) {
        burger[i].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }

    // close
    const close = document.querySelectorAll(".navbar-close");
    const backdrop = document.querySelectorAll(".navbar-backdrop");

    if (close.length) {
      for (var i = 0; i < close.length; i++) {
        close[i].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }

    if (backdrop.length) {
      for (var i = 0; i < backdrop.length; i++) {
        backdrop[i].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }
  });*/

  return (
    <div className="wrapper navigation fixed">
      <nav className="relative flex items-center justify-between bg-white px-4 py-4">
        <a className="text-3xl font-bold leading-none" href="#">
          <img src="/images/logo.svg" alt="NOIND logo" width={150} />
        </a>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center p-3 text-blue-600"
            onClick={toggleOpen}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden lg:flex lg:flex lg:w-auto lg:items-center lg:space-x-8">
          {navigation.map(({ label, href }) => (
            <li>
              <a
                className="text-md font-serif text-violet-900 hover:text-violet-500"
                href={href}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="text-gray-300">
            <svg
              width="2px"
              height="30px"
              viewBox="0 0 2 40"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="Symbols"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Navigation"
                  transform="translate(-1229.000000, -35.000000)"
                  stroke="#ECECEC"
                >
                  <line
                    x1="1229.65707"
                    y1="35.5"
                    x2="1229.65707"
                    y2="74.0917544"
                    id="Path-2"
                  ></line>
                </g>
              </g>
            </svg>
          </li>
          <li>
            <a
              className="text-md hidden rounded-xl bg-orange-400 px-6 py-2 font-serif text-sm text-white transition hover:bg-orange-500 lg:inline-block"
              href="#demo"
            >
              Book Demo
            </a>
          </li>
        </ul>
      </nav>
      <div className={`navbar-menu relative z-50 ${!isOpen && "hidden"}`}>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed bottom-0 left-0 top-0 flex w-5/6 max-w-sm flex-col overflow-y-auto border-r bg-white px-6 py-6">
          <div className="mb-8 flex items-center">
            <a className="mr-auto text-3xl font-bold leading-none" href="/">
              <img src="/images/logo.svg" alt="NOIND logo" width={150} />
            </a>
            <button className="navbar-close" onClick={toggleOpen}>
              <svg
                className="h-6 w-6 cursor-pointer text-gray-400 hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              {navigation.map(({ label, href }) => (
                <li className="mb-1">
                  <a
                    className="block rounded p-4 text-sm text-md font-serif text-violet-900 hover:text-violet-500"
                    href={href}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a
                className="text-md rounded-xl block bg-orange-400 px-6 py-2 font-serif text-center text-sm text-white transition hover:bg-orange-500 lg:inline-block"
                href="#"
              >
                Book demo
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
