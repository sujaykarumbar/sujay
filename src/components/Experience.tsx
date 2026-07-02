"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";
import { GradientText } from "@/components/ui/GradientText";

const experiences = [
  {
    role: "Independent Developer",
    org: "Self-directed",
    period: "2024 — Present",
    description:
      "Building mobile apps, web tools, and AI experiments. Shipping real products to GitHub and learning in public.",
    tags: ["Flutter", "TypeScript", "Python", "Firebase"],
  },
  {
    role: "Project Lead",
    org: "Smart Driving Risk Monitoring System",
    period: "2026",
    description:
      "Designed and built a system to monitor driving behavior and surface risk signals — combined software with IoT-style data flows.",
    tags: ["Python", "Analytics", "IoT"],
  },
  {
    role: "Mobile App Developer",
    org: "Namma Bus",
    period: "2026",
    description:
      "Built a real-time bus tracking app with Flutter, Firebase, and Google Maps. Real-time sync via Cloud Firestore.",
    tags: ["Flutter", "Dart", "Firebase", "Google Maps"],
  },
];

export default function Experience() {
  return (
    <section className="relative z-20 px-6 py-32 md:px-12 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white/40"
        >
          Journey
        </motion.h2>

        <h2 className="mb-16 font-display text-4xl font-bold leading-tight text-white md:text-5xl">
          <TextReveal text="The path so" />{" "}
          <GradientText from="#a78bfa" via="#818cf8" to="#3b82f6" animated>
            <TextReveal text="far." delay={0.15} />
          </GradientText>
        </h2>

        <div className="relative space-y-8">
          {/* Vertical line */}
          <div className="absolute bottom-0 left-[19px] top-2 w-px bg-gradient-to-b from-violet-500/40 via-white/10 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative pl-14"
            >
              {/* Dot */}
              <div className="absolute left-0 top-1.5 flex h-10 w-10 items-center justify-center">
                <div className="absolute h-3 w-3 rounded-full bg-violet-500 shadow-[0_0_20px_4px_rgba(139,92,246,0.5)]" />
                <div className="absolute h-3 w-3 animate-ping rounded-full bg-violet-400" />
              </div>

              <div className="glass rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-lg font-semibold text-white md:text-xl">
                    {exp.role}
                  </h3>
                  <span className="text-white/30">·</span>
                  <span className="text-sm text-white/60">{exp.org}</span>
                  <span className="ml-auto rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-mono text-[10px] text-white/50">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-white/55 md:text-base">
                  {exp.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-white/55"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
