import "@/app/globals.css";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "700"], // vous pouvez préciser les poids souhaités
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>{children}</body>
    </html>
  );
}
