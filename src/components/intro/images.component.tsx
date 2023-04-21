import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";

export const Images = (): JSX.Element => {
  const ref = useRef(null);
  const { enterCount } = useInViewport(ref);
  const inViewport = enterCount > 0 ? "inViewport" : "";

  return (
    <section className="bg-dark intro">
      <div className="upper bg-white" />

      <div className="wrapper-xl pb">
        <div className="image-stack">
          <img
            ref={ref}
            src="/images/intro.jpeg"
            alt="image"
            className={`image-stack__item--one transition-config slide fade ${inViewport} transition-delay-1`}
          />
          <img
            src="/images/4.jpg"
            alt="image"
            className={`image-stack__item--two transition-config slide fade ${inViewport} animation-delay-1`}
          />
          <img
            src="/images/3.jpg"
            alt="image"
            className={`image-stack__item--three transition-config slide fade ${inViewport} animation-delay-2 transition-delay-2`}
          />
        </div>
      </div>
    </section>
  );
};
