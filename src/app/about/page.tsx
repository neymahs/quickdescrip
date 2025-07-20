export const metadata = {
  title: 'About — QuickDescrip',
  description: 'Learn about QuickDescrip: an AI-powered product description and tag generator to boost your sales effortlessly.'
};

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-r from-blue-500 to-green-300">
      <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl w-full text-center mt-8">
        <h1 className="text-3xl font-bold mb-4">About QuickDescrip</h1>
        <p className="text-gray-700 mb-4">
          QuickDescrip is built to help sellers, makers, and entrepreneurs save time and boost sales
          with AI-generated product descriptions and tags.
        </p>
        <p className="text-gray-700 mb-4">
          Our mission is simple: make it effortless to create SEO-friendly, engaging descriptions for platforms like Etsy,
          Shopify, Amazon, eBay and more.
        </p>
        <p className="text-gray-700">
          Whether you are just starting or running a large store, QuickDescrip helps turn your ideas into polished listings
          that sell — instantly and easily.
        </p>
      </div>
    </main>
  );
}
