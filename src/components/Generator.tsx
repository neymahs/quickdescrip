'use client';

import { useState } from 'react';

export default function Generator() {
  const [productName, setProductName] = useState('');
  const [generatedText, setGeneratedText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!productName.trim()) return;
    setLoading(true);
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productName }),
      });
      const data = await response.json();
      setGeneratedText(data.description);
    } catch (error) {
      console.error('Error generating description:', error);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="w-full max-w-xl mb-8">
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Enter your product name..."
          className="w-full px-4 py-2 rounded text-black mb-4"
        />
        <button
          onClick={handleGenerate}
          className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-200 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate'}
        </button>
      </div>

      {generatedText && (
        <section className="bg-white text-black rounded p-4 max-w-xl w-full mt-6 shadow text-left">
          <h3 className="font-bold mb-2">Generated Description:</h3>
          <p>{generatedText}</p>
          <button
            onClick={() => navigator.clipboard.writeText(generatedText)}
            className="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Copy to clipboard
          </button>
        </section>
      )}
    </>
  );
}
