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
          src="noind.publiplus.be/noind-animate.mp4"
        />
      </div>
    </>
  );
};
