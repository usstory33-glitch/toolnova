import Link from "next/link";

export default function NotFound() {
    return (
        <main
            className="flex min-h-screen items-center justify-center px-6"
            style={{
                background: "var(--background)",
                color: "var(--foreground)",
            }}
        >
            <div className="max-w-xl text-center">
                <h1
                    className="text-8xl font-extrabold"
                    style={{ color: "var(--primary)" }}
                >
                    404
                </h1>

                <h2 className="mt-6 text-3xl font-bold">
                    Oops! Page Not Found
                </h2>

                <p
                    className="mt-4 text-lg"
                    style={{ color: "var(--muted)" }}
                >
                    The page you are looking for doesn't exist or may have been moved.
                </p>

                <Link
                    href="/"
                    className="mt-8 inline-block rounded-xl px-6 py-3 font-semibold transition hover:scale-105"
                    style={{
                        background: "var(--primary)",
                        color: "#000",
                    }}
                >
                    🏠 Back to Home
                </Link>
            </div>
        </main>
    );
}