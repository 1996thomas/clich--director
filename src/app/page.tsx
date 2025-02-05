"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const frames = [
  "/loader/white/1w.svg",
  "/loader/white/2w.svg",
  "/loader/white/3w.svg",
  "/loader/white/4w.svg",
  "/loader/white/5w.svg",
  "/loader/white/6w.svg",
  "/loader/white/7w.svg",
  "/loader/white/8w.svg",
  "/loader/white/9w.svg",
  "/loader/white/10w.svg",
  "/loader/white/11w.svg",
  "/loader/white/12w.svg",
  "/loader/white/13w.svg",
  "/loader/white/14w.svg",
  "/loader/white/15w.svg",
  "/loader/white/16w.svg",
  "/loader/white/17w.svg",
];

export default function GifLoaderWithPercentage() {
  const [progress, setProgress] = useState(0);
  const [frameIndex, setFrameIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            router.push("/films");
          }, 10);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 55);
    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    const frameInterval = setInterval(() => {
      setFrameIndex((prevIndex) => (prevIndex + 1) % frames.length);
    }, 100);
    return () => clearInterval(frameInterval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-5 text-6xl font-black absolute bottom-[1vw] right-[2vw]">
        {progress}%
      </div>
      <img
        src={frames[frameIndex]}
        alt={`Frame ${frameIndex + 1}`}
        className="object-contain h-[40vh] w-auto"
      />
      <div
        className="bg-white fixed bottom-0 left-0 h-3 origin-left w-full"
        style={{ transform: `scaleX(${progress / 100}) ` }}
      >
        {""}
      </div>
    </div>
  );
}
