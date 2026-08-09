"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { tools } from "../data/tools";
export default function FavoritesPage() {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  useEffect(() => {
    const loadFavorites = () => {
      const saved = localStorage.getItem("favorites");

      if (saved) {
        setFavoriteIds(JSON.parse(saved));
      } else {
        setFavoriteIds([]);
      }
    };

    loadFavorites();

    window.addEventListener("storage", loadFavorites);

    return () => {
      window.removeEventListener("storage", loadFavorites);
    };
  }, []);

  const removeFavorite = (id: number) => {
    const updatedFavorites = favoriteIds.filter(
      (favoriteId) => favoriteId !== id
    );

    setFavoriteIds(updatedFavorites);

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );
  };

  const favoriteTools = tools.filter((tool) =>
    favoriteIds.includes(tool.id)
  );

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <h1 className="text-4xl font-bold">
            ❤️ Favorite AI Tools
          </h1>

          <Link
            href="/"
            className="rounded-lg border border-cyan-500 px-4 py-2 text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
          >
            ← Back to Home
          </Link>
        </div>

        {/* No Favorites */}
        {favoriteTools.length === 0 ? (
          <div className="mt-16 text-center">

            <h2 className="text-3xl font-bold">
              No favorite tools yet ❤️
            </h2>

            <p className="mt-3 text-slate-400">
              Go back and click the heart icon on any tool to add it to
              your favorites.
            </p>

            <Link
              href="/"
              className="mt-6 inline-block rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
            >
              Browse AI Tools
            </Link>

          </div>
        ) : (

          /* Favorite Cards */
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {favoriteTools.map((tool) => (

              <div
                key={tool.id}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-2 hover:border-cyan-400"
              >

                {/* Tool Link */}
                <Link
                  href={`/tools/${tool.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="block"
                >

                  <div className="mb-4 flex items-center gap-4">

                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="h-14 w-14 rounded-lg bg-white p-2"
                    />

                    <div>
                      <h2 className="text-xl font-bold">
                        {tool.name}
                      </h2>

                      <p className="text-cyan-400">
                        {tool.category}
                      </p>

                      <span className="mt-2 inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-400">
                        {tool.pricing}
                      </span>
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

                {/* Remove Favorite */}
                <button
                  onClick={() => removeFavorite(tool.id)}
                  className="mt-5 w-full rounded-xl border border-red-500 px-4 py-3 font-semibold text-red-400 transition hover:bg-red-500 hover:text-white"
                >
                  ❤️ Remove Favorite
                </button>

              </div>

            ))}

          </div>
        )}

      </div>
    </main>
  );
}