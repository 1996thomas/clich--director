import PhotoGrid from "@/app/components/PhotoGrid";
import { sanityFetch } from "@/sanity/lib/live";
import { PHOTO_QUERY } from "@/sanity/lib/queries";
import React from "react";

export default async function page() {
  const { data: photos } = await sanityFetch({ query: PHOTO_QUERY });
  return (
    <div>
      {photos ? <PhotoGrid photography={photos} /> : <p>No photos available</p>}
    </div>
  );
}
