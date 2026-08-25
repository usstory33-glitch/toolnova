"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="mt-20 border-t py-10"
      style={{
        background: "var(--background)",
        borderColor: "var(--border)",
        color: "var(--muted)",
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">

        {/* Copyright */}
        <p className="text-center text-sm">
          © 2026{" "}
          <span
            className="font-semibold"
            style={{ color: "var(--primary)" }}
          >
            ToolNova
          </span>{" "}
          . All rights reserved.
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <Link
            href="/"
            className="transition hover:text-cyan-400"
          >
            Home
          </Link>

          <Link
            href="/categories"
            className="transition hover:text-cyan-400"
          >
            Categories
          </Link>

          <Link
            href="/compare"
            className="transition hover:text-cyan-400"
          >
            Compare
          </Link>

          <Link
            href="/favorites"
            className="transition hover:text-cyan-400"
          >
            Favorites
          </Link>

          <Link
            href="/recently-viewed"
            className="transition hover:text-cyan-400"
          >
            Recently Viewed
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-cyan-400"
          >
            Contact
          </Link>
<Link
  href="/about"
  className="transition hover:text-cyan-400"
>
  About
</Link>
          <Link
            href="/privacy-policy"
            className="transition hover:text-cyan-400"
          >
            Privacy Policy
          </Link>
        </div>

      </div>
    </footer>
  );
}