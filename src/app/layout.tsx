import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const fonts = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Buat siapa? ☺️",
  description: "Ucapin aja, biar bisa tersampaikan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts.className}>{children}</body>
    </html>
  );
}
