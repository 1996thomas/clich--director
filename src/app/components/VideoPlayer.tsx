"use client";
import React from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

export default function VideoPlayer({ videoUrl }: { videoUrl: string }) {
  const options = {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "mute",
      "volume",
      "captions",
      "settings",
      "fullscreen",
    ],
    youtube: {
      noCookie: true,
      rel: 0,
      modestbranding: 1,
    },
    vimeo: {
      byline: false,
      portrait: false,
      title: false,
    },
  };

  return (
    <Plyr
      source={{
        type: "video",
        sources: [{ src: videoUrl, provider: "youtube" }],
      }}
      options={options}
    />
  );
}
