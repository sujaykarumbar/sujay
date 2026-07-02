"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { TextReveal } from "@/components/ui/TextReveal";
import { BlurText } from "@/components/ui/BlurText";
import { GradientText } from "@/components/ui/GradientText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowRight, Mail } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554V14.84c0-1.337-.026-3.058-1.865-3.058-1.867 0-2.153 1.459-2.153 2.965v5.705H9.322V9h3.414v1.561h.049c.476-.9 1.637-1.848 3.37-1.848 3.602 0 4.267 2.372 4.267 5.455v6.284zM5.337 7.433a2.065 2.065 0 110-4.13 2.065 2.065 0 010 4.13zM6.965 20.452H3.707V9h3.258v11.452z" />
  </svg>
);

const roles = [
  "Web Developer",
  "Flutter Developer",
  "Data Enthusiast",
  "AI Tinkerer",
  "Problem Solver",
];

const techMarquee = [
  "TypeScript",
  "Dart",
  "Python",
  "Flutter",
  "Firebase",
  "Google Cloud",
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "HTML",
  "CSS",
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  // 3D tilt on image card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [10, -10]), {
    stiffness: 220,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-10, 10]), {
    stiffness: 220,
    damping: 18,
  });
  const glareX = useTransform(mouseX, [-200, 200], [0, 100]);
  const glareY = useTransform(mouseY, [-200, 200], [0, 100]);

  const onCardMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const onCardLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="top"
      ref={ref}
      className="relative z-10 flex min-h-screen items-center px-6 pt-32 md:px-12 lg:px-20"
    >
      <motion.div
        style={{ y, opacity, scale }}
        className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center"
      >
        {/* Left: Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-1.5 text-xs text-emerald-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to opportunities
          </motion.div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            <TextReveal text="Engineer." delay={0.2} />
            <br />
            <TextReveal text="Builder." delay={0.35} />
            <br />
            <GradientText from="#c4b5fd" via="#a78bfa" to="#60a5fa" animated>
              <TextReveal text="Executor." delay={0.5} />
            </GradientText>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-8 max-w-xl"
          >
            <p className="text-pretty text-base leading-relaxed text-white/65 md:text-lg">
              <BlurText
                text="I'm Sujay — a developer building real-world software across web, mobile, and AI. I love shipping clean products, exploring data, and experimenting with new tech."
                delay={0}
              />
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-6 flex flex-wrap items-center gap-2 text-sm"
          >
            <span className="text-white/40">I build as a</span>
            <span className="inline-flex h-7 overflow-hidden rounded-full border border-white/10 bg-white/[0.04] px-3 text-violet-200">
              <motion.span
                animate={{ y: ["0%", "-100%", "0%"] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                }}
                className="flex flex-col"
              >
                {[...roles, ...roles].map((r, i) => (
                  <span key={i} className="flex h-7 items-center font-medium">
                    {r}
                  </span>
                ))}
              </motion.span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="#projects"
              className="gradient-animated text-white shadow-[0_20px_50px_-15px_rgba(139,92,246,0.6)]"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08]"
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="mt-8 flex items-center gap-3"
          >
            {[
              { icon: <GithubIcon className="h-4 w-4" />, href: "https://github.com/sujaykarumbar" },
              { icon: <LinkedinIcon className="h-4 w-4" />, href: "https://www.linkedin.com/in/sujay-karkera-376274379/" },
              { icon: <Mail className="h-4 w-4" />, href: "mailto:sujaykarkera5@gmail.com" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-300 hover:scale-110 hover:border-violet-400/40 hover:text-white hover:shadow-[0_0_20px_-5px_rgba(139,92,246,0.6)]"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: Portrait card with 3D tilt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
          style={{ perspective: 1000 }}
        >
          <div className="absolute -inset-6 animate-spin-slow">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/40 via-transparent to-pink-500/40 blur-2xl" />
          </div>

          <motion.div
            ref={cardRef}
            onMouseMove={onCardMove}
            onMouseLeave={onCardLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="glass-strong relative overflow-hidden rounded-[2rem] p-2"
          >
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]"
              style={{ transform: "translateZ(20px)" }}
            >
              <div className="absolute -inset-1 rounded-[1.6rem] bg-gradient-to-br from-violet-500/30 via-fuchsia-500/20 to-blue-500/30 blur-2xl" />
              <div
                className="relative h-full w-full rounded-[1.6rem] bg-cover bg-center bg-neutral-900"
                style={{
                  backgroundImage: "url('/images/frame_000_delay-0.041s.png')",
                }}
              />
              <div className="absolute inset-0 rounded-[1.6rem] bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Glare layer */}
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-[1.6rem] opacity-40"
                style={{
                  background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.25), transparent 40%)`,
                }}
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/[0.08] py-3 backdrop-blur-xl"
                style={{ transform: "translateZ(40px)" }}
              >
                <p className="font-display text-base font-semibold tracking-wide text-white sm:text-lg">
                  Sujay Karkera
                </p>
              </motion.div>
            </div>

          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom tech marquee */}
      <div className="absolute bottom-12 left-0 right-0 overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-12 px-6">
          {[...techMarquee, ...techMarquee, ...techMarquee].map((t, i) => (
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/30">
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px bg-gradient-to-b from-white/40 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
