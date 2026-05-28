import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web design, SEO optimization, AI integrations, business automation, IT consulting and digital transformation services for modern businesses.",
  alternates: {
    canonical: "https://ibeestudio.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#030306] pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[13px] text-white/30 hover:text-white/60 transition-colors mb-10 group"
            >
              <span className="group-hover:-translate-x-0.5 transition-transform duration-200">
                ←
              </span>
              Back to home
            </Link>

            <p className="text-accent-light text-[11px] tracking-[0.22em] uppercase font-medium mb-5">
              Services
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-2xl mb-6">
              What we build
              <br />
              <span className="gradient-text">and how we help.</span>
            </h1>
            <p className="text-white/40 text-[16px] max-w-lg leading-relaxed">
              We offer a focused set of digital services — each one designed to
              deliver measurable business value, not just deliverables.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group glass-card rounded-2xl p-7 border-glow transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="text-[11px] font-mono text-accent-light/60">
                    {service.number}
                  </span>
                </div>
                <h2 className="text-[17px] font-semibold text-white mb-3 group-hover:text-accent-light transition-colors duration-200">
                  {service.title}
                </h2>
                <p className="text-[14px] text-white/40 leading-relaxed flex-1 mb-5">
                  {service.shortDescription}
                </p>
                <span className="text-[13px] text-accent-light/60 group-hover:text-accent-light transition-colors duration-200">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center py-16 border-t border-white/[0.05]">
            <p className="text-white/40 text-[15px] mb-6">
              Not sure which service fits your needs?
            </p>
            <a
              href="mailto:info@ibeestudio.com"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-accent hover:bg-accent-light text-white font-medium text-[15px] transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.4)]"
            >
              Talk to us
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
