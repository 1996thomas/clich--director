"use client";
import React from "react";
import "@vidstack/react/player/styles/base.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";

export default function VideoPlayer({
  videoUrl,
  provider,
}: {
  videoUrl: string;
  provider: string;
}) {
  return provider === "youtube" ? (
    <div>
      <MediaPlayer
        src={`${videoUrl.split("https://")[1]}`}
        autoPlay
        muted
        controls
      >
        <MediaProvider />
      </MediaPlayer>
    </div>
  ) : (
    <div>
      <MediaPlayer src={videoUrl.split("https://")[1]} autoPlay controls>
        <MediaProvider />
      </MediaPlayer>
    </div>
  );
}
