import React from "react";
import { Button } from "@/molecules/button/button.molecule";
import { Images } from "@/components/intro/images.component";
import Link from "next/link";

interface introProps {
  paragraphs: string[];
  cta?: string;
  href?: string;
  images?: boolean;
}

interface buttonProps {
  href: introProps["href"];
  cta: introProps["cta"];
}

const renderButtons = ({ href, cta }: buttonProps) => {
  const anchor = href?.startsWith("#");

  if (!cta) {
    return null;
  }

  if (anchor) {
    return (
      <a href={href}>
        <Button cta={cta} />
      </a>
    );
  }

  return (
    <Link href={href || "#"}>
      <Button cta={cta} />
    </Link>
  );
};

export const Intro = ({
  cta,
  href,
  paragraphs,
  images,
}: introProps): JSX.Element => {
  return (
    <>
      <section className={`wrapper pt intro ${!images && "pb"}`}>
        {paragraphs?.map((text, index) => (
          <p
            key={index}
            className={`mb-8 font-serif italic leading-7 text-black md:leading-10 ${
              index === paragraphs.length - 1 && "pb-10"
            }`}
          >
            {text}
          </p>
        ))}
        {cta && renderButtons({ href: href, cta: cta })}
      </section>
      {images && <Images />}
    </>
  );
};
