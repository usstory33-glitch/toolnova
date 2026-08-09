"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { tools } from "../data/tools";

export default function RecentlyViewedPage() {
  const [recentIds, setRecentIds] = useState<number[]>([]);

  useEffect(() => {
    const loadRecentlyViewed = () => {
      const saved = localStorage.getItem("recentTools");

      if (saved) {
        setRecentIds(JSON.parse(saved));
      } else {
        setRecentIds([]);
      }
    };

    loadRecentlyViewed();

    window.addEventListener("storage", loadRecentlyViewed);

    return () => {
      window.removeEventListener("storage", loadRecentlyViewed);
    };
  }, []);

  const recentTools = recentIds
    .map((id) => tools.find((tool) => tool.id === id))
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-4xl font-bold">
            🕒 Recently Viewed
          </h1>

          <Link
            href="/"
            className="rounded-lg border border-cyan-500 px-4 py-2 text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Empty State */}
        {recentTools.length === 0 ? (
          <div className="mt-16 text-center">
            <div className="text-6xl">
              🕒
            </div>

            <h2 className="mt-5 text-3xl font-bold">
              No recently viewed tools
            </h2>

            <p className="mt-3 text-slate-400">
              Open an AI tool and it will appear here.
            </p>

            <Link
              href="/"
              className="mt-6 inline-block rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
            >
              Browse AI Tools
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentTools.map((tool) => {
              if (!tool) return null;

              return (
                <Link
                  key={tool.id}
                  href={`/tools/${tool.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-2 hover:border-cyan-400"
                >
                  <div className="mb-4 flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white p-2">
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        className="h-10 w-10 object-contain"
                      />
                    </div>

                    <div>
                      <h2 className="text-xl font-bold">
                        {tool.name}
                      </h2>

                      <p className="text-cyan-400">
                        {tool.category}
                      </p>
                    </div>

                  </div>

                  <p className="mb-4 text-sm text-slate-400">
                    {tool.description}
                  </p>

                  <div className="flex items-center justify-between">

                    <span className="text-yellow-400">
                      ⭐ {tool.rating}
                    </span>

                    <span className="text-slate-400">
                      👥 {tool.users}
                    </span>

                  </div>
                </Link>
              );
            })}
          </div>
        )}

      </div>
    </main>
  );
}