"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function NavBar() {
  const { data: session } = useSession();

  return (
    <nav className="sticky top-0 z-50 flex justify-center items-baseline space-x-6 py-4 bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold">
      <Link href="/" className="text-xl font-bold hover:underline">🪄 QuickDescrip</Link>
      <Link href="/pricing" className="hover:underline">Pricing</Link>
      <Link href="/about" className="hover:underline">About</Link>
      <Link href="/contact" className="hover:underline">Contact</Link>

      {/* Sign in / Sign out button */}
      {session ? (
        <>
          <span className="text-sm">Signed in as {session.user?.email}</span>
          <button
            onClick={() => signOut()}
            className="bg-white text-blue-600 px-2 py-1 rounded hover:bg-gray-200 ml-2 text-sm"
          >
            Sign out
          </button>
        </>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="bg-white text-blue-600 px-2 py-1 rounded hover:bg-gray-200 text-sm"
        >
          Sign in with Google
        </button>
      )}
    </nav>
  );
}
