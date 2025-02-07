import "@/app/globals.css";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "700"], // vous pouvez préciser les poids souhaités
});

export const metadata = {
  title: "Cliché Director",
  description: "Portfolio",
  openGraph: {
    title: "Cliché Director",
    description: "Portfolio",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Logo de Cliché Director",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={kanit.className}>{children}</body>
    </html>
  );
}
