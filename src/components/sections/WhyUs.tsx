"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const reasons = [
  {
    title: "Direct and focused",
    description:
      "You work with us directly, not a rotating team of juniors. Faster decisions, cleaner output, zero bureaucracy.",
  },
  {
    title: "Modern by default",
    description:
      "We use current tools and best practices. Your solution won't be outdated the moment it launches.",
  },
  {
    title: "Business-first thinking",
    description:
      "Every technical decision is made with your business outcome in mind. Technology is a means, not an end.",
  },
  {
    title: "Full-spectrum capability",
    description:
      "Strategy, design, development, automation. One partner, complete coverage, no gaps.",
  },
];

const stats = [
  { value: "10+", label: "Services covered" },
  { value: "100%", label: "Focus on your outcome" },
  { value: "0", label: "Unnecessary complexity" },
];

export default function WhyUs() {
  return (
    <section className="py-32 px-6 bg-[#08080f]">
      <div className="max-w-6xl mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-accent-light text-[11px] tracking-[0.22em] uppercase font-medium mb-5"
        >
          Why work with us
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: headline + reasons */}
          <div>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-14"
            >
              The difference is
              <br />
              in the details.
            </motion.h2>

            <div className="space-y-8">
              {reasons.map((reason, i) => (
                <motion.div
                  key={reason.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/10 border border-accent/25 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-accent-light" />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-white mb-1.5">
                      {reason.title}
                    </h3>
                    <p className="text-[14px] text-white/45 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: visual + stats */}
          <div className="flex flex-col gap-8">
            {/* Decorative card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="glass-card rounded-3xl p-10 relative overflow-hidden"
            >
              {/* Glow */}
              <div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
                aria-hidden="true"
              />
              <p className="text-[15px] text-white/50 leading-relaxed mb-6 relative z-10">
                &ldquo;We approach every project as a long-term business
                partnership. The goal isn&apos;t to deliver code — it&apos;s to
                deliver results that compound over time.&rdquo;
              </p>
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                  <span className="text-[11px] font-semibold text-accent-light">
                    ib
                  </span>
                </div>
                <div>
                  <p className="text-[13px] font-medium text-white">
                    ibee studio
                  </p>
                  <p className="text-[12px] text-white/35">
                    info@ibeestudio.com
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="glass-card rounded-2xl p-5 text-center"
                >
                  <div className="text-2xl font-bold gradient-text-brand mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-white/35 leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
