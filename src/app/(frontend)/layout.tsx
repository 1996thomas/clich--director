import { SanityLive } from "@/sanity/lib/live";
import Navbar from "../components/Nav/Navbar";

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="px-4 xl:px-40 md:px-20">
      <Navbar />
      {children}
      <SanityLive />
    </div>
  );
}
