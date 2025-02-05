"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function PageTransition() {
  const pathname = usePathname();
  const overlayRef = useRef(null);
  const previousPathname = useRef(pathname);

  useEffect(() => {
    // Déclenche l'animation uniquement si le chemin a changé
    if (previousPathname.current !== pathname) {
      const timeline = gsap.timeline({
        defaults: { duration: .8, ease: "power1.inOut" },
      });
      timeline
        // Animation d'entrée : l'overlay descend pour couvrir la page
        .fromTo(overlayRef.current, { y: "-100%" }, { y: "0%" })
        // Animation de sortie : l'overlay continue vers le bas et se réinitialise
        .to(overlayRef.current, {
          y: "100%",
          onComplete: () => {
            gsap.set(overlayRef.current, { y: "-100%" });
          },
        });
      previousPathname.current = pathname;
    }
  }, [pathname]);

  return (
    <div
      ref={overlayRef}
      className="fixed top-0 left-0 w-full h-full bg-black z-50 pointer-events-none translate-y-[-100%]"
    />
  );
}
