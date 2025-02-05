"use client";
import Image from "next/image";
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
  // États pour gérer les transitions (fade)
  const [showPercentage, setShowPercentage] = useState(true);
  const [showProgressBar, setShowProgressBar] = useState(true);
  const [logoVisible, setLogoVisible] = useState(false);
  const router = useRouter();

  // Gestion de la progression
  useEffect(() => {
    const progressInterval: NodeJS.Timeout = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(progressInterval);
          // Lancement de la phase finale
          setIsFinalPhase(true);
          setLogoVisible(true);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 40);

    return () => {
      clearInterval(progressInterval);
    };
  }, [router]);

  // Une fois en phase finale, on déclenche les timeouts pour faire disparaître le % et la barre,
  // puis on fait fade out le logo et on redirige.
  useEffect(() => {
    if (!isFinalPhase) return;

    const hideTimeout: NodeJS.Timeout = setTimeout(() => {
      setShowPercentage(false);
      setShowProgressBar(false);
    }, 500);

    const logoFadeTimeout: NodeJS.Timeout = setTimeout(() => {
      setLogoVisible(false);
    }, 1200);

    const redirectTimeout: NodeJS.Timeout = setTimeout(() => {
      router.push("/films");
    }, 2000);

    return () => {
      clearTimeout(hideTimeout);
      clearTimeout(logoFadeTimeout);
      clearTimeout(redirectTimeout);
    };
  }, [isFinalPhase, router]);

  // Animation des frames tant que l'on n'est pas en phase finale
  useEffect(() => {
    if (isFinalPhase) return;
    const frameInterval: NodeJS.Timeout = setInterval(() => {
      setFrameIndex((prevIndex) => (prevIndex + 1) % frames.length);
    }, 80);
    return () => clearInterval(frameInterval);
  }, [isFinalPhase]);

  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <div
        className={`mb-5 text-6xl font-black absolute bottom-[1vw] right-[2vw] transition-opacity duration-500 ${
          showPercentage ? "opacity-100" : "opacity-0"
        }`}
      >
        {progress}%
      </div>
      <Image
        src={isFinalPhase ? "/logo.png" : frames[frameIndex]}
        width={400}
        height={400}
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
