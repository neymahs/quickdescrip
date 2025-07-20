export const metadata = {
  title: 'Contact — QuickDescrip',
  description: 'Get in touch with QuickDescrip for support, questions, or partnership opportunities.'
};

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-r from-blue-500 to-green-300">
    <div className="bg-white rounded-xl shadow-md p-8 max-w-2xl w-full text-center">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        We would love to hear from you! For questions, suggestions, or support, please email us at:
      </p>
      <p className="font-semibold">support@quickdescrip.com</p>
      <p className="mt-4">We usually respond within 24 hours.</p></div>
    </main>
  );
}
