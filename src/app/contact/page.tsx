export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-r from-blue-500 to-green-300 text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="max-w-2xl mb-4">
        Have questions or feedback? We'd love to hear from you!
      </p>
      <a href="mailto:support@quickdescrip.com" className="underline text-lg">support@quickdescrip.com</a>
    </main>
  );
}
