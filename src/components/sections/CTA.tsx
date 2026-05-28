"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";

export default function CTA() {
  return (
    <section className="py-20 sm:py-28 md:py-32 px-6 bg-[#EFF6FF] relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-accent text-[11px] tracking-[0.22em] uppercase font-medium mb-6"
        >
          Ready to get started
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
        >
          <span className="text-[#0F172A]">Let&apos;s build something</span>
          <br />
          <span className="gradient-text">worth building.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.1 }}
          className="text-[#475569] text-[16px] max-w-lg mx-auto mb-12 leading-relaxed"
        >
          Tell us about your project. We&apos;ll respond within one business
          day with a clear plan and honest assessment.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.18 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href="mailto:info@ibeestudio.com"
            className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-xl bg-accent hover:bg-accent-light text-white font-medium text-[15px] transition-all duration-300 hover:shadow-[0_4px_24px_rgba(37,99,235,0.35)] group"
          >
            Start a project
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform duration-200"
            />
          </a>
          <a
            href="mailto:info@ibeestudio.com"
            className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl border border-[#BFDBFE] text-[#475569] hover:text-[#0F172A] hover:border-[#93C5FD] hover:bg-white font-medium text-[15px] transition-all duration-300"
          >
            info@ibeestudio.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
