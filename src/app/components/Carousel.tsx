"use client"; // Assurez-vous d'être dans un composant client si vous utilisez Next.js 13+

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import des styles de base
import "swiper/css";
// Vous pouvez importer d'autres modules (navigation, pagination, etc.)
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useIsMobile } from "./useIsMobile";
import {
  internalGroqTypeReferenceTo,
  SanityImageCrop,
  SanityImageHotspot,
} from "@/sanity/types";

interface Image {
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  _type: "image";
  _key: string;
}

interface CarouselProps {
  images: Image[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const isMobile = useIsMobile();
  return (
    <Swiper
      className="mt-10"
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={isMobile ? 1 : 2}
      navigation
      pagination={{ clickable: true }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={`slide-${index}`}>
          <Image
            src={urlFor(image).url()}
            alt="Photographie du projet"
            width={600}
            height={600}
            quality={80}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
