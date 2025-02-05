"use client";

import { usePathname } from "next/navigation";
import FadeInWrapper from "./FadeInWrapper";

import { ReactNode } from "react";

export default function ClientLayoutWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  return <FadeInWrapper key={pathname}>{children}</FadeInWrapper>;
}
