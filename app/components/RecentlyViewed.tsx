"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { tools } from "../data/tools";

export default function RecentlyViewed() {
  const [recentTools, setRecentTools] = useState<typeof tools>([]);
const clearHistory = () => {
  localStorage.removeItem("recentTools");
  setRecentTools([]);
};
  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("recentTools") || "[]"
    );

    const recent = tools.filter((tool) =>
      saved.includes(tool.id)
    );

    setRecentTools(recent);
  }, []);

  if (recentTools.length === 0) return null;

  return (
    <section className="mx-auto mt-20 max-w-6xl px-6">
     <div className="mb-6 flex items-center justify-between">
  <h2 className="text-3xl font-bold text-white">
    🕒 Recently Viewed
  </h2>

  <button
    onClick={clearHistory}
    className="rounded-lg border border-red-500 px-4 py-2 text-red-400 transition hover:bg-red-500 hover:text-white"
  >
    🗑️ Clear History
  </button>
</div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recentTools.map((tool) => (
          <Link
            key={tool.id}
            href={`/tools/${tool.name
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-2 hover:border-cyan-400"
          >
            <div className="mb-4 flex items-center gap-4">
              <img
                src={tool.logo}
                alt={tool.name}
                className="h-14 w-14 rounded-lg bg-white p-2"
              />

              <div>
                <h3 className="text-xl font-bold text-white">
                  {tool.name}
                </h3>

                <p className="text-cyan-400">
                  {tool.category}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400">
              {tool.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}