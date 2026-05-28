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
      className="py-20 sm:py-28 md:py-32 px-6 bg-[#F8FAFC]"
      aria-labelledby="whatwedo-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-accent text-[11px] tracking-[0.22em] uppercase font-medium mb-5"
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
            className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight max-w-lg"
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
            className="text-[#64748B] max-w-xs text-[15px] leading-relaxed"
          >
            We cover the full digital stack — strategy, execution, and ongoing
            optimization — so you never need to look elsewhere.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-[#E2E8F0] rounded-2xl overflow-hidden">
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
                className="group bg-white p-8 md:p-10 hover:bg-[#F0F9FF] transition-colors duration-500"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center mb-7 group-hover:bg-blue-100 transition-colors duration-300">
                  <Icon size={18} className="text-accent" />
                </div>
                <h3 className="text-[17px] font-semibold text-[#0F172A] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-[#475569] leading-relaxed text-[15px]">
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
