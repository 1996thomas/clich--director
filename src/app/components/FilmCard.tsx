import React from "react";
import type { Film } from "@/sanity/types"; // ajustez le chemin selon votre projet
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export default function FilmCard({ film }: { film: Film }) {
  return (
    <Link href={`/films/${film.slug?.current}`} className="flex flex-col ">
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
      <h2 className="xl:text-xl lg:text-xl font-bold md:text-xl text-2xl text-cente tracking-tight text-center">
        {film.fullName?.toUpperCase()}
      </h2>
    </Link>
  );
}
