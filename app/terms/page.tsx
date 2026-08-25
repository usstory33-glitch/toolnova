import Link from "next/link";

export default function TermsPage() {
  return (
    <main
      className="min-h-screen px-6 py-12"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-block rounded-lg border px-4 py-2 transition hover:border-cyan-400 hover:text-cyan-400"
          style={{
            borderColor: "var(--border)",
            color: "var(--muted)",
          }}
        >
          ← Back to Home
        </Link>

        <article className="mt-8">
          <h1 className="text-4xl font-bold">
            Terms of Service
          </h1>

          <p
            className="mt-3"
            style={{ color: "var(--muted)" }}
          >
            Last updated: August 25, 2026
          </p>

          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-bold">
              Introduction
            </h2>

            <p style={{ color: "var(--muted)" }}>
              These Terms of Service explain the rules for using
              ToolNova. By accessing or using the website, you agree
              to these terms.
            </p>
          </section>

          <section className="mt-8 space-y-4">
            <h2 className="text-2xl font-bold">
              Use of ToolNova
            </h2>

            <p style={{ color: "var(--muted)" }}>
              ToolNova provides information about AI tools and
              services to help visitors discover and compare
              available products.
            </p>

            <p style={{ color: "var(--muted)" }}>
              You agree to use ToolNova only for lawful purposes and
              not to misuse, disrupt, or attempt to gain unauthorized
              access to the website or its services.
            </p>
          </section>

          <section className="mt-8 space-y-4">
            <h2 className="text-2xl font-bold">
              Third-Party Websites
            </h2>

            <p style={{ color: "var(--muted)" }}>
              ToolNova contains links to third-party websites and AI
              services. These websites are operated independently
              and may have their own terms, policies, pricing, and
              availability.
            </p>

            <p style={{ color: "var(--muted)" }}>
              ToolNova is not responsible for the content, services,
              availability, or policies of third-party websites.
            </p>
          </section>

          <section className="mt-8 space-y-4">
            <h2 className="text-2xl font-bold">
              Information Accuracy
            </h2>

            <p style={{ color: "var(--muted)" }}>
              We try to keep information on ToolNova useful and
              up to date. However, AI tool features, pricing,
              availability, and terms may change at any time.
            </p>

            <p style={{ color: "var(--muted)" }}>
              Visitors should verify important information directly
              with the official website of each tool.
            </p>
          </section>

          <section className="mt-8 space-y-4">
            <h2 className="text-2xl font-bold">
              Intellectual Property
            </h2>

            <p style={{ color: "var(--muted)" }}>
              ToolNova's website content, design, and original
              materials are protected by applicable intellectual
              property laws. Third-party names, logos, and trademarks
              belong to their respective owners.
            </p>
          </section>

          <section className="mt-8 space-y-4">
            <h2 className="text-2xl font-bold">
              Changes to These Terms
            </h2>

            <p style={{ color: "var(--muted)" }}>
              We may update these Terms of Service from time to time
              to reflect changes to ToolNova, our services, or
              applicable requirements. Updates will be posted on
              this page.
            </p>
          </section>

          <section className="mt-8 space-y-4">
            <h2 className="text-2xl font-bold">
              Contact Us
            </h2>

            <p style={{ color: "var(--muted)" }}>
              If you have questions about these Terms of Service,
              please contact us.
            </p>

            <Link
              href="/contact"
              className="inline-block font-semibold text-cyan-400 hover:text-cyan-300"
            >
              Contact ToolNova →
            </Link>
          </section>
        </article>
      </div>
    </main>
  );
}