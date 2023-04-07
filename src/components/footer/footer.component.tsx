import React from "react";
import { Button } from "@/molecules/button/button.molecule";
import { BottomBar } from "@/components/footer/bottom-bar.component";
import Link from "next/link";

export const Footer = (): JSX.Element => {
  return (
    <>
      <footer className="bg-dark">
        <div className="wrapper grid gap-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="self-end">
              <h3 className="mb-1 font-serif text-xl font-bold text-white">
                NOIND
              </h3>
              <p className="font-serif text-xl text-white">
                Lokerenbaan 112
                <br /> 9240 Zele
              </p>
            </div>
            <div className="self-end">
              <h3 className="font-serif text-xl text-white">
                <span className="font-bold">Telefoon:</span> 052 44 61 60
              </h3>
              <h3 className="font-serif text-xl text-white">
                <span className="font-bold">E-mail:</span> info@noind.be
              </h3>
            </div>
            <div className="mt-5 hidden md:flex">
              <Link href="http://www.facebook.com" target="_blank">
                <img
                  src="/images/facebook.svg"
                  alt="facebook"
                  className="mr-3"
                  width={36}
                />
              </Link>
              <Link href="http://www.instagram.com" target="_blank">
                <img
                  src="/images/instagram.svg"
                  alt="instagram"
                  className="mr-3"
                  width={36}
                />
              </Link>{" "}
              <Link href="http://www.linkedin.com" target="_blank">
                <img src="/images/linkedin.svg" alt="linkedin" width={36} />
              </Link>
            </div>
          </div>
          <div className="">
            <h3 className="mb-5 font-serif text-xl font-bold text-white">
              Schrijf je in op onze nieuwsbrief
            </h3>
            <input
              placeholder="E-mail"
              className="mb-5 mt-0 px-2 font-serif text-white"
            />
            <Button cta="Inschrijven" className="float-right" />
          </div>
          <div className="mt-5 block flex md:hidden">
            <Link href="http://www.facebook.com" target="_blank">
              <img
                src="/images/facebook.svg"
                alt="facebook"
                className="mr-3"
                width={36}
              />
            </Link>
            <Link href="http://www.instagram.com" target="_blank">
              <img
                src="/images/instagram.svg"
                alt="instagram"
                className="mr-3"
                width={36}
              />
            </Link>{" "}
            <Link href="http://www.linkedin.com" target="_blank">
              <img src="/images/linkedin.svg" alt="linkedin" width={36} />
            </Link>
          </div>
        </div>
      </footer>
      <BottomBar />
    </>
  );
};
