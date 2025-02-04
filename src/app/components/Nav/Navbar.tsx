import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className="flex justify-between py-5">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt="Logo du site"
            width={100}
            height={100}
          />
        </Link>
        <ul className="flex space-x-4 md:space-x-8">
          <li>
            <Link href="/films">Film</Link>
          </li>
          <li>
            <Link href="/photography">Photography</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
