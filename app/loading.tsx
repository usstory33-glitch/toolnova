export default function Loading() {
    return (
        <main
            className="flex min-h-screen items-center justify-center"
            style={{
                background: "var(--background)",
            }}
        >
            <div className="text-center">
                <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent"></div>

                <h2
                    className="mt-6 text-2xl font-bold"
                    style={{ color: "var(--foreground)" }}
                >
                    Loading ToolNova...
                </h2>

                <p
                    className="mt-2"
                    style={{ color: "var(--muted)" }}
                >
                    Please wait a moment...
                </p>
            </div>
        </main>
    );
}