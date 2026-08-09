export default function AboutPage() {
    return (
        <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
            <div className="mx-auto max-w-4xl rounded-xl border border-slate-800 bg-slate-900 p-8">
                <h1 className="mb-6 text-center text-4xl font-bold">
                    About ToolNova
                </h1>

                <p className="mb-6 text-lg text-slate-300">
                    ToolNova is a modern AI Tools Directory that helps users discover the
                    best AI tools for writing, coding, image generation, video editing,
                    audio creation, and productivity.
                </p>

                <h2 className="mb-3 text-2xl font-semibold text-cyan-400">
                    Our Mission
                </h2>

                <p className="mb-6 text-slate-300">
                    Our mission is to make it easy for everyone to find the right AI
                    tools. We collect useful tools in one place so users can compare and
                    choose the best option.
                </p>

                <h2 className="mb-3 text-2xl font-semibold text-cyan-400">
                    Why Choose ToolNova?
                </h2>

                <ul className="list-disc space-y-2 pl-6 text-slate-300">
                    <li>Curated collection of AI tools</li>
                    <li>Easy search and category filters</li>
                    <li>Simple and modern design</li>
                    <li>Regularly updated tools</li>
                    <li>Free and premium AI tools</li>
                </ul>
            </div>
        </main>
    );
}