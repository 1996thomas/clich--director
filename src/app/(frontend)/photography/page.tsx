import PhotoGrid from "@/app/components/PhotoGrid";
import { sanityFetch } from "@/sanity/lib/live";
import { PHOTO_QUERY } from "@/sanity/lib/queries";
import React from "react";

export default async function page() {
  const { data: photos } = await sanityFetch({ query: PHOTO_QUERY });
console.log(photos)
  return (
    <div>
      <PhotoGrid photography={photos} />
    </div>
  );
}
