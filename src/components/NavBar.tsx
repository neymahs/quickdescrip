"use client";

import { useState, useEffect, useRef } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from 'next/link';

export default function NavBar() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 flex justify-center items-baseline space-x-6 py-4 px-4 bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold">
        {/* centered links */}
      <Link href="/" className="text-xl font-bold hover:underline">🪄 QuickDescrip</Link>
      <Link href="/pricing" className="hover:underline">Pricing</Link>
      <Link href="/about" className="hover:underline">About</Link>
      <Link href="/contact" className="hover:underline">Contact</Link>

      {/* right side */}

      <div className="ml-auto flex item=center space-x-2">
        {!session ? (
          <>
            {/* sign in button or circle */}
            <button
              onClick={() => signIn("google")}
              className="ml-4 bg-white text-blue-500 px-3 py-1 rounded hover:bg-gray-200 font-semibold"
            >
              Sign in
            </button>
          </>
        ) : (
          <>
            {/* Circle with initials */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="bg-white text-blue-500 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200"
              title={session.user?.email ?? "Account"}
            >
              <span className="font-bold">
                {session.user?.name
                  ? session.user.name.charAt(0).toUpperCase()
                  : session.user?.email
                    ? session.user.email.charAt(0).toUpperCase()
                    : "U"}
              </span>
            </button>

            {/* Dropdown */}
            <div className={`dropdown ${menuOpen ? "open animate-fade-slide" : ""}`}>
              <p>{session.user?.email}</p>
              <button onClick={() => { setMenuOpen(false); signOut(); }}>
                Sign out
              </button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
