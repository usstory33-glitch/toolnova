"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ToolCard from "./components/ToolCard";
import TopRated from "./components/TopRated";
import TrendingTools from "./components/TrendingTools";
import RecentlyViewed from "./components/RecentlyViewed";
import Footer from "./components/Footer";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  return (
    <main
      className="min-h-screen"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <Navbar />

      <Hero
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {/* Stats */}
      <section className="mx-auto mt-10 mb-12 grid max-w-6xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          ["500+", "AI Tools"],
          ["2M+", "Monthly Users"],
          ["1000+", "Reviews"],
          ["Daily", "Updated"],
        ].map(([title, subtitle]) => (
          <div
            key={title}
            className="rounded-xl border p-6 text-center"
            style={{
              background: "var(--card)",
              borderColor: "var(--border)",
            }}
          >
            <h2
              className="text-3xl font-bold"
              style={{ color: "var(--primary)" }}
            >
              {title}
            </h2>

            <p
              className="mt-2"
              style={{ color: "var(--muted)" }}
            >
              {subtitle}
            </p>
          </div>
        ))}
      </section>

      {/* Featured */}
      <section id="tools">
        <div className="mx-auto mt-16 mb-8 max-w-6xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2
              className="text-4xl font-bold"
              style={{ color: "var(--foreground)" }}
            >
              Featured AI Tools
            </h2>

            <span
              className="rounded-full px-4 py-2 text-sm font-semibold"
              style={{
                background: "var(--card)",
                color: "var(--primary)",
              }}
            >
              🔥 Trending
            </span>
          </div>

          <div
            className="mt-3 flex flex-wrap items-center gap-3"
            style={{ color: "var(--muted)" }}
          >
            <p>
              Discover the most popular AI tools used by millions of people.
            </p>

            <span
              className="rounded-full border px-3 py-1 text-sm"
              style={{ borderColor: "var(--border)" }}
            >
              6 Tools Available
            </span>
          </div>
        </div>

        <ToolCard
          search={search}
          category={category}
          sortBy={sortBy}
        />
      </section>

      {/* Top Rated */}
      <section id="top-rated">
        <TopRated />
      </section>

      {/* Trending */}
      <section id="trending">
        <TrendingTools />
      </section>

      {/* Recently Viewed */}
      <section id="recently-viewed">
        <RecentlyViewed />
      </section>

      {/* Latest */}
      <section className="mx-auto mt-20 mb-20 max-w-6xl px-6">
        <div
          className="rounded-2xl border p-8"
          style={{
            background: "var(--card)",
            borderColor: "var(--border)",
          }}
        >
          <h2
            className="text-3xl font-bold"
            style={{ color: "var(--primary)" }}
          >
            🚀 Latest AI Tools
          </h2>

          <p
            className="mt-3"
            style={{ color: "var(--muted)" }}
          >
            New AI tools are added regularly to help you stay updated with the
            latest AI technology.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "ChatGPT",
              "Claude",
              "Midjourney",
              "Runway",
              "ElevenLabs",
              "GitHub Copilot",
            ].map((tool) => (
              <span
                key={tool}
                className="rounded-full border px-4 py-2"
                style={{
                  borderColor: "var(--primary)",
                  color: "var(--foreground)",
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}