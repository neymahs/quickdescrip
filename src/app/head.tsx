export default function Head() {
  return (
    <>
      <title>QuickDescrip — AI Product Description & Tag Generator</title>
      <meta name="description" content="Generate product descriptions & Etsy tags instantly with AI. Save time, boost SEO & sales." />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content="QuickDescrip — AI Product Description & Tag Generator" />
      <meta property="og:description" content="Generate product descriptions & Etsy tags instantly with AI. Save time, boost SEO & sales." />
      <meta property="og:image" content="/favicon.ico" />
      <meta property="og:url" content="https://www.quickdescrip.com/" />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="QuickDescrip — AI Product Description & Tag Generator" />
      <meta name="twitter:description" content="Generate product descriptions & Etsy tags instantly with AI. Save time, boost SEO & sales." />
      <meta name="twitter:image" content="/favicon.ico" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
