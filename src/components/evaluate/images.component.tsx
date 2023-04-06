import React from "react";

export const Images = (): JSX.Element => {
  return (
    <section className="evaluate images bg-blue">
      <div className="upper bg-white" />

      <div className="wrapper-xl pb">
        <div className="image-stack">
          <img
            src="/images/image-1.png"
            alt="image"
            className="image-stack__item--one"
          />
          <img
            src="/images/image-2.png"
            alt="image"
            className="image-stack__item--two"
          />
          <img
            src="/images/image-3.png"
            alt="image"
            className="image-stack__item--three"
          />
        </div>
      </div>
    </section>
  );
};
