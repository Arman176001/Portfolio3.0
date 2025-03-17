import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope, Bodoni_Moda_SC } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"], // Choose weights as needed
  variable: "--font-manrope", // Custom CSS variable for Tailwind or global styles
});
const bodini = Bodoni_Moda_SC({
  variable: "--font-bodoni-moda-SC",
  subsets: ["latin"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arman's Portfilio",
  description: "Arman's Portfilio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${bodini.variable} antialiased`}
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
