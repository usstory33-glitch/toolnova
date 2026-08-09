"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { tools } from "../data/tools";

type ToolCardProps = {
  search: string;
  category: string;
  sortBy: string;
};

export default function ToolCard({
  search,
  category,
  sortBy,
}: ToolCardProps) {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const toolsPerPage = 6;
  useEffect(() => {
    const saved = localStorage.getItem("favorites");

    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);
  const filteredTools = tools.filter((tool) => {

    const matchesSearch =
      tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || tool.category === category;

    return matchesSearch && matchesCategory;
  });
  const sortedTools = [...filteredTools];

if (sortBy === "Rating") {
  sortedTools.sort(
    (a, b) => parseFloat(b.rating) - parseFloat(a.rating)
  );
}
 if (sortBy === "Name") {
  sortedTools.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
} 
if (sortBy === "Users") {
  sortedTools.sort(
    (a, b) =>
      parseFloat(b.users.replace("M+", "")) -
      parseFloat(a.users.replace("M+", ""))
  );
}
const totalPages = Math.ceil(
    filteredTools.length / toolsPerPage
  );

  const currentTools = useMemo(() => {
    const start = (currentPage - 1) * toolsPerPage;

   return sortedTools.slice(
  start,
  start + toolsPerPage
);
  }, [filteredTools, currentPage]);
  useEffect(() => {
    setCurrentPage(1);
  }, [search, category]);
return (
  <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 md:grid-cols-2 lg:grid-cols-3">

    <div className="col-span-full mb-4 flex items-center justify-between">
      <h2 className="text-2xl font-bold text-white">
        All AI Tools
      </h2>

      <span className="rounded-full bg-slate-800 px-4 py-2 text-cyan-400">
        {filteredTools.length} Results
      </span>
    </div>

    {currentTools.map((tool) => (
      <div
        key={tool.id}
        className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-cyan-400"
      >

        {/* Top */}
        <div className="mb-4 flex items-center justify-between">

          <div className="flex flex-wrap gap-2">

            {tool.featured && (
              <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold text-cyan-400">
                🔥 Featured
              </span>
            )}

            {tool.popular && (
              <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-bold text-green-400">
                ⭐ Popular
              </span>
            )}

            {tool.editorsChoice && (
              <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-bold text-yellow-400">
                👑 Editor's Choice
              </span>
            )}

          </div>

          {/* Favorite */}
          <button
            onClick={() => {
              if (favorites.includes(tool.id)) {
                setFavorites(
                  favorites.filter((id) => id !== tool.id)
                );
              } else {
                setFavorites([...favorites, tool.id]);
              }
            }}
            className="text-2xl leading-none"
          >
            {favorites.includes(tool.id) ? "♥" : "♡"}
          </button>

        </div>

        {/* Card Link */}
        <Link
          href={`/tools/${tool.name
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
          className="block"
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
              <h3 className="text-xl font-bold">
                {tool.name}
              </h3>

              <p className="text-cyan-400">
                {tool.category}
              </p>

              <span className="mt-2 inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-400">
                {tool.pricing}
              </span>
            </div>

          </div>

          <p className="mb-4 text-sm leading-6 text-slate-400">
            {tool.description}
          </p>

          <div className="flex items-center justify-between">

            <span className="text-yellow-400">
              ⭐ {tool.rating}
            </span>

            <span className="text-sm text-slate-400">
              👥 {tool.users}
            </span>

          </div>

        </Link>

        {/* Buttons */}

        <Link
          href={`/tools/${tool.name
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
          className="mt-6 block rounded-xl bg-cyan-500 py-3 text-center font-semibold text-black transition hover:bg-cyan-400"
        >
          View Details →
        </Link>

        <button
          onClick={() => window.open(tool.website, "_blank")}
          className="mt-3 w-full rounded-xl border border-cyan-500 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
        >
          Visit Official Website
        </button>

      </div>
    ))}

    {filteredTools.length === 0 && (
      <div className="col-span-full text-center text-slate-400">
        No tools found.
      </div>
    )}

    {totalPages > 1 && (
      <div className="col-span-full mt-10 flex items-center justify-center gap-2">

        <button
          onClick={() =>
            setCurrentPage((page) => Math.max(page - 1, 1))
          }
          disabled={currentPage === 1}
          className="rounded-lg border border-slate-700 px-4 py-2 disabled:opacity-50"
        >
          ← Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`rounded-lg px-4 py-2 transition ${
              currentPage === index + 1
                ? "bg-cyan-500 text-black"
                : "border border-slate-700"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((page) =>
              Math.min(page + 1, totalPages)
            )
          }
          disabled={currentPage === totalPages}
          className="rounded-lg border border-slate-700 px-4 py-2 disabled:opacity-50"
        >
          Next →
        </button>

      </div>
    )}

  </section>
);
}