import React from "react";
import { Player } from "video-react";

export const Video = () => {
  return (
    <>
      <div className="bg-dark upper pt" id="video" />
      <div className="wrapper pb-5">
        <Player
          className="video"
          playsInline
          poster="/images/video.png"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        />
      </div>
    </>
  );
};
