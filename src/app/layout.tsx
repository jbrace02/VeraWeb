// /src/app/layout.tsx

import "./globals.css";
import localFont from "next/font/local";
import Header from "../components/Header/Header";
import Footer from "../components/sections/Footer/Footer";
import { Metadata } from 'next';

// Load fonts using next/font/local
const digital7 = localFont({
  src: "../fonts/digital-7.ttf",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-digital7",
});

const inter = localFont({
  src: "../fonts/Inter.ttf",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-inter",
});

const neoneon = localFont({
  src: "../fonts/Neoneon.otf",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-neoneon",
});

export const metadata: Metadata = {
  title: "TruthChain | Verified Truth on Solana",
  description: "A decentralized platform built on Solana that uses AI to verify information and combat misinformation. Join the truth revolution.",
  openGraph: {
    title: "TruthChain | Verified Truth on Solana",
    description: "A decentralized platform built on Solana that uses AI to verify information and combat misinformation.",
    images: [{ url: "/images/verafy_blue.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical assets */}
        <link rel="preload" as="video" href="/videos/vera.mp4" type="video/mp4" />
        <link rel="preload" as="video" href="/videos/truth.mp4" type="video/mp4" />
        {/* Add favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`
          ${digital7.variable}
          ${inter.variable}
          ${neoneon.variable}
          abstractGreenBackground
          noiseEffect
          circularGradientRight
        `}
        style={{
          margin: 0,
          position: "relative",
        }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}







