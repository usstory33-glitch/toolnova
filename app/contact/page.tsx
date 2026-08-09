"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("Message sent successfully! ✅");

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again. ❌");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      className="min-h-screen px-6 py-12"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-4xl font-bold">📩 Contact Us</h1>

          <Link
            href="/"
            className="rounded-lg border border-cyan-500 px-4 py-2 text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
          >
            ← Home
          </Link>
        </div>

        {/* Contact Card */}
        <div
          className="rounded-2xl border p-8 shadow-xl"
          style={{
            background: "var(--card)",
            borderColor: "var(--border)",
          }}
        >
          <p
            className="mb-8 text-center"
            style={{ color: "var(--muted)" }}
          >
            We'd love to hear from you. Fill out the form below.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Your Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
                className="w-full rounded-lg border bg-slate-950 p-3 outline-none transition focus:border-cyan-400"
                style={{ borderColor: "var(--border)" }}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Your Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full rounded-lg border bg-slate-950 p-3 outline-none transition focus:border-cyan-400"
                style={{ borderColor: "var(--border)" }}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Your Message
              </label>

              <textarea
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message..."
                required
                className="w-full rounded-lg border bg-slate-950 p-3 outline-none transition focus:border-cyan-400"
                style={{ borderColor: "var(--border)" }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message →"}
            </button>

            {status && (
              <p className="pt-2 text-center font-semibold">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}