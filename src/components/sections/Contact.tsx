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
      className="py-20 sm:py-28 md:py-32 px-6 bg-white"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-accent text-[11px] tracking-[0.22em] uppercase font-medium mb-5"
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
              className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-6"
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
              className="text-[#475569] text-[15px] leading-relaxed mb-12 max-w-sm"
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
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                    <Mail size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#94A3B8] tracking-wide mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-[15px] text-[#475569] group-hover:text-[#0F172A] transition-colors duration-200 font-medium">
                      {item.value}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-[#CBD5E1] group-hover:text-accent ml-auto transition-colors duration-200"
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
            <p className="text-[13px] text-[#64748B] mb-6 leading-relaxed">
              What are you working on? Select a topic and we&apos;ll tailor our
              response to your needs.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-10">
              {topics.map((topic) => (
                <a
                  key={topic}
                  href={`mailto:info@ibeestudio.com?subject=${encodeURIComponent(topic)}`}
                  className="px-4 py-2 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] text-[13px] text-[#475569] hover:text-[#0F172A] hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 cursor-pointer"
                >
                  {topic}
                </a>
              ))}
            </div>

            <a
              href="mailto:info@ibeestudio.com"
              className="flex items-center justify-center gap-2.5 w-full py-4 rounded-xl bg-accent hover:bg-accent-light text-white font-medium text-[14px] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(37,99,235,0.3)] group"
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
