"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";
import { GradientText } from "@/components/ui/GradientText";
import { ExternalLink } from "lucide-react";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

type ProjectCategory = "Web" | "Mobile" | "AI" | "Data";

interface Project {
  title: string;
  description: string;
  category: ProjectCategory;
  tech: string[];
  github: string;
  accent: string;
  pinned?: boolean;
}

const projects: Project[] = [
  {
    title: "Namma Bus",
    description:
      "Real-time bus tracking and management mobile app built with Flutter. Live location updates via Cloud Firestore, interactive Google Maps, Firebase Auth, and cross-platform support for Android & iOS.",
    category: "Mobile",
    tech: ["Flutter", "Dart", "Firebase", "Cloud Firestore", "Google Maps"],
    github: "https://github.com/sujaykarumbar/Namma-bus",
    accent: "from-blue-500/40 to-cyan-500/40",
    pinned: true,
  },
  {
    title: "CampusFind",
    description:
      "Campus-focused discovery platform — helps students find people, places, and resources around their college. Built as a web app with a clean, fast HTML/CSS frontend.",
    category: "Web",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sujaykarumbar/campusFind",
    accent: "from-violet-500/40 to-fuchsia-500/40",
    pinned: true,
  },
  {
    title: "Datalens",
    description:
      "Data analysis web app that turns raw datasets into clear, visual insights. Lightweight HTML interface focused on making data approachable.",
    category: "Data",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sujaykarumbar/Datalens",
    accent: "from-emerald-500/40 to-teal-500/40",
  },
  {
    title: "DataAnalyzer",
    description:
      "Companion data tool for exploring, cleaning, and visualizing data — built as a web app to make analysis accessible from the browser.",
    category: "Data",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sujaykarumbar/DataAnalyzer",
    accent: "from-pink-500/40 to-rose-500/40",
    pinned: true,
  },
  {
    title: "Smart Driving Risk Monitoring System",
    description:
      "System that monitors driving behavior and surfaces risk signals in real time — a data + ML-flavored project aimed at safer roads.",
    category: "AI",
    tech: ["Python", "IoT", "Analytics"],
    github: "https://github.com/sujaykarumbar/smart-driving-risk-monitoring-system",
    accent: "from-amber-500/40 to-orange-500/40",
    pinned: true,
  },
  {
    title: "Smart Driving App — Website",
    description:
      "Marketing/informational website for the Smart Driving App — built with Dart to keep the stack consistent with the mobile app ecosystem.",
    category: "Mobile",
    tech: ["Dart", "Flutter Web"],
    github: "https://github.com/sujaykarumbar/smart-driving-app-website",
    accent: "from-indigo-500/40 to-violet-500/40",
    pinned: true,
  },
  {
    title: "SafeRoute",
    description:
      "Routing-focused project aimed at suggesting safer paths — TypeScript codebase exploring safer navigation logic.",
    category: "Web",
    tech: ["TypeScript"],
    github: "https://github.com/sujaykarumbar/saferoute",
    accent: "from-teal-500/40 to-cyan-500/40",
  },
  {
    title: "Puttur City",
    description:
      "Hyperlocal web project themed around Puttur — a TypeScript codebase exploring city-style information surfaces.",
    category: "Web",
    tech: ["TypeScript"],
    github: "https://github.com/sujaykarumbar/puttur-city",
    accent: "from-rose-500/40 to-pink-500/40",
    pinned: true,
  },
  {
    title: "Jarvis",
    description:
      "Python-based virtual assistant / automation bot — personal AI project focused on hands-free task execution.",
    category: "AI",
    tech: ["Python"],
    github: "https://github.com/sujaykarumbar/Jarvis",
    accent: "from-violet-500/40 to-indigo-500/40",
  },
  {
    title: "Voice AI",
    description:
      "Python project exploring voice-driven AI interactions — speech recognition and natural language workflows.",
    category: "AI",
    tech: ["Python"],
    github: "https://github.com/sujaykarumbar/voice-ai",
    accent: "from-sky-500/40 to-blue-500/40",
  },
];

const filters: ("All" | ProjectCategory)[] = [
  "All",
  "Web",
  "Mobile",
  "AI",
  "Data",
];

export default function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      id="projects"
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
          Selected Work
        </motion.h2>

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
            <TextReveal text="Things I've" />{" "}
            <GradientText from="#a78bfa" via="#818cf8" to="#3b82f6" animated>
              <TextReveal text="built." delay={0.15} />
            </GradientText>
          </h2>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className="relative rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-white/60 transition-all duration-300 hover:border-white/20 hover:text-white"
              >
                {active === f && (
                  <motion.span
                    layoutId="filterpill"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-violet-500/30 to-blue-500/30"
                    transition={{ type: "spring", stiffness: 320, damping: 28 }}
                  />
                )}
                <span className="relative">{f}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((p, i) => (
            <motion.a
              key={p.title}
              layout
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.04 }}
              className="group relative block"
            >
              <div
                className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-br ${p.accent} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60`}
              />

              <div className="glass relative h-full overflow-hidden rounded-3xl p-6 transition-all duration-500 group-hover:-translate-y-1.5 group-hover:border-white/15">
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${p.accent} text-white shadow-inner`}
                  >
                    <Github className="h-5 w-5" />
                  </div>
                  {p.pinned && (
                    <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-violet-300">
                      Pinned
                    </span>
                  )}
                </div>

                <h3 className="font-display text-xl font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-white/55">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-white/55"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4">
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
                    {p.category}
                  </span>
                  <div className="flex items-center gap-2 text-white/50 transition-colors duration-300 group-hover:text-white">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all group-hover:border-white/20">
                      <Github className="h-3.5 w-3.5" />
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all group-hover:border-white/20">
                      <ExternalLink className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/sujaykarumbar?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white/80 transition-all duration-300 hover:scale-105 hover:border-violet-400/40 hover:text-white hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.5)]"
          >
            <Github className="h-4 w-4" />
            View all 15 repositories on GitHub
            <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
