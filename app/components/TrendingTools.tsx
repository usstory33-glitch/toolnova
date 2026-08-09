import Link from "next/link";
import { tools } from "../data/tools";

export default function TrendingTools() {
    const trendingTools = tools.filter(
        (tool) => tool.featured || tool.popular
    );

    return (
        <section className="mx-auto mt-20 max-w-6xl px-6">
            <div className="mb-8 flex items-center justify-between">
                <h2 className="text-4xl font-bold text-white">
                    🔥 Trending AI Tools
                </h2>

                <span className="rounded-full bg-red-500/20 px-4 py-2 text-sm font-semibold text-red-400">
                    Trending Now
                </span>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {trendingTools.map((tool) => (
                    <Link
                        key={tool.id}
                        href={`/tools/${tool.name.toLowerCase().replace(/\s+/g, "-")}`}
                        className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-2 hover:border-red-400"
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

                                <p className="text-sm text-cyan-400">
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
                ))}
            </div>
        </section>
    );
}