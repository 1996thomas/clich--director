"use client";
import { urlFor } from "@/sanity/lib/image";
import { Setting } from "@/sanity/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useIsMobile } from "./useIsMobile";

export default function RSComp({ setting }: { setting: Setting }) {
  const isMobile = useIsMobile();
  return (
    <div className="fixed bg-black w-full bottom-0 left-0 flex justify-center p-2 z-50">
      <ul className="flex gap-4 items-center">
        {setting.socials?.map((social) => (
          <li key={social._key}>
            <Link href={social.social_url || ""} target="_blank">
              {social.social_logo && (
                <Image
                  src={urlFor(social.social_logo).url()}
                  alt="logo du réseau social"
                  width={isMobile ? 25 : 40}
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
