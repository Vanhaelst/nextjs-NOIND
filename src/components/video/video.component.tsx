import React from "react";
import { Player, BigPlayButton } from "video-react";

export const Video = () => {
  return (
    <>
      <div className="bg-dark upper pt" id="video" />
      <div className="wrapper pb-5">
        <Player
          playsInline
          poster="/images/video.png"
          src="https://noind.publiplus.be/noind-animate.mp4"
        >
          <BigPlayButton />
        </Player>
      </div>
    </>
  );
};
