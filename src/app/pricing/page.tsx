export default function PricingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-r from-blue-500 to-green-300">
      <div className="bg-white border border-black rounded-xl shadow-md p-8 max-w-4xl w-full text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Pricing</h1>
        <p className="text-gray-700 mb-8">Choose a plan that fits your needs. Upgrade anytime as your business grows.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Starter Plan */}
          <div className="bg-gray-50 border border-black rounded-lg p-6 shadow hover:shadow-lg transform hover:scale-105 transition">
            <h2 className="text-xl font-semibold mb-2">Starter</h2>
            <p className="text-2xl font-bold mb-4">$0 <span className="text-sm">/ month</span></p>
            <ul className="text-gray-600 text-left mb-4 space-y-1">
              <li>✅ Limited daily AI descriptions</li>
              <li>✅ Basic tags</li>
              <li>✅ Works on Etsy & Shopify</li>
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">Get Started</button>
          </div>

          {/* Pro Plan */}
          <div className="relative bg-gray-100 border border-black rounded-lg p-6 shadow hover:shadow-lg transform hover:scale-105 transition">
            <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-semibold px-2 py-0.5 rounded">Most Popular</span>
            <h2 className="text-xl font-semibold mb-2">Pro</h2>
            <p className="text-2xl font-bold mb-4">$9 <span className="text-sm">/ month</span></p>
            <ul className="text-gray-600 text-left mb-4 space-y-1">
              <li>✅ Unlimited AI descriptions</li>
              <li>✅ Advanced SEO tags</li>
              <li>✅ Custom templates</li>
            </ul>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full">Upgrade to Pro</button>
          </div>

          {/* Team Plan */}
          <div className="bg-gray-200 border border-black rounded-lg p-6 shadow hover:shadow-lg transform hover:scale-105 transition">
            <h2 className="text-xl font-semibold mb-2">Team</h2>
            <p className="text-2xl font-bold mb-4">$19 <span className="text-sm">/ month</span></p>
            <ul className="text-gray-600 text-left mb-4 space-y-1">
              <li>✅ All Pro features</li>
              <li>✅ Team access & analytics</li>
              <li>✅ Priority support</li>
            </ul>
            <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 w-full">Contact Sales</button>
          </div>
        </div>
      </div>
    </main>
  );
}
