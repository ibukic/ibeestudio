import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ibee studio. Tell us about your project — web design, SEO, AI integration, or automation. We respond within one business day.",
  alternates: {
    canonical: "https://ibeestudio.com/contact",
  },
};

const topics = [
  "Website development",
  "SEO optimization",
  "AI integration",
  "Business automation",
  "IT consulting",
  "Digital transformation",
  "Something else",
];

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] text-[#64748B] hover:text-[#0F172A] transition-colors mb-10 group"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform duration-200">
              ←
            </span>
            Back to home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left */}
            <div>
              <p className="text-accent text-[11px] tracking-[0.22em] uppercase font-medium mb-5">
                Contact
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
                Let&apos;s talk about
                <br />
                your next project.
              </h1>
              <p className="text-[#475569] text-[15px] leading-relaxed mb-12 max-w-sm">
                Whether you have a clear brief or just an idea — reach out. We
                respond to every inquiry and always give honest advice.
              </p>

              <a
                href="mailto:info@ibeestudio.com"
                className="group flex items-center gap-4 mb-8"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300 shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-accent"
                    aria-hidden="true"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] text-[#94A3B8] tracking-wide mb-0.5">
                    Email
                  </p>
                  <p className="text-[15px] text-[#475569] group-hover:text-[#0F172A] transition-colors duration-200 font-medium">
                    info@ibeestudio.com
                  </p>
                </div>
              </a>

              <p className="text-[13px] text-[#94A3B8] leading-relaxed max-w-xs">
                We typically respond within one business day. For urgent
                inquiries, mention it in the subject line.
              </p>
            </div>

            {/* Right: topic chips */}
            <div className="glass-card rounded-3xl p-8 md:p-10">
              <p className="text-[13px] text-[#64748B] mb-6 leading-relaxed">
                What are you working on? Select a topic and we&apos;ll tailor
                our response to your needs.
              </p>

              <div className="flex flex-wrap gap-2.5 mb-10">
                {topics.map((topic) => (
                  <a
                    key={topic}
                    href={`mailto:info@ibeestudio.com?subject=${encodeURIComponent(topic)}`}
                    className="px-4 py-2 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] text-[13px] text-[#475569] hover:text-[#0F172A] hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
                  >
                    {topic}
                  </a>
                ))}
              </div>

              <a
                href="mailto:info@ibeestudio.com"
                className="flex items-center justify-center gap-2.5 w-full py-4 rounded-xl bg-accent hover:bg-accent-light text-white font-medium text-[14px] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(37,99,235,0.3)]"
              >
                Send a message
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
