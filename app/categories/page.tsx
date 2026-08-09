"use client";

import Link from "next/link";

export default function CategoriesPage() {
  const categories = [
    {
      name: "AI Writing",
      icon: "✍️",
      description: "Writing, research, summarization and content creation tools.",
    },
    {
      name: "AI Image",
      icon: "🎨",
      description: "Create amazing images, artwork and designs with AI.",
    },
    {
      name: "AI Video",
      icon: "🎬",
      description: "Generate, edit and enhance videos using AI.",
    },
    {
      name: "AI Audio",
      icon: "🎙️",
      description: "Voice generation, cloning, dubbing and audio tools.",
    },
    {
      name: "AI Coding",
      icon: "💻",
      description: "AI coding assistants for developers and programmers.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <h1 className="text-4xl font-bold">
            📂 AI Tool Categories
          </h1>

          <Link
            href="/"
            className="rounded-lg border border-cyan-500 px-4 py-2 text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Categories */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/?category=${encodeURIComponent(category.name)}#tools`}
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl"
            >
              <div className="text-5xl">
                {category.icon}
              </div>

              <h2 className="mt-5 text-2xl font-bold group-hover:text-cyan-400">
                {category.name}
              </h2>

              <p className="mt-3 leading-6 text-slate-400">
                {category.description}
              </p>

              <div className="mt-6 font-semibold text-cyan-400">
                Explore Tools →
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}