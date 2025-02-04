"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const parallaxOffsets = [-20, 40, 20, -30, 40];
const continuousOffsets = [10, 12, 14, 16, 18];
const continuousDurations = [3, 3.5, 4, 4.5, 5];

export default function ParallaxBackground() {
  const layerRefs = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !layerRefs.current.includes(el)) {
      layerRefs.current.push(el);
    }
  };

  useEffect(() => {
    layerRefs.current.forEach((layer, index) => {
      const parallaxOffset = parallaxOffsets[index] || 20;

      gsap.to(layer, {
        y: parallaxOffset,
        ease: "none",
        scrollTrigger: {
          trigger: layer,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      const inner = layer.querySelector(".inner");
      if (inner) {
        const continuousOffset = continuousOffsets[index] || 10;
        const continuousDuration = continuousDurations[index] || 3;

        gsap.to(inner, {
          y: `+=${continuousOffset}`,
          duration: continuousDuration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    });
  }, []); // Le tableau est vide car ces valeurs sont fixes

  return (
    <div className="parallax-container fixed aspect-video top-0 left-0 w-full h-full pointer-events-none z-[-1] bg-black">
      {/* Layer 1 */}
      <div
        ref={addToRefs}
        className="layer absolute top-0 left-0 w-full h-full"
      >
        <div className="inner w-full h-full">
          <Image
            src="/images/Layer1.png"
            alt="Layer 1"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Layer 2 */}
      <div
        ref={addToRefs}
        className="layer absolute top-0 left-0 w-full h-full"
      >
        <div className="inner w-full h-full">
          <Image
            src="/images/Layer2.png"
            alt="Layer 2"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Layer 3 */}
      <div
        ref={addToRefs}
        className="layer absolute top-0 left-0 w-full h-full"
      >
        <div className="inner w-full h-full">
          <Image
            src="/images/Layer3.png"
            alt="Layer 3"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Layer 4 */}
      <div
        ref={addToRefs}
        className="layer absolute top-0 left-0 w-full h-full"
      >
        <div className="inner w-full h-full">
          <Image
            src="/images/Layer4.png"
            alt="Layer 4"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Layer 5 */}
      <div
        ref={addToRefs}
        className="layer absolute top-0 left-0 w-full h-full"
      >
        <div className="inner w-full h-full">
          <Image
            src="/images/Layer5.png"
            alt="Layer 5"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
