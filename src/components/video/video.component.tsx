import React from "react";

export const Video = () => {
  return (
    <>
      <div className="bg-dark upper pt" id="video" />
      <div className="wrapper pb-5">
        <div
          style={{ padding: "56.25%0 0 0", position: "relative" }}
          className="video-react"
        >
          <iframe
            src="https://player.vimeo.com/video/821200596?h=ab6adab836"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            title="NOIND"
          />
        </div>
      </div>
    </>
  );
};
