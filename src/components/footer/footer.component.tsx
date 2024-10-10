"use client";

import React, { useState } from "react";
import { BottomBar } from "@/components/footer/bottom-bar.component";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { gtmVirtualPageView } from "@/utils/gtmVirtualPageView";
import createBrevoContact from "@/utils/createBrevoContact";
import { Button } from "@/molecules/button/button.molecule";

export const Footer = (): JSX.Element => {
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState(false);

  const onSubmit = (data: any) => {
    setErrors(false);
    setIsSending(true);

    const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const isEmailValid = !!data.email.match(mailformat);

    if (!data.email || !isEmailValid) {
      setErrors(true);
      setIsSending(false);
    } else {
      setIsSending(false);
      createBrevoContact({
        data: data,
        onError: (e: any) => {
          console.error("error", e);
        },
        onSuccess: () => {
          reset();
          setErrors(false);
          setIsSending(false);
        },
      }).catch((e) => {
        console.error("error", e);
      });
    }
  };

  const { register, handleSubmit, reset } = useForm();

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
                <Link
                  href="mailto:info@noind.be"
                  onClick={() => gtmVirtualPageView("footer_mail", "")}
                >
                  info@noind.be
                </Link>
              </h3>
            </div>
            <div className="self-end" />
            <div className="mt-5 hidden md:flex">
              <Link
                href="https://www.facebook.com/NOIND.be"
                target="_blank"
                onClick={() => gtmVirtualPageView("footer_facebook", "")}
              >
                <img
                  src="/images/facebook.svg"
                  alt="facebook"
                  className="mr-3"
                  width={24}
                />
              </Link>
              <Link
                href="https://www.instagram.com/noind.be/"
                target="_blank"
                onClick={() => gtmVirtualPageView("footer_instagram", "")}
              >
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
                onClick={() => gtmVirtualPageView("footer_linkedin", "")}
              >
                <img src="/images/linkedin.svg" alt="linkedin" width={24} />
              </Link>
            </div>
          </div>
          <div className="">
            <h3 className="font-serif font-bold text-white">
              Schrijf je in op onze nieuwsbrief
            </h3>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-end space-y-6"
            >
              <input
                type="email"
                placeholder="E-mailadres *"
                defaultValue=""
                className={`w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 md:col-span-12 px-2 font-serif ${
                  errors && `border-2 border-red-700`
                }`}
                {...register("email")}
              />

              <Button
                cta="Verzenden"
                disabled={isSending}
                className={
                  isSending
                    ? "w-fit cursor-not-allowed bg-gray-500 text-white"
                    : "w-fit hover:bg-gray-200"
                }
              />
            </form>
          </div>
          <div className="flex justify-center md:hidden">
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
