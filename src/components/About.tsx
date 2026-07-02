"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";
import { BlurText } from "@/components/ui/BlurText";
import { GradientText } from "@/components/ui/GradientText";
import { CountUp } from "@/components/ui/CountUp";

const stats = [
  { label: "Public Repos", value: 15, suffix: "" },
  { label: "Projects Shipped", value: 10, suffix: "+" },
  { label: "Languages Used", value: 4, suffix: "" },
  { label: "Domains Covered", value: 5, suffix: "" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative z-20 px-6 py-32 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white/40"
            >
              About
            </motion.h2>
            <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
              <TextReveal text="Engineer. Builder." />
              <br />
              <GradientText from="#a78bfa" via="#818cf8" to="#60a5fa" animated>
                <TextReveal text="Executor." delay={0.1} />
              </GradientText>
            </h2>
          </div>

          <div className="space-y-6 text-base leading-relaxed text-white/65 md:text-lg">
            <p className="text-pretty">
              <BlurText
                text="I'm Sujay — a developer who loves building software that solves real problems. I work across web, mobile, and AI, with hands-on experience in TypeScript, Dart/Flutter, and Python."
                delay={0.2}
              />
            </p>
            <p className="text-pretty">
              <BlurText
                text="My recent work includes Namma Bus — a real-time bus tracking app built with Flutter and Firebase — along with campus tools, data analysis dashboards, voice-AI experiments, and smart-driving risk monitoring systems."
                delay={0.4}
              />
            </p>
            <p className="text-pretty">
              <BlurText
                text="I learn by building, ship fast, and keep the code clean. Always curious, always iterating — currently exploring more in AI, automation, and data."
                delay={0.6}
              />
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass group relative overflow-hidden rounded-2xl p-5 transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/30 sm:p-6"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-violet-500/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <p className="font-display text-4xl font-bold text-white sm:text-5xl">
                <CountUp end={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wider text-white/40 sm:text-sm">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
