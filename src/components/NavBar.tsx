"use client";

import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from 'next/link';

export default function NavBar() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold">
      {/* Left: logo + nav links */}
      <div className="flex items-center space-x-4 overflow-x-auto max-w-full">
        <Link href="/" className="text-xl font-bold hover:underline whitespace-nowrap">🪄 QuickDescrip</Link>
        <Link href="/pricing" className="hover:underline whitespace-nowrap">Pricing</Link>
        <Link href="/about" className="hover:underline whitespace-nowrap">About</Link>
        <Link href="/contact" className="hover:underline whitespace-nowrap">Contact</Link>
      </div>

      {/* Right: sign in or user */}
      <div className="relative flex flex-col items-center">
        {!session ? (
          <>
            <button
              onClick={() => signIn("google")}
              className="bg-white text-blue-500 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200"
              title="Sign in"
            >
              <span className="font-bold">S</span>
            </button>
            <span
              onClick={() => signIn("google")}
              className="text-xs mt-1 cursor-pointer hover:underline whitespace-nowrap"
            >
              Sign in
            </span>
          </>
        ) : (
          <div className="relative flex flex-col items-center">
            <button
              title={session.user?.email ?? "Account"}
              onClick={() => setMenuOpen(!menuOpen)}
              className="bg-white text-blue-500 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200"
            >
              <span className="font-bold">
                {session.user?.name?.[0]?.toUpperCase() ?? session.user?.email?.[0]?.toUpperCase() ?? "U"}
              </span>
            </button>

            {menuOpen && (
              <div className="dropdown animate-fade-slide mt-2">
                <p className="text-xs truncate px-2" title={session.user?.email ?? ""}>{session.user?.email}</p>
                <button 
                  onClick={() => { setMenuOpen(false); signOut(); }}
                  className="w-full text-left px-2 py-1 text-red-500 hover:underline text-sm"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
