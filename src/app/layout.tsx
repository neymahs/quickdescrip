import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link';
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "@/components/NavBar";
import Providers from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuickDescrip — AI Product Description & Tag Generator",
  description: "Generate product descriptions and Etsy tags quickly with AI. Boost your sales and save time with QuickDescrip.",
  openGraph: {
    title: "QuickDescrip — AI Product Description & Tag Generator",
    description: "Generate product descriptions and Etsy tags quickly with AI. Boost your sales and save time with QuickDescrip.",
    url: "https://quickdescrip.com",
    siteName: "QuickDescrip",
    images: [
      {
        url: "https://quickdescrip.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "QuickDescrip preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuickDescrip — AI Product Description & Tag Generator",
    description: "Generate product descriptions and Etsy tags quickly with AI. Boost your sales and save time with QuickDescrip.",
    images: ["https://quickdescrip.com/og-image.png"],
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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <NavBar />
          <main>{children}</main>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
