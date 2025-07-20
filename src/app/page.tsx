"use client";

import { useState } from "react";
import { Inter } from "next/font/google";
import Link from 'next/link';


const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResult(data.text);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      generate();
    }
  };

  return (
    <main className={`${inter.className} flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-r from-blue-500 to-green-300 text-center`}>
       <header className="sticky top-0 bg-gradient-to-r from-blue-500 to-green-300 w-full max-w-5xl flex justify-between items-center py-4 mb-4 border-b border-white/20 z-10">
      <h1 className="text-white text-2xl font-bold">🪄 QuickDescrip</h1>
     <nav className="space-x-4">
    <Link href="/pricing" className="text-white hover:underline">Pricing</Link>
    <Link href="/about" className="text-white hover:underline">About</Link>
    <Link href="/contact" className="text-white hover:underline">Contact</Link>
    </nav>
    </header>

      <p className="text-white text-xl mb-8">AI-powered product description & tag generator</p>

      <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-lg w-full max-w-xl">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter your product name or idea..."
          className="w-full px-4 py-3 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={generate}
          disabled={loading}
          className="w-full mb-4 py-3 rounded-full text-white font-semibold transition
          bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate Description & Tags"}
        </button>

        <textarea
          className={`w-full max-w-xl px-4 py-3 rounded-md border border-gray-300 bg-white text-black whitespace-pre-wrap break-words mb-4 transition-opacity duration-500 ${result ? 'opacity-100' : 'opacity-50'}`}
          rows={10}
          readOnly
          value={result}
          placeholder="AI-generated description & tags will appear here..."
        />

        <button
          onClick={handleCopy}
          disabled={!result}
          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition disabled:opacity-50"
        >
          {copied ? "✅ Copied!" : "Copy"}
        </button>
      </div>

      {/* How it works */}
      <section className="bg-white bg-opacity-90 mt-8 p-6 rounded-xl shadow-md max-w-2xl w-full text-left">
        <h2 className="text-xl font-bold mb-4">How it works</h2>
        <ul className="space-y-2 text-gray-700">
          <li>📝 <strong>Enter product idea:</strong> like “handmade mug”.</li>
          <li>⚡ <strong>Click generate:</strong> get AI-written description & tags.</li>
          <li>📈 <strong>Copy & sell:</strong> paste into Etsy, Shopify, Amazon & boost sales.</li>
        </ul>
      </section>

      {/* Why QuickDescrip */}
      <section className="bg-white bg-opacity-90 mt-8 p-6 rounded-xl shadow-md max-w-2xl w-full text-left">
        <h2 className="text-xl font-bold mb-4">Why QuickDescrip?</h2>
        <ul className="space-y-2 text-gray-700">
          <li>✅ Save hours writing product descriptions</li>
          <li>✅ SEO-optimized tags increase visibility</li>
          <li>✅ Simple, instant, and beginner-friendly</li>
          <li>✅ Works for Etsy, Shopify, Amazon, eBay & more</li>
        </ul>
      </section>

      {/* CTA */}
      <div className="bg-white bg-opacity-90 mt-8 p-6 rounded-xl shadow-md max-w-2xl w-full">
        <p className="text-lg font-medium mb-2">Ready to save time and sell more?</p>
        <a
          href="#"
          className="text-blue-600 font-semibold hover:underline"
        >
          Start Generating Now
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-sm text-white opacity-80">
        © 2025 QuickDescrip — <a href="#" className="underline">Contact</a> | <a href="#" className="underline">Privacy</a>
      </footer>
    </main>
  );
}
