import { defineQuery } from "next-sanity";

export const FILMS_QUERY = defineQuery(`*[_type == "film"]`);

export const FILM_QUERY = defineQuery(
  `*[_type == "film" && slug.current == $slug][0]`
);

export const TAGS_QUERY = defineQuery(`*[_type == "tag"]{
    _id,
    title
  }`);

export const PHOTO_QUERY = defineQuery(`*[_type == "photography"][0]`);
