"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay, ease },
  }),
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Ambient background blobs */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute -top-[200px] -left-[200px] w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 65%)",
            filter: "blur(80px)",
            animation: "float-slow 10s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -top-[100px] right-0 w-[550px] h-[550px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 65%)",
            filter: "blur(100px)",
            animation: "float-slow-alt 13s ease-in-out infinite 2s",
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
            filter: "blur(90px)",
            animation: "float-slow 15s ease-in-out infinite 5s",
          }}
        />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
            maskImage:
              "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-24">
        {/* Eyebrow badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.04] text-[13px] text-white/50 mb-10 tracking-wide"
        >
          <span
            className="w-[6px] h-[6px] rounded-full bg-accent-light"
            style={{ animation: "pulse-glow 2.5s ease-in-out infinite" }}
          />
          Web Design · SEO · AI Integrations · Automation
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[82px] font-bold leading-[1.06] tracking-tight mb-7"
        >
          <span className="text-white block">Modern digital</span>
          <span className="gradient-text block">solutions for businesses</span>
          <span className="text-white block">that mean it.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.25}
          className="text-[17px] md:text-lg text-white/45 max-w-xl mx-auto mb-12 leading-relaxed"
        >
          From premium web design and SEO to AI integrations and business
          automation — we build the digital solutions that move your business
          forward.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.38}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href="mailto:info@ibeestudio.com"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-accent hover:bg-accent-light text-white font-medium text-[15px] transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] group"
          >
            Start a project
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform duration-200"
            />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl border border-white/[0.09] text-white/60 hover:text-white hover:border-white/20 font-medium text-[15px] transition-all duration-300 hover:bg-white/[0.03]"
          >
            Explore services
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/20">
            scroll
          </span>
          <div className="w-px h-14 relative overflow-hidden">
            <div
              className="absolute top-0 w-full h-full bg-gradient-to-b from-white/25 to-transparent"
              style={{ animation: "scroll-down 1.8s ease-in-out infinite" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
