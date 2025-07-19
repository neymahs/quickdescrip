'use client'

import { useState } from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const generate = async () => {
    if (!prompt.trim()) return
    setLoading(true)
    setResult('')
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      })
      const data = await res.json()
      setResult(data.text || 'No response')
    } catch (err) {
      console.error(err)
      setResult('Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>QuickDescrip — AI Product Description & Tag Generator</title>
        <meta name="description" content="Generate product descriptions and Etsy tags quickly with AI. Boost your sales and save time with QuickDescrip." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className={inter.className}></div>
      <main className="min-h-screen bg-gradient-to-r from-blue-500 via-teal-400 to-green-300 flex flex-col items-center px-4 py-8 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2">🪄 QuickDescrip</h1>
      <p className="text-sm mb-4">AI-powered product description & tag generator</p>

        <div className="w-full max-w-xl mb-8">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your product name or idea..."
            className="p-3 rounded w-full text-black border border-gray-300 mb-4"
          />
          <button
            onClick={generate}
            disabled={loading}
            className="bg-white text-blue-600 font-semibold py-3 px-6 rounded hover:bg-gray-100 transition w-full"
          >
            {loading ? 'Generating...' : 'Generate Description & Tags'}
          </button>
        </div>

        {result && (
          <div className="bg-white text-black p-4 rounded max-w-xl w-full text-left whitespace-pre-line break-words mb-8">
            {result}
          </div>
        )}

        {/* How it works */}
        <section className="bg-white text-black rounded p-6 max-w-3xl w-full mb-8 shadow">
  <h2 className="text-2xl font-bold mb-4">How it works</h2>
  <div className="flex flex-col md:flex-row justify-around text-left space-y-4 md:space-y-0 md:space-x-4">
    <div>📝 <strong>Enter product idea:</strong> like “handmade mug”.</div>
    <div>⚡ <strong>Click generate:</strong> get AI-written description & tags.</div>
    <div>📈 <strong>Copy & sell:</strong> paste into Etsy, Shopify, Amazon & boost sales.</div>
  </div>
</section>

<section className="bg-white text-black rounded p-6 max-w-3xl w-full mb-8 shadow">
  <h2 className="text-2xl font-bold mb-4">Why QuickDescrip?</h2>
  <ul className="space-y-2 text-left">
    <li>✅ Save hours writing product descriptions</li>
    <li>✅ SEO-optimized tags increase visibility</li>
    <li>✅ Simple, instant, and beginner-friendly</li>
    <li>✅ Works for Etsy, Shopify, Amazon, eBay & more</li>
  </ul>
</section>


        {/* Call to action */}
        <div className="bg-white text-black rounded p-6 max-w-3xl w-full mb-8 shadow">
          <h2 className="text-xl font-semibold mb-2">Ready to save time and sell more?</h2>
          <button
            onClick={generate}
            className="bg-white text-blue-600 font-semibold py-3 px-6 rounded hover:bg-gray-100 transition"
          >
            Start Generating Now
          </button>
        </div>

        <footer className="text-sm mt-8 opacity-80">
  © 2025 QuickDescrip — <a href="#" className="underline">Contact</a> | <a href="#" className="underline">Privacy</a>
</footer>

      </main>
    </>
  )
}
