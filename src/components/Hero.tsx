"use client";

import { ArrowRight, Mail } from "lucide-react";

const roles = [
  "Web Developer",
  "Flutter Developer",
  "Data Enthusiast",
  "AI Tinkerer",
  "Problem Solver",
];

const techs = [
  "Google Cloud",
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "HTML",
  "CSS",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative z-10 flex min-h-screen items-center px-6 pt-32 md:px-12 lg:px-20"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-1.5 text-xs text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to opportunities
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            <span className="block">Engineer.</span>
            <span className="block">Builder.</span>
            <span className="block bg-gradient-to-r from-[#c4b5fd] via-[#a78bfa] to-[#60a5fa] bg-clip-text text-transparent">
              Executor.
            </span>
          </h1>

          <div className="mt-8 max-w-xl">
            <p className="text-pretty text-base leading-relaxed text-white/65 md:text-lg">
              I&apos;m Sujay — a developer building real-world software across web, mobile, and AI. I love shipping clean products, exploring data, and experimenting with new tech.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
            <span className="text-white/40">I build as a</span>
            <span className="inline-flex h-7 items-center overflow-hidden rounded-full border border-white/10 bg-white/[0.04] px-3 text-violet-200">
              {roles[0]}
            </span>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="gradient-animated inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white shadow-[0_20px_50px_-15px_rgba(139,92,246,0.6)]"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white"
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 animate-spin-slow">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/40 via-transparent to-pink-500/40 blur-2xl" />
          </div>

          <div className="glass-strong relative overflow-hidden rounded-[2rem] p-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
              <div className="absolute -inset-1 rounded-[1.6rem] bg-gradient-to-br from-violet-500/30 via-fuchsia-500/20 to-blue-500/30 blur-2xl" />
              <div
                className="relative h-full w-full rounded-[1.6rem] bg-cover bg-center bg-neutral-900"
                style={{
                  backgroundImage: "url('/images/frame_000_delay-0.041s.png')",
                }}
              />
              <div className="absolute inset-0 rounded-[1.6rem] bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center rounded-2xl border border-white/15 bg-white/[0.08] py-3 backdrop-blur-xl">
                <p className="font-display text-base font-semibold tracking-wide text-white sm:text-lg">
                  Sujay Karkera
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 overflow-hidden">
        <div className="flex w-max items-center gap-12 px-6 md:animate-marquee">
          {[...techs, ...techs, ...techs].map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-12 whitespace-nowrap font-display text-2xl font-bold text-white/15"
            >
              {t}
              <span className="text-violet-500/40">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/30">
          <span>Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
