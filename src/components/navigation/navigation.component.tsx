import React, { useEffect, useState } from "react";
import { demo, navigation } from "./navigation.data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (isOpen) {
      document.getElementsByTagName("html")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("html")[0].style.overflow = "";
    }
  }, [isOpen]);

  const pathname = usePathname();

  return (
    <>
      <div>
        <div className="wrapper navigation fixed z-40">
          <nav className="relative flex items-center justify-between bg-white px-4 py-4">
            <Link className="text-3xl font-bold leading-none" href="/">
              <img src="/images/logo.svg" alt="NOIND logo" width={150} />
            </Link>
            <div className="lg:hidden">
              <button
                className="navbar-burger flex items-center p-3 text-violet-900"
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
              {navigation.map(({ label, href, type }) => {
                const anchor = href.startsWith("#");
                const homepage = pathname === "/";

                if ((anchor && homepage) || (anchor && type === "self")) {
                  return (
                    <li key={label}>
                      <a
                        className="text-md font-serif text-violet-900 hover:text-violet-500"
                        href={href}
                      >
                        {label}
                      </a>
                    </li>
                  );
                }
                return (
                  <li key={label}>
                    <Link
                      className="text-md font-serif text-violet-900 hover:text-violet-500"
                      href={`/${href}`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
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
              {/*
              <li>
                <a
                  className="text-md hidden rounded-xl bg-orange-400 px-6 py-2 font-serif text-sm text-white transition hover:bg-orange-500 lg:inline-block"
                  href={demo}
                >
                  Boek een demo
                </a>
              </li>*/}
            </ul>
          </nav>
        </div>
        <div className={`navbar-menu relative z-50 ${!isOpen && "hidden"}`}>
          <div
            className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
            onClick={toggleOpen}
          />
          <nav className="fixed bottom-0 left-0 top-0 flex w-5/6 max-w-sm flex-col overflow-y-auto border-r bg-white px-6 py-6">
            <div className="mb-8 flex items-center">
              <Link
                className="mr-auto text-3xl font-bold leading-none"
                href="/"
                onClick={toggleOpen}
              >
                <img src="/images/logo.svg" alt="NOIND logo" width={150} />
              </Link>
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
                {navigation.map(({ label, href, type }) => {
                  const anchor = href.startsWith("#");
                  const homepage = pathname === "/";

                  if ((anchor && homepage) || (anchor && type === "self")) {
                    return (
                      <li key={label}>
                        <a
                          onClick={toggleOpen}
                          className="text-md block rounded p-4 font-serif text-sm text-violet-900 hover:text-violet-500"
                          href={href}
                        >
                          {label}
                        </a>
                      </li>
                    );
                  }
                  return (
                    <li className="mb-1" key={label}>
                      <Link
                        className="text-md block rounded p-4 font-serif text-sm text-violet-900 hover:text-violet-500"
                        href={`/${href}`}
                        onClick={toggleOpen}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <a
                  className="text-md block rounded-xl bg-orange-400 px-6 py-2 text-center font-serif text-sm text-white transition hover:bg-orange-500 lg:inline-block"
                  href={demo}
                >
                  Boek een demo
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="booking">
        <a
            className="text-md floatSmall block bg-orange-400 px-6 py-2 md:px-10 md:py-4 text-center font-serif text-sm text-white transition hover:bg-orange-500 lg:inline-block md:rounded-xl"
            href={demo}
            target="_blank"
        >
          Boek een demo
        </a>
      </div>
    </>
  );
};
