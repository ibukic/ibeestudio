"use client";

import { motion } from "framer-motion";
import { Globe, Cpu, Compass } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const pillars = [
  {
    icon: Globe,
    title: "Digital Experiences",
    description:
      "Premium websites and digital products built for performance, conversion, and lasting impressions. Every pixel intentional.",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description:
      "Intelligent tools and automated workflows that eliminate repetitive work and give your team hours back every week.",
  },
  {
    icon: Compass,
    title: "Digital Consulting",
    description:
      "Strategic guidance for technology decisions, IT roadmap planning, and digital transformation — so you move forward with confidence.",
  },
];

export default function WhatWeDo() {
  return (
    <section
      className="py-20 sm:py-28 md:py-32 px-6 bg-[#08080f]"
      aria-labelledby="whatwedo-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-accent-light text-[11px] tracking-[0.22em] uppercase font-medium mb-5"
        >
          What we do
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
          <motion.h2
            id="whatwedo-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-lg"
          >
            Three pillars.
            <br />
            One complete digital partner.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-white/40 max-w-xs text-[15px] leading-relaxed"
          >
            We cover the full digital stack — strategy, execution, and ongoing
            optimization — so you never need to look elsewhere.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1 }}
                className="group bg-[#08080f] p-8 md:p-10 hover:bg-[#0e0e1a] transition-colors duration-500"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-7 group-hover:bg-accent/15 transition-colors duration-300">
                  <Icon size={18} className="text-accent-light" />
                </div>
                <h3 className="text-[17px] font-semibold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-white/45 leading-relaxed text-[15px]">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
