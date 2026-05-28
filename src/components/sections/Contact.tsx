"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const contactItems = [
  {
    label: "Email",
    value: "info@ibeestudio.com",
    href: "mailto:info@ibeestudio.com",
  },
];

const topics = [
  "Website development",
  "SEO optimization",
  "AI integration",
  "Business automation",
  "IT consulting",
  "Digital transformation",
  "Something else",
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-28 md:py-32 px-6 bg-[#030306]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-accent-light text-[11px] tracking-[0.22em] uppercase font-medium mb-5"
        >
          Contact
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              id="contact-heading"
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
            >
              Let&apos;s talk about
              <br />
              your next project.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.08 }}
              className="text-white/40 text-[15px] leading-relaxed mb-12 max-w-sm"
            >
              Whether you have a clear brief or just an idea — reach out. We
              respond to every inquiry and always give honest advice.
            </motion.p>

            {/* Contact links */}
            <div className="space-y-4">
              {contactItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: 0.12 + i * 0.08 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/[0.08] border border-accent/[0.15] flex items-center justify-center group-hover:bg-accent/[0.15] transition-colors duration-300">
                    <Mail size={16} className="text-accent-light" />
                  </div>
                  <div>
                    <p className="text-[11px] text-white/30 tracking-wide mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-[15px] text-white/70 group-hover:text-white transition-colors duration-200 font-medium">
                      {item.value}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-white/20 group-hover:text-accent-light ml-auto transition-colors duration-200"
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: topic chips */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.15 }}
            className="glass-card rounded-3xl p-8 md:p-10"
          >
            <p className="text-[13px] text-white/35 mb-6 leading-relaxed">
              What are you working on? Select a topic and we&apos;ll tailor our
              response to your needs.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-10">
              {topics.map((topic) => (
                <a
                  key={topic}
                  href={`mailto:info@ibeestudio.com?subject=${encodeURIComponent(topic)}`}
                  className="px-4 py-2 rounded-lg border border-white/[0.07] bg-white/[0.02] text-[13px] text-white/50 hover:text-white hover:border-accent/40 hover:bg-accent/[0.06] transition-all duration-200 cursor-pointer"
                >
                  {topic}
                </a>
              ))}
            </div>

            <a
              href="mailto:info@ibeestudio.com"
              className="flex items-center justify-center gap-2.5 w-full py-4 rounded-xl bg-accent hover:bg-accent-light text-white font-medium text-[14px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.35)] group"
            >
              Send a message
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
