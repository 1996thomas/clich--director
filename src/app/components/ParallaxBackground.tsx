"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}

const desktopImagesData = [
  {
    src: "/loader/white/1w.svg",
    top: "70%",
    left: "30%",
    width: 14,
    depth: 0.9,
  },
  {
    src: "/loader/white/2w.svg",
    top: "30%",
    left: "10%",
    width: 16,
    depth: 0.1,
  },
  {
    src: "/loader/white/3w.svg",
    top: "10%",
    left: "87%",
    width: 10,
    depth: -0.6,
    brightness: 1,
  },
  {
    src: "/loader/white/4w.svg",
    top: "70%",
    left: "60%",
    width: 8,
    depth: 0.5,
  },
  {
    src: "/loader/white/5w.svg",
    top: "60%",
    left: "75%",
    width: 10,
    depth: -0.6,
  },
  {
    src: "/loader/white/6w.svg",
    top: "35%",
    left: "83%",
    width: 10,
    depth: 0.7,
  },
  {
    src: "/loader/white/7w.svg",
    top: "6%",
    left: "8%",
    width: 12,
    depth: 0.8,
  },
  {
    src: "/loader/white/8w.svg",
    top: "16%",
    left: "65%",
    width: 15,
    depth: 0.9,
  },
  {
    src: "/loader/white/9w.svg",
    top: "50%",
    left: "5%",
    width: 5,
    depth: 0.2,
  },
  {
    src: "/loader/white/10w.svg",
    top: "55%",
    left: "20%",
    width: 10,
    depth: 0.3,
  },
  {
    src: "/loader/white/11w.svg",
    top: "5%",
    left: "55%",
    width: 8,
    depth: -0.6,
  },
  {
    src: "/loader/white/12w.svg",
    top: "11%",
    left: "23%",
    width: 8,
    depth: 0.5,
  },
  {
    src: "/loader/white/13w.svg",
    top: "8%",
    left: "35%",
    width: 4,
    depth: 0.6,
  },
  {
    src: "/loader/white/14w.svg",
    top: "55%",
    left: "90%",
    width: 8,
    depth: 0.7,
  },
  {
    src: "/loader/white/15w.svg",
    top: "8%",
    left: "7%",
    width: 10,
    depth: 0.8,
  },
  {
    src: "/loader/white/16w.svg",
    top: "85%",
    left: "80%",
    width: 7,
    depth: 0.9,
  },
  {
    src: "/loader/white/17w.svg",
    top: "50%",
    left: "50%",
    width: 10,
    depth: 1.0,
  },
];

const mobileImagesData = [
  {
    src: "/loader/white/1w.svg",
    top: "88%",
    left: "30%",
    width: 20,
    depth: 0.9,
  },
  {
    src: "/loader/white/2w.svg",
    top: "70%",
    left: "5%",
    width: 22,
    depth: 0.1,
  },
  {
    src: "/loader/white/3w.svg",
    top: "10%",
    left: "80%",
    width: 18,
    depth: -0.6,
    brightness: 0.7,
  },
  {
    src: "/loader/white/4w.svg",
    top: "75%",
    left: "53%",
    width: 16,
    depth: 0.5,
  },
  {
    src: "/loader/white/5w.svg",
    top: "68%",
    left: "70%",
    width: 18,
    depth: -0.6,
  },
  {
    src: "/loader/white/6w.svg",
    top: "30%",
    left: "70%",
    width: 18,
    depth: 0.7,
  },
  {
    src: "/loader/white/7w.svg",
    top: "4%",
    left: "4%",
    width: 20,
    depth: 0.8,
  },
  {
    src: "/loader/white/8w.svg",
    top: "18%",
    left: "68%",
    width: 22,
    depth: 0.9,
  },
  {
    src: "/loader/white/9w.svg",
    top: "35%",
    left: "2%",
    width: 12,
    depth: 0.2,
  },
  {
    src: "/loader/white/10w.svg",
    top: "54%",
    left: "6%",
    width: 18,
    depth: 0.3,
  },
  {
    src: "/loader/white/11w.svg",
    top: "2%",
    left: "45%",
    width: 16,
    depth: -0.6,
  },
  {
    src: "/loader/white/12w.svg",
    top: "8%",
    left: "15%",
    width: 16,
    depth: 0.5,
  },
  {
    src: "/loader/white/13w.svg",
    top: "20%",
    left: "86%",
    width: 10,
    depth: 0.6,
  },
  {
    src: "/loader/white/14w.svg",
    top: "50%",
    left: "80%",
    width: 16,
    depth: 0.7,
  },
  {
    src: "/loader/white/15w.svg",
    top: "20%",
    left: "6%",
    width: 18,
    depth: 0.8,
  },
  {
    src: "/loader/white/16w.svg",
    top: "80%",
    left: "80%",
    width: 14,
    depth: 0.9,
  },
  {
    src: "/loader/white/17w.svg",
    top: "10%",
    left: "45%",
    width: 18,
    depth: 1.0,
  },
];

export default function ParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile(); // Détecte si l'écran est mobile
  const imagesData = isMobile ? mobileImagesData : desktopImagesData;

  useEffect(() => {
    const elements =
      containerRef.current?.querySelectorAll<HTMLElement>(".bg-image");

    elements?.forEach((el, i) => {
      gsap.to(el, {
        rotation: i % 2 == 0 ? -1 : 1,
        duration: i % 2 == 0 ? 0.3 : 0.2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        transformOrigin: "50% 50%",
      });
    });

    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Position de la souris par rapport au centre de l'écran
      const mouseX = event.clientX - innerWidth / 2;
      const mouseY = event.clientY - innerHeight / 2;

      elements?.forEach((el) => {
        const depth = parseFloat(el.getAttribute("data-depth") || "1");
        gsap.to(el, {
          x: mouseX * depth * 0.05,
          y: mouseY * depth * 0.05,
          duration: 0.5,
          ease: "power2.out",
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[-1]"
    >
      {imagesData.map((img, index) => (
        <Image
          key={index}
          src={img.src}
          width={img.width}
          height={img.width}
          alt="Drawing used for Background"
          className="bg-image absolute"
          style={{
            top: img.top,
            left: img.left,
            width: `clamp(80px, ${img.width}vw, 300px)`,
            filter: `brightness(${Math.random() * (0.65 - 0.4) + 0.4})`,
          }}
          data-depth={img.depth}
        />
      ))}
    </div>
  );
}
