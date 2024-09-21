import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";

export const AcademyImages = (): JSX.Element => {
  const ref = useRef(null);
  const { enterCount } = useInViewport(ref);
  const inViewport = enterCount > 0 ? "inViewport" : "";

  return (
    <section className="bg-gray-100 academy md:pt-20 lg:pt-0 ">
      <div className="upper bg-gray-100" />

      <div className="wrapper-xl pb-20">
        <div className="image-stack">
          <img
            ref={ref}
            src="/images/academy-2-portrait.jpg"
            alt="image"
            className={`image-stack__item--one transition-config slide fade ${inViewport} transition-delay-1`}
          />
          <img
            src="/images/academy-1.jpg"
            alt="image"
            className={`image-stack__item--two transition-config slide fade ${inViewport} animation-delay-1`}
          />
          <img
            src="/images/academy-3.jpg"
            alt="image"
            className={`image-stack__item--three transition-config slide fade ${inViewport} animation-delay-2 transition-delay-2`}
          />
        </div>
      </div>
    </section>
  );
};
