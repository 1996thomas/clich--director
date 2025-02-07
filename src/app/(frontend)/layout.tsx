import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import Navbar from "../components/Nav/Navbar";
import ParallaxBackground from "../components/ParallaxBackground";
import PageTransition from "../components/PageTransition";
import ClientLayoutWrapper from "../components/ClientLayoutWrapper";
import { GyroPermissionProvider } from "../components/GyroContext";
import { SETTING_QUERY } from "@/sanity/lib/queries";
import RSComp from "../components/RSComp";

export const metadata = {
  title: "Cliché Director",
  description: "Portfolio",
  openGraph: {
    title: "Cliché Director",
    description: "Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Logo de Cliché Director",
      },
    ],
  },
};

export default async function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: setting } = await sanityFetch({ query: SETTING_QUERY });
  return (
    <>
      <GyroPermissionProvider>
        <PageTransition />
        <ClientLayoutWrapper>
          <ParallaxBackground />
          <div className="px-4 xl:px-20 md:px-20 pb-20">
            <Navbar />
            {setting && <RSComp setting={setting} />}
            {children}
            <SanityLive />
          </div>
        </ClientLayoutWrapper>
      </GyroPermissionProvider>
    </>
  );
}
