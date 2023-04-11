import React from "react";
import { Player } from "video-react";


//TODO: add correct video

export const Video = () => {
  return (
    <>
      <div className="bg-dark upper pt" id="video" />
      <div className="wrapper pb-5">
        <Player
          playsInline
          poster="/images/video.png"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        />
      </div>
    </>
  );
};
