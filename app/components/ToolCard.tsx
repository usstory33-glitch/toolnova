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

  // Load favorites
  useEffect(() => {
    const saved = localStorage.getItem("favorites");

    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch {
        setFavorites([]);
      }
    }
  }, []);

  // Save favorites
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Clean values
  const cleanSearch = search.trim().toLowerCase();
  const cleanCategory = category.trim().toLowerCase();

  // Filter tools
  const filteredTools = tools.filter((tool) => {
    const toolName = tool.name.trim().toLowerCase();
    const toolCategory = tool.category.trim().toLowerCase();

    const matchesSearch =
      cleanSearch === "" ||
      toolName.includes(cleanSearch) ||
      toolCategory.includes(cleanSearch);

    const matchesCategory =
      cleanCategory === "" ||
      cleanCategory === "all" ||
      toolCategory === cleanCategory;

    return matchesSearch && matchesCategory;
  });

  // Sort tools
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
    sortedTools.sort((a, b) => {
      const usersA = parseFloat(
        a.users.replace("M+", "").replace("K+", "")
      );

      const usersB = parseFloat(
        b.users.replace("M+", "").replace("K+", "")
      );

      return usersB - usersA;
    });
  }

  // Pagination
  const totalPages = Math.ceil(
    sortedTools.length / toolsPerPage
  );

  const currentTools = useMemo(() => {
    const start =
      (currentPage - 1) * toolsPerPage;

    return sortedTools.slice(
      start,
      start + toolsPerPage
    );
  }, [sortedTools, currentPage]);

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, category, sortBy]);

  // Favorite toggle
  const toggleFavorite = (id: number) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((favoriteId) => favoriteId !== id)
        : [...current, id]
    );
  };

  return (
    <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 md:grid-cols-2 lg:grid-cols-3">

      {/* Header */}
      <div className="col-span-full mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          All AI Tools
        </h2>

        <span className="rounded-full bg-slate-800 px-4 py-2 text-cyan-400">
          {filteredTools.length}{" "}
          {filteredTools.length === 1 ? "Result" : "Results"}
        </span>
      </div>

      {/* Tool Cards */}
      {currentTools.map((tool) => {
        const toolSlug = tool.name
          .toLowerCase()
          .replace(/\s+/g, "-");

        const isFavorite = favorites.includes(tool.id);

        return (
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
                type="button"
                onClick={() => toggleFavorite(tool.id)}
                aria-label={
                  isFavorite
                    ? `Remove ${tool.name} from favorites`
                    : `Add ${tool.name} to favorites`
                }
                className="text-2xl leading-none"
              >
                {isFavorite ? "♥" : "♡"}
              </button>
            </div>

            {/* Main Card */}
            <Link
              href={`/tools/${toolSlug}`}
              className="block"
            >
              {/* Logo + Name */}
              <div className="mb-4 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white p-2">
                  <img
                    src={tool.logo}
                    alt={`${tool.name} AI tool logo`}
                    className="h-10 w-10 object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
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

              {/* Description */}
              <p className="mb-4 text-sm leading-6 text-slate-400">
                {tool.description}
              </p>

              {/* Rating + Users */}
              <div className="flex items-center justify-between">
                <span className="text-yellow-400">
                  ⭐ {tool.rating}
                </span>

                <span className="text-sm text-slate-400">
                  👥 {tool.users}
                </span>
              </div>
            </Link>

            {/* View Details */}
            <Link
              href={`/tools/${toolSlug}`}
              className="mt-6 block rounded-xl bg-cyan-500 py-3 text-center font-semibold text-black transition hover:bg-cyan-400"
            >
              View Details →
            </Link>

            {/* Official Website */}
            <button
              type="button"
              onClick={() =>
                window.open(
                  tool.website,
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="mt-3 w-full rounded-xl border border-cyan-500 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
            >
              Visit Official Website
            </button>
          </div>
        );
      })}

      {/* No Results */}
      {filteredTools.length === 0 && (
        <div className="col-span-full rounded-2xl border border-slate-800 bg-slate-900 p-10 text-center">
          <div className="text-5xl">🔍</div>

          <h3 className="mt-4 text-xl font-bold text-white">
            No tools found
          </h3>

          <p className="mt-2 text-slate-400">
            Try another search or select a different category.
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="col-span-full mt-10 flex items-center justify-center gap-2">

          {/* Previous */}
          <button
            type="button"
            onClick={() =>
              setCurrentPage((page) =>
                Math.max(page - 1, 1)
              )
            }
            disabled={currentPage === 1}
            className="rounded-lg border border-slate-700 px-4 py-2 text-white transition hover:border-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            ← Previous
          </button>

          {/* Page Numbers */}
          {Array.from(
            { length: totalPages },
            (_, index) => (
              <button
                type="button"
                key={index}
                onClick={() =>
                  setCurrentPage(index + 1)
                }
                className={`rounded-lg px-4 py-2 transition ${
                  currentPage === index + 1
                    ? "bg-cyan-500 text-black"
                    : "border border-slate-700 text-white hover:border-cyan-400"
                }`}
              >
                {index + 1}
              </button>
            )
          )}

          {/* Next */}
          <button
            type="button"
            onClick={() =>
              setCurrentPage((page) =>
                Math.min(page + 1, totalPages)
              )
            }
            disabled={currentPage === totalPages}
            className="rounded-lg border border-slate-700 px-4 py-2 text-white transition hover:border-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next →
          </button>

        </div>
      )}

    </section>
  );
}