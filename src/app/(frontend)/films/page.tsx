// app/pages.jsx (ou selon votre organisation)
import FilmGrid from "@/app/components/FilmGrid";
import { sanityFetch } from "@/sanity/lib/live";
import { FILMS_QUERY, TAGS_QUERY } from "@/sanity/lib/queries";
import React from "react";

export default async function Pages() {
  const { data: films } = await sanityFetch({ query: FILMS_QUERY });
  const { data: tags } = await sanityFetch({ query: TAGS_QUERY });

  const formattedTags = tags.map((tag) => ({
    _id: tag._id,
    title: tag.title ?? undefined,
    _type: "tag" as const,
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString(),
    _rev: "1",
  }));

  return <FilmGrid films={films} tags={formattedTags} />;
}
