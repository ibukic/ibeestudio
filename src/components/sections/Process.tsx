"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const steps = [
  {
    step: "01",
    title: "Discover",
    description:
      "We start by understanding your business — goals, constraints, existing systems, and the outcome you actually need.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We define the right solution together: scope, technical approach, timeline, and success criteria. No surprises.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Precise, clean implementation with transparent progress. You always know where things stand.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "Thorough deployment with careful testing. We don't ship until it's ready — and then we make it smooth.",
  },
  {
    step: "05",
    title: "Optimize",
    description:
      "Post-launch analysis, fine-tuning, and ongoing support as your business grows and requirements evolve.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="py-20 sm:py-28 md:py-32 px-6 bg-[#030306]"
      aria-labelledby="process-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-accent-light text-[11px] tracking-[0.22em] uppercase font-medium mb-5"
        >
          How we work
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            id="process-heading"
            className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-md"
          >
            A process built
            <br />
            <span className="gradient-text">for clarity and results.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-white/35 max-w-xs text-[14px] leading-relaxed"
          >
            Every engagement follows a structured process that keeps work
            focused, communication clear, and outcomes predictable.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div
            className="hidden lg:block absolute left-[39px] top-6 bottom-6 w-px bg-gradient-to-b from-accent/30 via-accent/10 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08 }}
                className="group flex gap-8 items-start glass-card rounded-2xl p-7 border-glow transition-all duration-300"
              >
                {/* Step number badge */}
                <div className="shrink-0 w-8 h-8 rounded-full bg-accent/[0.09] border border-accent/[0.2] flex items-center justify-center group-hover:bg-accent/[0.16] transition-colors duration-300">
                  <span className="text-[11px] font-semibold font-mono text-accent-light">
                    {step.step}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start sm:gap-16 flex-1">
                  <h3 className="text-[17px] font-semibold text-white min-w-[120px] mb-2 sm:mb-0">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-white/45 leading-relaxed flex-1">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
