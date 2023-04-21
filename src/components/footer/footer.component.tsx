import React, { ReactEventHandler } from "react";
import { Button } from "@/molecules/button/button.molecule";
import { BottomBar } from "@/components/footer/bottom-bar.component";
import Link from "next/link";
import fm from "../../../public/flexmail";

export const Footer = (): JSX.Element => {
  return (
    <>
      <footer className="bg-dark" id="footer">
        <div className="wrapper grid gap-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="self-end">
              <h3 className="mb-1 font-serif font-bold text-white">NOIND</h3>
              <p className="font-serif text-white">
                Pr. Edward Poppestraat 24c
                <br /> 9220 Moerzeke
              </p>
              <h3 className="mt-4 font-serif text-white">
                <span className="font-bold">E-mail:</span>{" "}
                <Link href="mailto:info@noind.be">info@noind.be</Link>
              </h3>
            </div>
            <div className="self-end" />
            <div className="mt-5 hidden md:flex">
              <Link href="https://www.facebook.com/NOIND.be" target="_blank">
                <img
                  src="/images/facebook.svg"
                  alt="facebook"
                  className="mr-3"
                  width={24}
                />
              </Link>
              <Link href="https://www.instagram.com/noind.be/" target="_blank">
                <img
                  src="/images/instagram.svg"
                  alt="instagram"
                  className="mr-3"
                  width={24}
                />
              </Link>{" "}
              <Link
                href="https://www.linkedin.com/company/noind/"
                target="_blank"
              >
                <img src="/images/linkedin.svg" alt="linkedin" width={24} />
              </Link>
            </div>
          </div>
          <div className="">
            <iframe
              name="iframe_flxml_form"
              id="iframe_flxml_form"
              onLoad={
                fm.load() as ReactEventHandler<HTMLIFrameElement> | undefined
              }
              src="https://return.flexmail.eu/page/opt-in-form/eyJ0eXAiOiJKV1QiLCJhbGciOiJFZERTQSJ9.eyJzdWIiOiJyZXR1cm4vb3B0LWluIiwiaWF0IjoxNjgxOTExNzM0LjIwNTAxNSwiYWlkIjo1NzQ5Niwib3B0ZnBrIjoiYWEyNjgzZTkwYzA4NDBjOGI5MTE0ZDExZTc1N2M3YzQxNTQxIn0.XsWRmcpkQYPGsnwek7jakzXV7aAtqt5JyfTh4R_McettamYSLR_wjADDxiUlyKGVvHhvjuyddlNs5qRlU0hvAg"
              style={{ overflow: "hidden", height: "195px", width: "100%" }}
              height="100%"
              width="100%"
            />

            <h3 className="mb-5 font-serif font-bold text-white">
              Schrijf je in op onze nieuwsbrief
            </h3>
            <input
              placeholder="E-mail"
              className="mb-5 mt-0 px-2 font-serif text-white"
            />
            <Button
              cta="Inschrijven"
              className="float-right w-full md:w-auto"
            />
          </div>
          <div className="block flex justify-center md:hidden">
            <Link href="https://www.facebook.com/NOIND.be" target="_blank">
              <img
                src="/images/facebook.svg"
                alt="facebook"
                className="mr-3"
                width={24}
              />
            </Link>
            <Link href="https://www.instagram.com/noind.be/" target="_blank">
              <img
                src="/images/instagram.svg"
                alt="instagram"
                className="mr-3"
                width={24}
              />
            </Link>{" "}
            <Link
              href="https://www.linkedin.com/company/noind/"
              target="_blank"
            >
              <img src="/images/linkedin.svg" alt="linkedin" width={24} />
            </Link>
          </div>
        </div>
      </footer>
      <BottomBar />
    </>
  );
};
