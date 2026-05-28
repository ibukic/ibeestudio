"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const hash = href.split("#")[1];
    if (pathname === "/") {
      // Already on homepage — smooth scroll to section
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // On a subpage — navigate to homepage with hash
      router.push(href);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 border-b border-white/[0.06] glass-nav"
            : "py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-0.5 group"
            aria-label="ibee studio home"
          >
            <span className="text-white font-semibold text-[17px] tracking-tight">
              ibee
            </span>
            <span
              className="w-[5px] h-[5px] rounded-full bg-accent-light mx-0.5 mt-[2px] group-hover:scale-125 transition-transform duration-300"
              aria-hidden="true"
            />
            <span className="text-white/50 font-light text-[17px] tracking-tight">
              studio
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9" aria-label="Main navigation">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-white/45 hover:text-white transition-colors duration-200 tracking-wide cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="mailto:info@ibeestudio.com"
            className="hidden md:inline-flex items-center gap-2 px-5 py-[9px] rounded-lg border border-white/10 text-[13px] text-white/60 hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 font-medium"
          >
            Get in touch
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-3 -mr-1 text-white/50 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <div className="w-5 flex flex-col gap-[5px]">
              <span
                className={`block h-px bg-current transition-all duration-300 origin-center ${
                  mobileOpen ? "rotate-45 translate-y-[8px]" : ""
                }`}
              />
              <span
                className={`block h-px bg-current transition-all duration-300 ${
                  mobileOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-px bg-current transition-all duration-300 origin-center ${
                  mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 glass-nav flex flex-col pt-24 px-8 pb-10"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-4 text-2xl font-medium text-white/70 hover:text-white border-b border-white/[0.06] transition-colors cursor-pointer"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
            <div className="mt-auto">
              <a
                href="mailto:info@ibeestudio.com"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center py-4 rounded-xl bg-accent text-white font-medium text-sm"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
