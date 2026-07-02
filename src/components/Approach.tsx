"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";
import { GradientText } from "@/components/ui/GradientText";

const steps = [
  {
    num: "01",
    title: "Identify",
    description:
      "Find a real problem worth solving. Talk to people, study the space, validate the idea before writing a line of code.",
    accent: "from-violet-500/30 to-fuchsia-500/30",
  },
  {
    num: "02",
    title: "Architect",
    description:
      "Design the system: tech stack, data flow, edge cases. Plan for scale and clarity from day one.",
    accent: "from-blue-500/30 to-cyan-500/30",
  },
  {
    num: "03",
    title: "Ship",
    description:
      "Build, test, and deploy. No endless planning. Get a working version into the world fast.",
    accent: "from-pink-500/30 to-rose-500/30",
  },
  {
    num: "04",
    title: "Iterate",
    description:
      "Measure feedback, fix what's broken, double down on what works. Loop until it feels inevitable.",
    accent: "from-emerald-500/30 to-teal-500/30",
  },
];

export default function Approach() {
  return (
    <section className="relative z-20 px-6 py-32 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white/40"
        >
          How I work
        </motion.h2>

        <h2 className="mb-16 max-w-3xl font-display text-4xl font-bold leading-tight text-white md:text-5xl">
          <TextReveal text="From problem to" />{" "}
          <GradientText from="#a78bfa" via="#818cf8" to="#3b82f6" animated>
            <TextReveal text="product." delay={0.15} />
          </GradientText>
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative"
            >
              <div
                className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-br ${s.accent} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-80`}
              />
              <div className="glass relative h-full overflow-hidden rounded-3xl p-6 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-white/20">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-xs text-white/40">
                    {s.num}
                  </span>
                  <div
                    className={`h-2 w-2 rounded-full bg-gradient-to-br ${s.accent}`}
                  />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
