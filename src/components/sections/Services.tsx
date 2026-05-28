"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Search,
  Brain,
  Zap,
  LayoutGrid,
  Lightbulb,
  Server,
  RefreshCw,
  Wrench,
  CloudCog,
} from "lucide-react";
import { fadeUp } from "@/lib/animations";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Website Development",
    description:
      "Custom, high-performance websites built to convert. Clean code, fast load times, and design that works.",
  },
  {
    number: "02",
    icon: Search,
    title: "SEO Optimization",
    description:
      "Organic visibility that compounds over time. Technical SEO, on-page strategy, and performance tuning.",
  },
  {
    number: "03",
    icon: Brain,
    title: "AI Integration",
    description:
      "Smart AI tools embedded directly into your workflows — from customer service to internal operations.",
  },
  {
    number: "04",
    icon: Zap,
    title: "Process Automation",
    description:
      "Eliminate repetitive, time-consuming tasks with reliable automations built on modern platforms.",
  },
  {
    number: "05",
    icon: LayoutGrid,
    title: "Microsoft 365 & Cloud",
    description:
      "Modern productivity infrastructure, properly configured, secured, and optimized for your team size.",
  },
  {
    number: "06",
    icon: Lightbulb,
    title: "IT Consulting",
    description:
      "Strategic technology guidance aligned with your goals. No jargon — just clear, actionable direction.",
  },
  {
    number: "07",
    icon: Server,
    title: "Infrastructure Optimization",
    description:
      "Reliable, scalable, and cost-efficient IT systems. We audit, optimize, and future-proof your stack.",
  },
  {
    number: "08",
    icon: RefreshCw,
    title: "Digital Transformation",
    description:
      "End-to-end guidance through your digital evolution — from initial strategy to full implementation.",
  },
  {
    number: "09",
    icon: Wrench,
    title: "Custom Business Tools",
    description:
      "Internal tools built specifically for how your business actually works. Not generic. Not off-the-shelf.",
  },
  {
    number: "10",
    icon: CloudCog,
    title: "AI & Cloud Automation",
    description:
      "Intelligent automation powered by modern cloud technology — scalable, fast, and remarkably effective.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-[#030306]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-accent-light text-[11px] tracking-[0.22em] uppercase font-medium mb-5"
        >
          Services
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-md"
          >
            Everything you need.
            <br />
            <span className="gradient-text">Under one roof.</span>
          </motion.h2>

          <motion.a
            href="mailto:info@ibeestudio.com"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="inline-flex items-center gap-2 text-[14px] text-white/40 hover:text-white transition-colors duration-200 group shrink-0"
          >
            Discuss your project
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </motion.a>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: (i % 3) * 0.08 }}
                className="group glass-card rounded-2xl p-7 border-glow transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-9 h-9 rounded-lg bg-accent/[0.08] border border-accent/[0.15] flex items-center justify-center group-hover:bg-accent/[0.14] transition-colors duration-300">
                    <Icon size={16} className="text-accent-light" />
                  </div>
                  <span className="text-[11px] font-mono text-white/20">
                    {service.number}
                  </span>
                </div>
                <h3 className="text-[16px] font-semibold text-white mb-2.5">
                  {service.title}
                </h3>
                <p className="text-[14px] text-white/40 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
