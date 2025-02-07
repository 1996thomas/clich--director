"use client";
import React from "react";
import "@vidstack/react/player/styles/base.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import { useIsMobile } from "./useIsMobile";

export default function VideoPlayer({
  videoUrl,
  provider,
}: {
  videoUrl: string;
  provider: string;
}) {
  const isMobile = useIsMobile(); // Détecte si l'écran est mobile
  return provider === "youtube" ? (
    <div>
      {isMobile ? (
        <MediaPlayer src={`${videoUrl.split("https://")[1]}`} controls>
          <MediaProvider />
        </MediaPlayer>
      ) : (
        <MediaPlayer
          src={`${videoUrl.split("https://")[1]}`}
          autoPlay
          muted
          controls
        >
          <MediaProvider />
        </MediaPlayer>
      )}
    </div>
  ) : (
    <div>
      {isMobile ? (
        <MediaPlayer src={videoUrl.split("https://")[1]} controls>
          <MediaProvider />
        </MediaPlayer>
      ) : (
        <MediaPlayer src={videoUrl.split("https://")[1]} autoPlay controls>
          <MediaProvider />
        </MediaPlayer>
      )}
    </div>
  );
}
