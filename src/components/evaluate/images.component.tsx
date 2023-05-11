import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";

export const Images = (): JSX.Element => {
  const ref = useRef(null);
  const { enterCount } = useInViewport(ref);
  const inViewport = enterCount > 0 ? "inViewport" : "";

  return (
    <section className="evaluate images bg-white">
      <div className="upper bg-white" />

      <div className="wrapper-xl pb-20">
        <div className="image-stack">
          <img
            ref={ref}
            src="/images/visie-1-portrait.jpg"
            alt="image"
            className={`image-stack__item--one transition-config slide fade animation-delay-1 ${inViewport}`}
          />
          <img
            src="/images/visie-2.jpg"
            alt="image"
            className={`image-stack__item--two transition-config slide fade transition-delay-1 ${inViewport}`}
          />
          <img
            src="/images/visie-3.jpg"
            alt="image"
            className={`image-stack__item--three transition-config slide fade transition-delay-2 animation-delay-2 ${inViewport}`}
          />
        </div>
      </div>
    </section>
  );
};
