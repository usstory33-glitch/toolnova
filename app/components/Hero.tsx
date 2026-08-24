"use client";

type HeroProps = {
  search: string;
  setSearch: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
sortBy: string;
setSortBy: (value: string) => void;
};

export default function Hero({
  search,
  setSearch,
  category,
  setCategory,
sortBy,
setSortBy,
}: HeroProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 text-center sm:py-20">
      <span
        className="rounded-full border px-4 py-2"
        style={{
          borderColor: "var(--primary)",
          color: "var(--primary)",
        }}
      >
        🚀 AI Tools Directory
      </span>

      <h1
        className="mt-8 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
        style={{ color: "var(--foreground)" }}
      >
        Discover The Best
        <span
          className="block"
          style={{ color: "var(--primary)" }}
        >
          AI Tools
        </span>
      </h1>

<p
  className="mx-auto mt-6 max-w-2xl px-2 text-base sm:text-lg"
  style={{ color: "var(--muted)" }}
>
  Discover, compare, and explore the best AI tools for writing, coding,
  image generation, video creation, audio, and productivity. Find the right
  AI tool for your needs in one place.
</p>

      <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row">
        <input
          type="text"
          placeholder="🔍 Search AI tools..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 rounded-xl border p-4 outline-none transition sm:rounded-r-none"
          style={{
            background: "var(--card)",
            borderColor: "var(--border)",
            color: "var(--foreground)",
          }}
        />

        <button
          className="rounded-xl px-8 py-4 font-semibold text-white transition sm:rounded-l-none"
          style={{
            background: "var(--primary)",
          }}
        >
          Search
        </button>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {["🔥 Trending", "⭐ Top Rated", "💰 Free & Paid", "🚀 Updated Daily"].map(
          (item) => (
            <span
              key={item}
              className="rounded-full px-4 py-2 text-sm"
              style={{
                background: "var(--card)",
                color: "var(--muted)",
                border: "1px solid var(--border)",
              }}
            >
              {item}
            </span>
          )
        )}
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {[
          "All",
          "AI Writing",
          "AI Image",
          "AI Video",
          "AI Audio",
          "AI Coding",
        ].map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className="rounded-full px-5 py-2 font-semibold transition"
            style={{
              background:
                category === item ? "var(--primary)" : "transparent",
              color:
                category === item
                  ? "#000"
                  : "var(--foreground)",
              border:
                category === item
                  ? "none"
                  : "1px solid var(--border)",
            }}
          >
            {item}
          </button>
        ))}
      </div>
    <div className="mt-6 flex justify-center">
  <select
    value={sortBy}
onChange={(e) => setSortBy(e.target.value)}
    className="rounded-lg border px-4 py-2"
    style={{
      background: "var(--card)",
      color: "var(--foreground)",
      borderColor: "var(--border)",
    }}
  >
<option value="default">Sort By</option>
<option value="Rating">Rating</option>
<option value="Name">Name</option>
<option value="Users">Users</option>
  </select>
</div>
    </section>
  );
}