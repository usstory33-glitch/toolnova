import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "../../data/tools";
import TrackRecentlyViewed from "../../components/TrackRecentlyViewed";
import ReviewSection from "../../components/ReviewSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}): Promise<Metadata> {
  const { name } = await params;

  const tool = tools.find(
    (t) => t.name.toLowerCase().replace(/\s+/g, "-") === name
  );

  if (!tool) {
    return {
      title: "Tool Not Found",
    };
  }

  return {
    title: tool.name,
    description: tool.description,

    openGraph: {
      title: tool.name,
      description: tool.description,
    },

    twitter: {
      card: "summary_large_image",
      title: tool.name,
      description: tool.description,
    },
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  const tool = tools.find(
    (t) => t.name.toLowerCase().replace(/\s+/g, "-") === name
  );

  if (!tool) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold">
            Tool Not Found
          </h1>

          <Link
            href="/"
            className="mt-6 inline-block rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-black"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl">

        {/* Recently Viewed Tracker */}
        <TrackRecentlyViewed toolId={tool.id} />

        {/* Back */}
        <Link
          href="/"
          className="mb-8 inline-block rounded-lg border border-cyan-500 px-4 py-2 text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
        >
          ← Back to Home
        </Link>

        {/* Tool Header */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl">

          <div className="flex items-center gap-5">

            <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-white p-3">
              <img
                src={tool.logo}
                alt={tool.name}
                className="h-14 w-14 object-contain"
              />
            </div>

            <div>
              <h1 className="text-4xl font-bold">
                {tool.name}
              </h1>

              <p className="mt-2 text-slate-400">
                Trusted by {tool.users} users ⭐ {tool.rating}
              </p>
            </div>

          </div>

          {/* Pricing */}
          <span className="mt-5 inline-block rounded-full bg-cyan-500/20 px-4 py-1 text-sm font-semibold text-cyan-400">
            {tool.pricing}
          </span>

          {/* Description */}
          <p className="mt-5 text-lg text-slate-300">
            {tool.description}
          </p>

          {/* Category + Pricing */}
          <div className="mt-6 flex flex-wrap gap-3">

            <span className="rounded-full bg-cyan-500/20 px-4 py-2 font-semibold text-cyan-400">
              📂 {tool.category}
            </span>

            <span className="rounded-full bg-green-500/20 px-4 py-2 font-semibold text-green-400">
              💰 {tool.pricing}
            </span>

          </div>

          {/* Features */}
          <h2 className="mb-4 mt-8 border-b border-slate-700 pb-2 text-2xl font-bold">
            ✨ Features
          </h2>

          <div className="mt-4 grid gap-3">

            {tool.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800 p-4 transition hover:border-cyan-400 hover:bg-slate-700"
              >
                <span className="text-green-400">
                  ✅
                </span>

                <span>
                  {feature}
                </span>
              </div>
            ))}

          </div>

          {/* Official Website */}
          <a
            href={tool.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-400"
          >
            🌐 Visit Official Website
          </a>

          {/* Related Tools */}
          <section className="mt-12 border-t border-slate-800 pt-8">

            <h2 className="mb-6 text-2xl font-bold">
              Related AI Tools
            </h2>

            <div className="grid gap-4 md:grid-cols-2">

              {tools
                .filter(
                  (t) =>
                    t.category === tool.category &&
                    t.id !== tool.id
                )
                .slice(0, 2)
                .map((related) => (
                  <Link
                    key={related.id}
                    href={`/tools/${related.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="rounded-xl border border-slate-700 bg-slate-800 p-4 transition hover:border-cyan-400"
                  >
                    <h3 className="font-bold">
                      {related.name}
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                      {related.description}
                    </p>
                  </Link>
                ))}

            </div>
          </section>

          {/* Reviews */}
          <ReviewSection />

        </div>
      </div>
    </main>
  );
}