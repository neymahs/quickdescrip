import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link';
import "./globals.css";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* 🪄 Navigation */}
        <nav className="sticky top-0 z-50 flex justify-center space-x-6 py-4 bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold">
          <Link href="/" className="hover:underline">🪄 QuickDescrip</Link>
          <Link href="/pricing" className="hover:underline">Pricing</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
