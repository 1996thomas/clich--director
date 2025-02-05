"use client";

import { useEffect, useState } from "react";

import { ReactNode } from "react";

export default function FadeInWrapper({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Démarrer le fade in dès le montage du composant
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0); // ajustez le délai si nécessaire

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </div>
  );
}
