"use client";

import { useState } from "react";

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-r from-blue-500 to-green-300">
      <div className="bg-white border border-black rounded-xl shadow-md p-8 max-w-4xl w-full text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Pricing</h1>
        <p className="text-gray-700 mb-4">Choose a plan that fits your needs. Upgrade anytime as your business grows.</p>

        {/* Toggle */}
        <div className="flex items-center justify-center mb-2">
          <span className={`${!yearly ? 'font-bold' : ''}`}>Monthly</span>
          <label className="mx-2 relative inline-block w-12 align-middle select-none">
            <input
              type="checkbox"
              checked={yearly}
              onChange={() => setYearly(!yearly)}
              className="absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer left-0 top-0 transition-transform duration-300 ease-in-out transform checked:translate-x-6"
            />
            <span className="block overflow-hidden h-6 rounded-full bg-gray-300"></span>
          </label>
          <span className={`${yearly ? 'font-bold' : ''}`}>Yearly</span>
        </div>

        <p className="text-xs text-gray-600 mb-8">All prices in USD</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Starter Plan */}
          <div className="bg-gray-50 border border-black rounded-lg p-6 shadow hover:shadow-lg transform hover:scale-105 transition">
            <h2 className="text-xl font-semibold mb-2">Starter</h2>
            <p className="text-2xl font-bold mb-4">
              ${yearly ? 0 : 0} <span className="text-sm">/ {yearly ? "year" : "month"}</span>
            </p>
            <hr className="my-4 border-gray-300" />
            <ul className="text-gray-600 text-left mb-4 space-y-1">
              <li>✅ Limited daily AI descriptions</li>
              <li>✅ Basic tags</li>
              <li>✅ Works on Etsy & Shopify</li>
            </ul>
            <hr className="my-4 border-gray-300" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">Get Started</button>
          </div>

          {/* Pro Plan */}
          <div className="relative bg-gray-100 border border-black rounded-lg p-6 shadow hover:shadow-lg transform hover:scale-105 transition">
            <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-semibold px-2 py-0.5 rounded">Most Popular</span>
            <h2 className="text-xl font-semibold mb-2">Pro</h2>
            <p className="text-2xl font-bold mb-4">
              ${yearly ? 90 : 9} <span className="text-sm">/ {yearly ? "year" : "month"}</span>
            </p>
            <hr className="my-4 border-gray-300" />
            <ul className="text-gray-600 text-left mb-4 space-y-1">
              <li>✅ Unlimited AI descriptions</li>
              <li>✅ Advanced SEO tags</li>
              <li>✅ Custom templates</li>
            </ul>
            <hr className="my-4 border-gray-300" />
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full">Upgrade to Pro</button>
          </div>

          {/* Team Plan */}
          <div className="bg-gray-200 border border-black rounded-lg p-6 shadow hover:shadow-lg transform hover:scale-105 transition">
            <h2 className="text-xl font-semibold mb-2">Team</h2>
            <p className="text-2xl font-bold mb-4">
              ${yearly ? 190 : 19} <span className="text-sm">/ {yearly ? "year" : "month"}</span>
            </p>
            <hr className="my-4 border-gray-300" />
            <ul className="text-gray-600 text-left mb-4 space-y-1">
              <li>✅ All Pro features</li>
              <li>✅ Team access & analytics</li>
              <li>✅ Priority support</li>
            </ul>
            <hr className="my-4 border-gray-300" />
            <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 w-full">Contact Sales</button>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white border border-black rounded-xl shadow-md p-6 mt-8 max-w-4xl w-full text-left text-black">
        <h2 className="text-xl font-bold mb-4">FAQ</h2>
        <ul className="space-y-4">
          <li>
            <strong>Can I cancel anytime?</strong><br />
            Yes, you can cancel or change your plan anytime.
          </li>
          <li>
            <strong>Do you offer refunds?</strong><br />
            As this is a digital product, we do not offer refunds.
          </li>
          <li>
            <strong>Do I need technical skills?</strong><br />
            No! QuickDescrip is beginner-friendly.
          </li>
        </ul>
      </div>
    </main>
  );
}
