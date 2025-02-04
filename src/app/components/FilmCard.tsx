import React from "react";
import type { Film } from "@/sanity/types"; // ajustez le chemin selon votre projet
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export default function FilmCard({ film }: { film: Film }) {
  console.log(film);
  return (
    <Link href={`/films/${film.slug?.current}`} className="flex flex-col">
      {film?.image ? (
        <Image
          className="w-auto aspect-video mb-2"
          src={urlFor(film.image)
            .width(800)
            .height(450)
            .quality(80)
            .auto("format")
            .url()}
          width="800"
          height="450"
          alt=""
        />
      ) : null}{" "}
      <h2 className="md:text-2xl text-m text-center">
        {film.title?.toUpperCase()}
      </h2>
    </Link>
  );
}
