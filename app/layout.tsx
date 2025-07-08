import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Supreme Group",
  description: "Supreme Group website clone using Next.js",
};
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-manrope`}>{children}</body>
    </html>
  );
}
