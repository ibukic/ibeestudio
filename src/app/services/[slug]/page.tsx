import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { services, getServiceBySlug } from "@/lib/services-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://ibeestudio.com/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://ibeestudio.com/services/${service.slug}`,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const currentIndex = services.findIndex((s) => s.slug === slug);
  const related = services.filter((_, i) => i !== currentIndex).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.longDescription,
    provider: {
      "@type": "ProfessionalService",
      name: "ibee studio",
      url: "https://ibeestudio.com",
    },
    url: `https://ibeestudio.com/services/${service.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main className="min-h-screen bg-[#030306] pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[13px] text-white/25 mb-12" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/50 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white/50 transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-white/50">{service.title}</span>
          </nav>

          {/* Header */}
          <div className="mb-16">
            <p className="text-accent-light text-[11px] tracking-[0.22em] uppercase font-medium mb-5">
              {service.number} — Service
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-7">
              {service.title}
            </h1>
            <p className="text-[17px] md:text-lg text-white/50 max-w-2xl leading-relaxed">
              {service.longDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-20">
            {/* Features */}
            <div>
              <h2 className="text-[13px] tracking-[0.18em] uppercase text-white/30 mb-7 font-medium">
                What&apos;s included
              </h2>
              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-light mt-2 shrink-0" />
                    <span className="text-[15px] text-white/60 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA card */}
            <div className="glass-card rounded-3xl p-8 md:p-10 flex flex-col justify-between gap-8">
              <div>
                <h2 className="text-[20px] font-semibold text-white mb-3">
                  Ready to get started?
                </h2>
                <p className="text-[14px] text-white/40 leading-relaxed">
                  Tell us about your project. We&apos;ll respond within one
                  business day with an honest assessment and a clear path
                  forward.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:info@ibeestudio.com?subject=${encodeURIComponent(service.title)}`}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-accent hover:bg-accent-light text-white font-medium text-[14px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.35)]"
                >
                  Start with {service.title}
                </a>
                <Link
                  href="/services"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border border-white/[0.08] text-white/50 hover:text-white hover:border-white/20 font-medium text-[14px] transition-all duration-300"
                >
                  View all services
                </Link>
              </div>
            </div>
          </div>

          {/* Related services */}
          {related.length > 0 && (
            <div className="border-t border-white/[0.05] pt-16">
              <p className="text-[13px] tracking-[0.18em] uppercase text-white/25 mb-8 font-medium">
                Other services
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {related.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group glass-card rounded-xl p-5 border-glow transition-all duration-300"
                  >
                    <p className="text-[11px] font-mono text-white/20 mb-2">
                      {s.number}
                    </p>
                    <h3 className="text-[15px] font-semibold text-white mb-1.5 group-hover:text-accent-light transition-colors duration-200">
                      {s.title}
                    </h3>
                    <p className="text-[13px] text-white/35 leading-snug">
                      {s.shortDescription.split(".")[0]}.
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
