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
  const [isFinalPhase, setIsFinalPhase] = useState(false);
  // Ces états vont servir à appliquer des transitions (fade out)
  const [showPercentage, setShowPercentage] = useState(true);
  const [showProgressBar, setShowProgressBar] = useState(true);
  // Pour le logo, on gère son opacité (fade in puis fade out)
  const [logoVisible, setLogoVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    let hideTimeout: NodeJS.Timeout;
    let logoFadeTimeout: NodeJS.Timeout;
    let redirectTimeout: NodeJS.Timeout;

    progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(progressInterval);
          // On lance la phase finale
          setIsFinalPhase(true);
          // On affiche le logo (fade in)
          setLogoVisible(true);
          // Après 500ms, on fait disparaître le % et la barre (fade out)
          hideTimeout = setTimeout(() => {
            setShowPercentage(false);
            setShowProgressBar(false);
          }, 500);
          // Après 2000ms, on fade out le logo
          logoFadeTimeout = setTimeout(() => {
            setLogoVisible(false);
          }, 1200);
          // On redirige après 3000ms (donc une fois les transitions terminées)
          redirectTimeout = setTimeout(() => {
            router.push("/films");
          }, 2000);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 40);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(hideTimeout);
      clearTimeout(logoFadeTimeout);
      clearTimeout(redirectTimeout);
    };
  }, [router]);

  useEffect(() => {
    if (isFinalPhase) return;
    const frameInterval = setInterval(() => {
      setFrameIndex((prevIndex) => (prevIndex + 1) % frames.length);
    }, 80);
    return () => clearInterval(frameInterval);
  }, [isFinalPhase]);

  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      {/* Affichage du pourcentage */}
      <div
        className={`mb-5 text-6xl font-black absolute bottom-[1vw] right-[2vw] transition-opacity duration-500 ${
          showPercentage ? "opacity-100" : "opacity-0"
        }`}
      >
        {progress}%
      </div>
      <img
        src={isFinalPhase ? "/logo.png" : frames[frameIndex]}
        alt={isFinalPhase ? "Logo" : `Frame ${frameIndex + 1}`}
        className={`object-contain h-[20vh] w-auto transition-opacity duration-500 ${
          isFinalPhase
            ? logoVisible
              ? "opacity-100"
              : "opacity-0"
            : "opacity-100"
        }`}
      />
      <div
        className={`bg-white fixed bottom-0 left-0 h-3 origin-left w-full transition-opacity duration-300 ${
          showProgressBar ? "opacity-100" : "opacity-0"
        }`}
        style={{ transform: `scaleX(${progress / 100})` }}
      />
    </div>
  );
}
