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

export const metadata: Metadata = {
  title: "ibee studio — Modern Digital & IT Solutions",
  description:
    "We design, build and automate the technology that drives your business forward. Websites, AI integration, automation and IT consulting for modern businesses.",
  keywords: [
    "web development",
    "AI integration",
    "business automation",
    "IT consulting",
    "digital transformation",
    "Microsoft 365",
    "SEO optimization",
  ],
  openGraph: {
    title: "ibee studio — Modern Digital & IT Solutions",
    description:
      "Modern digital solutions for businesses that mean it. Websites, AI, automation and IT consulting.",
    siteName: "ibee studio",
    type: "website",
  },
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
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
