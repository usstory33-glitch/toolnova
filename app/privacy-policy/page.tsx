import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the ToolNova Privacy Policy to learn how information submitted through the website may be collected, used and protected.",
  alternates: {
    canonical: "https://toolnova-roan.vercel.app/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | ToolNova",
    description:
      "Learn how ToolNova handles information and privacy on its AI tools directory website.",
    url: "https://toolnova-roan.vercel.app/privacy-policy",
    siteName: "ToolNova",
    locale: "en_US",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl md:p-10">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">
            ToolNova
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 text-slate-400">
            Last updated: August 22, 2026
          </p>
        </div>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-cyan-400">
            Introduction
          </h2>

          <p className="leading-8 text-slate-300">
            ToolNova respects your privacy. This Privacy Policy explains what
            information may be collected when you use the ToolNova website and
            how that information may be used.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-cyan-400">
            Information We Collect
          </h2>

          <p className="mb-4 leading-8 text-slate-300">
            ToolNova may collect limited information that you voluntarily
            provide when using features such as the contact form.
          </p>

          <ul className="list-disc space-y-2 pl-6 leading-7 text-slate-300">
            <li>Your name, if provided through the contact form.</li>
            <li>Your email address, if provided through the contact form.</li>
            <li>The message or information you choose to send to us.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-cyan-400">
            How We Use Information
          </h2>

          <p className="mb-4 leading-8 text-slate-300">
            Information submitted through the website may be used to:
          </p>

          <ul className="list-disc space-y-2 pl-6 leading-7 text-slate-300">
            <li>Respond to questions or requests.</li>
            <li>Improve the ToolNova website and user experience.</li>
            <li>Maintain and operate website features.</li>
            <li>Identify and resolve technical problems.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-cyan-400">
            Cookies and Similar Technologies
          </h2>

          <p className="leading-8 text-slate-300">
            ToolNova may use cookies, local storage, or similar technologies
            where needed for website functionality, preferences, recently
            viewed tools, favorites, analytics, or other site features.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-cyan-400">
            Third-Party Websites
          </h2>

          <p className="leading-8 text-slate-300">
            ToolNova contains links to third-party AI tools and external
            websites. Those websites have their own privacy policies and terms.
            ToolNova is not responsible for the privacy practices or content of
            external websites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-cyan-400">
            Advertising
          </h2>

          <p className="leading-8 text-slate-300">
            ToolNova may use third-party advertising services in the future,
            including Google AdSense. These services may use cookies or similar
            technologies to provide, measure, and personalize advertising in
            accordance with their applicable policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-cyan-400">
            Data Security
          </h2>

          <p className="leading-8 text-slate-300">
            We take reasonable steps to protect information submitted through
            ToolNova. However, no method of transmission or electronic storage
            is completely secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-cyan-400">
            Children&apos;s Privacy
          </h2>

          <p className="leading-8 text-slate-300">
            ToolNova is not intended to knowingly collect personal information
            from children. If you believe a child has submitted personal
            information through the website, please contact us so that we can
            take appropriate steps.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-cyan-400">
            Changes to This Policy
          </h2>

          <p className="leading-8 text-slate-300">
            We may update this Privacy Policy from time to time to reflect
            changes to the website, services, or legal requirements. Updates
            will be posted on this page.
          </p>
        </section>

        <section className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="mb-3 text-2xl font-semibold text-cyan-400">
            Contact Us
          </h2>

          <p className="mb-5 leading-7 text-slate-300">
            If you have questions about this Privacy Policy or how ToolNova
            handles information, please contact us.
          </p>

          <Link
            href="/contact"
            className="inline-flex rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Contact ToolNova
          </Link>
        </section>
      </div>
    </main>
  );
}