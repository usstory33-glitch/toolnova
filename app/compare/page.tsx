"use client";

import { useState } from "react";
import Link from "next/link";
import { tools } from "../data/tools";

export default function ComparePage() {
  const [tool1Id, setTool1Id] = useState("");
  const [tool2Id, setTool2Id] = useState("");

  const firstTool = tools.find(
    (tool) => String(tool.id) === tool1Id
  );

  const secondTool = tools.find(
    (tool) => String(tool.id) === tool2Id
  );

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="text-4xl font-bold">
            ⚖️ Compare AI Tools
          </h1>

          <Link
            href="/"
            className="w-fit rounded-lg border border-cyan-500 px-4 py-2 text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Tool Selection */}
        <div className="mb-10 grid gap-6 md:grid-cols-2">

          {/* First Tool */}
          <div>
            <label
              htmlFor="first-tool"
              className="mb-2 block text-sm font-semibold text-slate-300"
            >
              Select First Tool
            </label>

            <select
              id="first-tool"
              value={tool1Id}
              onChange={(e) => setTool1Id(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 text-white outline-none focus:border-cyan-400"
            >
              <option value="">
                Select First Tool
              </option>

              {tools.map((tool) => (
                <option key={tool.id} value={String(tool.id)}>
                  {tool.name}
                </option>
              ))}
            </select>
          </div>

          {/* Second Tool */}
          <div>
            <label
              htmlFor="second-tool"
              className="mb-2 block text-sm font-semibold text-slate-300"
            >
              Select Second Tool
            </label>

            <select
              id="second-tool"
              value={tool2Id}
              onChange={(e) => setTool2Id(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 text-white outline-none focus:border-cyan-400"
            >
              <option value="">
                Select Second Tool
              </option>

              {tools.map((tool) => (
                <option
                  key={tool.id}
                  value={String(tool.id)}
                  disabled={String(tool.id) === tool1Id}
                >
                  {tool.name}
                  {String(tool.id) === tool1Id
                    ? " (Already Selected)"
                    : ""}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Selected Tools */}
        {(firstTool || secondTool) && (
          <div className="mb-8 grid gap-4 md:grid-cols-2">

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-sm text-slate-400">
                First Tool
              </p>

              <p className="mt-1 text-lg font-bold text-cyan-400">
                {firstTool ? firstTool.name : "Not selected"}
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-sm text-slate-400">
                Second Tool
              </p>

              <p className="mt-1 text-lg font-bold text-cyan-400">
                {secondTool ? secondTool.name : "Not selected"}
              </p>
            </div>

          </div>
        )}

        {/* Comparison */}
        {firstTool && secondTool ? (
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">

            <table className="w-full min-w-[800px] border-collapse">

              <thead>
                <tr className="bg-slate-800">

                  <th className="border border-slate-700 p-4 text-left">
                    Feature
                  </th>

                  <th className="border border-slate-700 p-4 text-center">
                    {firstTool.name}
                  </th>

                  <th className="border border-slate-700 p-4 text-center">
                    {secondTool.name}
                  </th>

                </tr>
              </thead>

              <tbody>

                {/* Category */}
                <tr>
                  <td className="border border-slate-700 p-4 font-bold">
                    Category
                  </td>

                  <td className="border border-slate-700 p-4 text-cyan-400">
                    {firstTool.category}
                  </td>

                  <td className="border border-slate-700 p-4 text-cyan-400">
                    {secondTool.category}
                  </td>
                </tr>

                {/* Rating */}
                <tr>
                  <td className="border border-slate-700 p-4 font-bold">
                    Rating
                  </td>

                  <td className="border border-slate-700 p-4 text-yellow-400">
                    ⭐ {firstTool.rating}
                  </td>

                  <td className="border border-slate-700 p-4 text-yellow-400">
                    ⭐ {secondTool.rating}
                  </td>
                </tr>

                {/* Users */}
                <tr>
                  <td className="border border-slate-700 p-4 font-bold">
                    Users
                  </td>

                  <td className="border border-slate-700 p-4">
                    👥 {firstTool.users}
                  </td>

                  <td className="border border-slate-700 p-4">
                    👥 {secondTool.users}
                  </td>
                </tr>

                {/* Pricing */}
                <tr>
                  <td className="border border-slate-700 p-4 font-bold">
                    Pricing
                  </td>

                  <td className="border border-slate-700 p-4 text-green-400">
                    {firstTool.pricing}
                  </td>

                  <td className="border border-slate-700 p-4 text-green-400">
                    {secondTool.pricing}
                  </td>
                </tr>

                {/* Description */}
                <tr>
                  <td className="border border-slate-700 p-4 font-bold">
                    Description
                  </td>

                  <td className="border border-slate-700 p-4 text-slate-400">
                    {firstTool.description}
                  </td>

                  <td className="border border-slate-700 p-4 text-slate-400">
                    {secondTool.description}
                  </td>
                </tr>

                {/* Features */}
                <tr>
                  <td className="border border-slate-700 p-4 font-bold align-top">
                    Features
                  </td>

                  <td className="border border-slate-700 p-4">
                    <div className="grid gap-2">
                      {firstTool.features.map((feature) => (
                        <div
                          key={feature}
                          className="rounded-lg bg-slate-800 px-3 py-2 text-sm"
                        >
                          ✅ {feature}
                        </div>
                      ))}
                    </div>
                  </td>

                  <td className="border border-slate-700 p-4">
                    <div className="grid gap-2">
                      {secondTool.features.map((feature) => (
                        <div
                          key={feature}
                          className="rounded-lg bg-slate-800 px-3 py-2 text-sm"
                        >
                          ✅ {feature}
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>

                {/* Official Website */}
                <tr>
                  <td className="border border-slate-700 p-4 font-bold">
                    Official Website
                  </td>

                  <td className="border border-slate-700 p-4">
                    <a
                      href={firstTool.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-black transition hover:bg-cyan-400"
                    >
                      Visit {firstTool.name}
                    </a>
                  </td>

                  <td className="border border-slate-700 p-4">
                    <a
                      href={secondTool.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-black transition hover:bg-cyan-400"
                    >
                      Visit {secondTool.name}
                    </a>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-10 text-center">

            <div className="text-5xl">
              ⚖️
            </div>

            <h2 className="mt-4 text-2xl font-bold">
              Select Two AI Tools
            </h2>

            <p className="mt-2 text-slate-400">
              Choose two different tools above to compare their features,
              pricing, ratings and more.
            </p>

          </div>
        )}

      </div>
    </main>
  );
}