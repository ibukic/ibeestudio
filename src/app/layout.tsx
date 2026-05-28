import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://ibeestudio.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ibee studio | Web Design, SEO & AI Solutions",
    template: "%s | ibee studio",
  },
  description:
    "Premium web design, SEO optimization, AI integrations and business automation for modern businesses. Digital solutions that actually move the needle.",
  keywords: [
    "web design",
    "website development",
    "SEO optimization",
    "AI integration",
    "business automation",
    "digital consulting",
    "digital transformation",
    "custom business tools",
    "IT consulting",
  ],
  authors: [{ name: "ibee studio", url: siteUrl }],
  creator: "ibee studio",
  publisher: "ibee studio",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "ibee studio | Web Design, SEO & AI Solutions",
    description:
      "Premium web design, SEO optimization, AI integrations and business automation for modern businesses.",
    url: siteUrl,
    siteName: "ibee studio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ibee studio | Web Design, SEO & AI Solutions",
    description:
      "Premium web design, SEO optimization, AI integrations and business automation for modern businesses.",
    creator: "@ibeestudio",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ibee studio",
  url: siteUrl,
  email: "info@ibeestudio.com",
  description:
    "Premium web design, SEO optimization, AI integrations and business automation for modern businesses.",
  serviceType: [
    "Web Design",
    "Website Development",
    "SEO Optimization",
    "AI Integration",
    "Business Process Automation",
    "IT Consulting",
    "Digital Transformation",
    "Custom Business Tools",
  ],
  areaServed: "Worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
