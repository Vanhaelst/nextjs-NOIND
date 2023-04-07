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
            src="/images/image-1.png"
            alt="image"
            className={`image-stack__item--one transition-config slide fade ${inViewport} float transition-delay-1`}
          />
          <img
            src="/images/image-2.png"
            alt="image"
            className={`image-stack__item--two transition-config slide fade ${inViewport} float animation-delay-1`}
          />
          <img
            src="/images/image-3.png"
            alt="image"
            className={`image-stack__item--three transition-config slide fade ${inViewport} float animation-delay-2 transition-delay-2`}
          />
        </div>
      </div>
    </section>
  );
};
