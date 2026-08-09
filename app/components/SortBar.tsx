"use client";

type SortBarProps = {
    sortBy: string;
    setSortBy: (value: string) => void;
};

export default function SortBar({
    sortBy,
    setSortBy,
}: SortBarProps) {
    return (
        <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <h2 className="text-2xl font-bold text-white">
                All AI Tools
            </h2>

            <div className="flex items-center gap-3">
                <label className="text-slate-400">
                    Sort By:
                </label>

                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white outline-none focus:border-cyan-400"
                >
                    <option value="default">Default</option>
                    <option value="rating">⭐ Highest Rating</option>
                    <option value="users">👥 Most Users</option>
                    <option value="name">🔤 Name (A-Z)</option>
                </select>
            </div>
        </div>
    );
}