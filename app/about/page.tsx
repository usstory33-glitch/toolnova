import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl md:p-10">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">
            About ToolNova
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            Discover Better AI Tools
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            ToolNova is an AI tools directory designed to help people discover
            useful AI products for writing, coding, images, video, audio,
            productivity, and more.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-cyan-400">
            What is ToolNova?
          </h2>

          <p className="leading-8 text-slate-300">
            Finding the right AI tool can be difficult because new tools are
            constantly being released. ToolNova brings useful AI tools together
            in one place so visitors can browse by category, search for tools,
            compare options, and visit the official websites for more
            information.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-cyan-400">
            Our Mission
          </h2>

          <p className="leading-8 text-slate-300">
            Our mission is to make AI tools easier to discover and understand.
            We want visitors to spend less time searching through different
            websites and more time finding tools that fit their needs.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-cyan-400">
            What You Can Find on ToolNova
          </h2>

          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "AI Writing",
                text: "Tools for writing, rewriting, brainstorming, and content creation.",
              },
              {
                title: "AI Image",
                text: "Tools for image generation, editing, design, and creative work.",
              },
              {
                title: "AI Video",
                text: "Tools for video creation, editing, animation, and visual content.",
              },
              {
                title: "AI Audio",
                text: "Tools for voice generation, audio creation, transcription, and more.",
              },
              {
                title: "AI Coding",
                text: "Tools that help with programming, code generation, debugging, and development.",
              },
              {
                title: "Productivity",
                text: "AI tools that can help with everyday work, research, and productivity.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-slate-800 bg-slate-950 p-5"
              >
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-slate-400">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-cyan-400">
            How ToolNova Helps
          </h2>

          <ul className="list-disc space-y-3 pl-6 leading-7 text-slate-300">
            <li>Browse AI tools by category.</li>
            <li>Search for tools quickly.</li>
            <li>Review useful tool information in one place.</li>
            <li>Compare different options before choosing a tool.</li>
            <li>Visit the official website of a tool for the latest information.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-cyan-400">
            Keeping Information Useful
          </h2>

          <p className="leading-8 text-slate-300">
            AI products, features, pricing, and availability can change over
            time. We aim to keep ToolNova information useful and up to date,
            but visitors should always check the official website of a tool
            for the latest pricing, features, terms, and availability.
          </p>
        </section>

        <section className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="mb-3 text-2xl font-semibold text-cyan-400">
            Contact ToolNova
          </h2>

          <p className="mb-5 leading-7 text-slate-300">
            Have a question, suggestion, correction, or want to recommend an
            AI tool? We would be happy to hear from you.
          </p>

          <Link
            href="/contact"
            className="inline-flex rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </main>
  );
}