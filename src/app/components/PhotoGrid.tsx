import { urlFor } from "@/sanity/lib/image";
import { Photography } from "@/sanity/types";
import Image from "next/image";
import React from "react";

export default function PhotoGrid({
  photography,
}: {
  photography?: Photography; // Permet de rendre la prop optionnelle
}) {
  if (!photography || !photography.images) {
    return (
      <p className="text-gray-500 text-center">Aucune image disponible.</p>
    );
  }

  return (
    <div className="flex gap-4 md:max-w-[60vw] mx-auto">
      {/* Colonne gauche */}
      <div className="flex flex-col gap-4 w-1/2">
        {photography.images
          .filter((_, index) => index % 2 === 0)
          .map((image, index) => (
            <div key={index}>
              <Image
                className="w-full h-auto object-cover"
                src={urlFor(image).width(800).quality(80).auto("format").url()}
                width={800}
                height={600}
                alt=""
              />
            </div>
          ))}
      </div>

      {/* Colonne droite */}
      <div className="flex flex-col gap-4 w-1/2">
        {photography.images
          .filter((_, index) => index % 2 !== 0)
          .map((image, index) => (
            <div key={index}>
              <Image
                className="w-full h-auto object-cover"
                src={urlFor(image).width(800).quality(80).auto("format").url()}
                width={800}
                height={600} // Hauteur dynamique
                alt=""
              />
            </div>
          ))}
      </div>
    </div>
  );
}
