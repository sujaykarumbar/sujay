"use client";

import { motion } from "framer-motion";
import { BentoGrid, BentoItem } from "@/components/ui/BentoGrid";
import { TextReveal } from "@/components/ui/TextReveal";
import { GradientText } from "@/components/ui/GradientText";
import {
  BarChart3,
  Coins,
  Cpu,
  Rocket,
  PenTool,
  TrendingUp,
} from "lucide-react";

const skills = [
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps with Flutter & Dart — real-time tracking, auth, maps, and smooth UX for Android & iOS.",
    icon: <Rocket className="h-5 w-5" />,
    span: "lg:col-span-2",
  },
  {
    title: "Web Development",
    description:
      "Modern web apps with TypeScript, HTML/CSS, and JavaScript — fast, responsive, and accessible.",
    icon: <Cpu className="h-5 w-5" />,
  },
  {
    title: "Data & Analytics",
    description:
      "Turning raw data into insights with Python, dashboards, and analysis tools built for the browser.",
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    title: "AI & Voice",
    description:
      "Experimenting with voice-driven AI, virtual assistants, and Python-based ML prototypes.",
    icon: <Coins className="h-5 w-5" />,
  },
  {
    title: "UI/UX & Design",
    description:
      "Clean, intuitive interfaces with attention to motion, hierarchy, and detail. Glassmorphism, gradients, micro-interactions.",
    icon: <PenTool className="h-5 w-5" />,
    span: "lg:col-span-2",
  },
  {
    title: "Backend & Cloud",
    description:
      "Firebase, Cloud Firestore, Google Cloud Platform, REST APIs, and real-time data sync.",
    icon: <TrendingUp className="h-5 w-5" />,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative z-20 px-6 py-32 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white/40"
        >
          Expertise
        </motion.h2>
        <h2 className="mb-16 font-display text-4xl font-bold text-white md:text-5xl">
          <TextReveal text="Skills &" />{" "}
          <GradientText from="#a78bfa" via="#818cf8" to="#3b82f6" animated>
            <TextReveal text="Capabilities" delay={0.15} />
          </GradientText>
        </h2>

        <BentoGrid>
          {skills.map((skill, i) => (
            <BentoItem
              key={skill.title}
              title={skill.title}
              description={skill.description}
              icon={skill.icon}
              className={skill.span}
              delay={i * 0.05}
            />
          ))}
        </BentoGrid>

        {/* Tech stack marquee */}
        <div className="mt-20">
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.3em] text-white/30">
            Tech I work with
          </p>
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] py-6">
            <div className="absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#07030f] to-transparent" />
            <div className="absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#07030f] to-transparent" />
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex w-max items-center gap-12 px-6"
            >
              {[...techStack, ...techStack].map((t, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap font-display text-2xl font-semibold text-white/30 transition-colors hover:text-white"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

const techStack = [
  "TypeScript",
  "Dart",
  "Python",
  "HTML",
  "Flutter",
  "Firebase",
  "Google Cloud",
  "Firestore",
  "React",
  "Tailwind",
  "Framer Motion",
  "Node.js",
];
