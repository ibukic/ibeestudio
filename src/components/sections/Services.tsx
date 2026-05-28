"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  Search,
  Brain,
  Zap,
  Lightbulb,
  RefreshCw,
  Wrench,
  CloudCog,
  type LucideIcon,
} from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { services } from "@/lib/services-data";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Search,
  Brain,
  Zap,
  Lightbulb,
  RefreshCw,
  Wrench,
  CloudCog,
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 sm:py-28 md:py-32 px-6 bg-[#030306]"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-accent-light text-[11px] tracking-[0.22em] uppercase font-medium mb-5"
        >
          Services
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
          <motion.h2
            id="services-heading"
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

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex items-center gap-4"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[14px] text-white/40 hover:text-white transition-colors duration-200 group"
            >
              View all services
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </Link>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.iconName];
            return (
              <motion.div
                key={service.slug}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: (i % 3) * 0.07 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group glass-card rounded-2xl p-6 md:p-7 border-glow transition-all duration-300 flex flex-col h-full"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-9 h-9 rounded-lg bg-accent/[0.08] border border-accent/[0.15] flex items-center justify-center group-hover:bg-accent/[0.14] transition-colors duration-300">
                      {Icon && <Icon size={16} className="text-accent-light" />}
                    </div>
                    <span className="text-[11px] font-mono text-white/20">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="text-[16px] font-semibold text-white mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-[14px] text-white/40 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
