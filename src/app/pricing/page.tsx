export default function Pricing() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-r from-blue-500 to-green-300 text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Pricing</h1>
      <p className="max-w-2xl mb-8">
        Start free — upgrade anytime to unlock unlimited AI generations and premium support.
      </p>
      <div className="bg-white text-black rounded-lg shadow-md p-6 max-w-sm">
        <h2 className="text-2xl font-semibold mb-2">Pro Plan</h2>
        <p className="mb-4">$9/month</p>
        <ul className="mb-4 text-left list-disc list-inside">
          <li>Unlimited generations</li>
          <li>Priority support</li>
          <li>Access to future features</li>
        </ul>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Subscribe</button>
      </div>
    </main>
  );
}
