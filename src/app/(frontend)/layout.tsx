import { SanityLive } from "@/sanity/lib/live";
import Navbar from "../components/Nav/Navbar";
import ParallaxBackground from "../components/ParallaxBackground";
import PageTransition from "../components/PageTransition";
import ClientLayoutWrapper from "../components/ClientLayoutWrapper";

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PageTransition />
      <ClientLayoutWrapper>
        <ParallaxBackground />
        <div className="px-4 xl:px-40 md:px-20 pb-20">
          <Navbar />
          {children}
          <SanityLive />
        </div>
      </ClientLayoutWrapper>
    </>
  );
}
