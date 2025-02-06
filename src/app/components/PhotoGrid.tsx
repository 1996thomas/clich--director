"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { urlFor } from "@/sanity/lib/image";
import { Photography } from "@/sanity/types";

export default function PhotoGrid({
  photography,
}: {
  photography?: Photography;
}) {
  if (!photography || !photography.images || photography.images.length === 0) {
    return (
      <p className="text-gray-500 text-center">Aucune image disponible.</p>
    );
  }

  // Tableau contenant toutes les URLs dans l'ordre d'origine
  const allImages = photography.images.map((image) =>
    urlFor(image).width(800).quality(80).auto("format").url()
  );

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
      }, 800);
    }
  }, [isOpen]);

  return (
    <div className="flex gap-4 md:max-w-[60vw] mx-auto">
      <div className="flex flex-col gap-4 w-1/2">
        {allImages.map((src, index) =>
          index % 2 === 0 ? (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            >
              <Image
                src={src}
                width={800}
                height={600}
                alt={`Photo ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ) : null
        )}
      </div>

      <div className="flex flex-col gap-4 w-1/2">
        {allImages.map((src, index) =>
          index % 2 !== 0 ? (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            >
              <Image
                src={src}
                width={800}
                height={600}
                alt={`Photo ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ) : null
        )}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={allImages[photoIndex]}
          nextSrc={allImages[(photoIndex + 1) % allImages.length]}
          prevSrc={
            allImages[(photoIndex + allImages.length - 1) % allImages.length]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + allImages.length - 1) % allImages.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % allImages.length)
          }
        />
      )}
    </div>
  );
}
