import VideoPlayer from "@/app/components/VideoPlayer";
import { sanityFetch } from "@/sanity/lib/live";
import { FILM_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

type Params = Promise<{ slug: string[] }>;

export default async function Page({ params }: { params: Params }) {
  const slug = await params;
  const { data: film } = await sanityFetch({
    query: FILM_QUERY,
    params: slug,
  });

  if (!film) {
    notFound();
  }

  return (
    <main className="md:max-w-[60vw] mx-auto">
      <div className="aspect-video">
        {film.video ? <VideoPlayer videoUrl={film.video} /> : "null"}
      </div>
      <h1 className="md:text-6xl md:text-left text-3xl text-center font-bold text-balance py-5">
        {film?.fullName}
      </h1>
      {film.credit &&
        film.credit?.map((i, key) => (
          <p key={key} className="md:text-xl text-sm uppercase">
            {i}
          </p>
        ))}
    </main>
  );
}
