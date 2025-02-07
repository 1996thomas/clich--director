import { urlFor } from "@/sanity/lib/image";
import { Setting } from "@/sanity/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RSComp({ setting }: { setting: Setting }) {
  return (
    <div className="fixed bottom-0 right-[50%] translate-x-[-50%] md:bottom-0 md:translate-x-0 md:right-0 px-4 py-4 xl:px-20 md:px-20 mix-blend-difference z-50">
      <ul className="flex gap-4 items-center">
        {setting.socials?.map((social) => (
          <li key={social._key}>
            <Link href={social.social_url || ""} target="_blank">
              {social.social_logo && (
                <Image
                  src={urlFor(social.social_logo).url()}
                  alt="logo du réseau social"
                  width={40}
                  height={40}
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
