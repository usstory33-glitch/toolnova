"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 border-b backdrop-blur"
      style={{
        background: "var(--background)",
        borderColor: "var(--border)",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold"
          style={{ color: "var(--primary)" }}
        >
          🚀 ToolNova
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-7 md:flex">

          <Link href="/" className="hover:text-cyan-400">
            Home
          </Link>

          <Link href="/#tools" className="hover:text-cyan-400">
            AI Tools
          </Link>

          <Link href="/categories" className="hover:text-cyan-400">
            Categories
          </Link>

          <Link href="/compare" className="hover:text-cyan-400">
            ⚖️ Compare
          </Link>

          <Link href="/favorites" className="hover:text-cyan-400">
            ❤️ Favorites
          </Link>

          <Link href="/recently-viewed" className="hover:text-cyan-400">
            🕒 Recently Viewed
          </Link>

          <Link href="/contact" className="hover:text-cyan-400">
            Contact
          </Link>

          <ThemeToggle />
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">

          <ThemeToggle />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border px-3 py-2"
            style={{
              borderColor: "var(--border)",
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="border-t px-6 py-5 md:hidden"
          style={{
            background: "var(--card)",
            borderColor: "var(--border)",
          }}
        >
          <div className="flex flex-col gap-4">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400"
            >
              🏠 Home
            </Link>

            <Link
              href="/#tools"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400"
            >
              🤖 AI Tools
            </Link>

            <Link
              href="/categories"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400"
            >
              📂 Categories
            </Link>

            <Link
              href="/compare"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400"
            >
              ⚖️ Compare
            </Link>

            <Link
              href="/favorites"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400"
            >
              ❤️ Favorites
            </Link>

            <Link
              href="/recently-viewed"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400"
            >
              🕒 Recently Viewed
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400"
            >
              📩 Contact
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}