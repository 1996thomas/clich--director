import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { SETTING_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";

export default async function page() {
  const { data: setting } = await sanityFetch({ query: SETTING_QUERY });
  console.log(setting);
  return (
    <div className="text-justify">
      <h1 className="text-6xl text-center mt-5 font-bold">ABOUT ME </h1>
      <div className="my-5 flex flex-col xl:flex-row justify-center items-center gap-5">
        {setting?.photo && (
          <Image
            className="text-center bg-red-300 flex items-center justify-center"
            src={urlFor(setting.photo).url()}
            alt="Photo de Cliche Direcot"
            width={400}
            height={400}
          />
        )}
        <p className="font-normal mt-5 xl:max-w-[45%] xl:text-3xl text-xl ">
          {setting?.about}
        </p>
      </div>
      <div className="flex flex-col md:flex-row text-xl  md:text-2xl justify-center items-center  gap-5">
        <Link href={`mailto:${setting?.contact_info?.contact_email}`}>
          {setting?.contact_info?.contact_email}
        </Link>
        <Link className="" href={`tel:${setting?.contact_info?.contact_tel}`}>
          0{setting?.contact_info?.contact_tel?.split("+33")[1]}
        </Link>
      </div>
    </div>
  );
}
