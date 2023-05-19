import React from "react";
import { gtmVirtualPageView } from '../../utils/gtmVirtualPageView'

export const Hero = (): JSX.Element => (
  <div
    style={{ backgroundImage: "url('/images/hero.png')" }}
    className="flex justify-center bg-cover bg-center hero"
  >
    <div className="wrapper flex flex-col items-center justify-center lg:flex-row">
      <img src="/images/logo_icon.png" alt="NOIND icon" className="logo" />
      <div className="flex flex-col items-center lg:items-start ">
        <h1 className="title mb-4 text-center font-sans text-white md:text-left">
          A novel way to express what we never thought we were able to express.
        </h1>
        <a href="#video" onClick={() => gtmVirtualPageView("button_click", "video_showcase")}>
          <div className="flex flex-row items-center">
            <img src="/images/play.svg" alt="play" />
            <p className="showcase pl-4 font-sans text-white">Video Showcase</p>
          </div>
        </a>
      </div>
    </div>
  </div>
);
