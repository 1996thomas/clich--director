"use client";

import { useState } from "react";
import FilmCard from "@/app/components/FilmCard";
import { Film, Tag } from "@/sanity/types";

export default function FilmGrid({
  films,
  tags,
}: {
  films: Film[];
  tags: Tag[];
}) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredFilms = selectedTag
    ? films.filter((film) => film.tags?._ref === selectedTag)
    : films;

  return (
    <>
      <div className="mb-5 flex justify-center">
        <ul className="flex">
          <li
            key="see-all"
            onClick={() => {
              if (selectedTag) setSelectedTag(null);
            }}
            className={`cursor-pointer p-2 rounded transition-colors duration-200 text-sm ${
              selectedTag ? "text-yellow-400" : "invisible"
            }`}
          >
            ALL
          </li>
          {tags.map((tag) => (
            <li
              key={tag._id}
              onClick={() => setSelectedTag(tag._id)}
              className={`cursor-pointer p-2 rounded transition-colors duration-200 text-sm whitespace-nowrap ${
                selectedTag === tag._id ? "underline" : ""
              }`}
            >
              {tag.title?.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-12 md:gap-8 gap-4">
        {filteredFilms.map((film) => (
          <FilmCard key={film._id} film={film} />
        ))}
      </div>
    </>
  );
}
