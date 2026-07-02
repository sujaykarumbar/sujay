"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";
import { GradientText } from "@/components/ui/GradientText";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Mail, ArrowRight, MapPin } from "lucide-react";

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

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

const socials = [
  {
    label: "Email",
    value: "sujaykarkera5@gmail.com",
    href: "mailto:sujaykarkera5@gmail.com",
    icon: <Mail className="h-5 w-5" />,
  },
  {
    label: "Instagram",
    value: "@sujay.karkera",
    href: "https://www.instagram.com/sujay.karkera",
    icon: <Instagram className="h-5 w-5" />,
  },
  {
    label: "LinkedIn",
    value: "Sujay Karkera",
    href: "https://www.linkedin.com/in/sujay-karkera-376274379/",
    icon: <LinkedinIcon className="h-5 w-5" />,
  },
  {
    label: "GitHub",
    value: "@sujaykarumbar",
    href: "https://github.com/sujaykarumbar",
    icon: <GithubIcon className="h-5 w-5" />,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-20 px-6 py-32 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white/40"
        >
          Contact
        </motion.h2>

        <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
          <TextReveal text="Let's build" />{" "}
          <GradientText from="#a78bfa" via="#818cf8" to="#6366f1" animated>
            <TextReveal text="something." delay={0.1} />
          </GradientText>
        </h2>

        <p className="mt-6 max-w-xl text-base text-white/55 md:text-lg">
          <span className="inline-flex items-center gap-2 text-white/60">
            <MapPin className="h-4 w-4" />
            Based in India
          </span>
          <span className="mx-3 text-white/20">•</span>
          Open to collaborations, projects, and conversations.
        </p>

        {/* Big CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group relative mt-12 overflow-hidden rounded-3xl"
        >
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-violet-500/40 via-fuchsia-500/30 to-blue-500/40 opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
          <div className="glass-strong relative grid items-center gap-6 rounded-3xl p-8 md:grid-cols-[1.4fr_1fr] md:p-10">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-white/40">
                Start a project
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
                Have an idea? Let's make it real.
              </h3>
              <p className="mt-2 text-sm text-white/55 md:text-base">
                Web3, data, or product — I move fast and ship clean.
              </p>
            </div>
            <a
              href="mailto:sujaykarkera5@gmail.com"
              className="group/btn flex items-center justify-between gap-3 rounded-2xl bg-white px-5 py-4 text-base font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.5)]"
            >
              <span className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                Drop a mail
              </span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
            </a>
          </div>
        </motion.div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {socials.map((social, i) => {
            const openInNewTab = social.href.startsWith("http");
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target={openInNewTab ? "_blank" : undefined}
                rel={openInNewTab ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <SpotlightCard className="group flex items-center gap-4 px-5 py-4 sm:px-6 sm:py-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-white/50 transition-colors duration-300 group-hover:border-violet-400/30 group-hover:text-white">
                    {social.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/30 sm:text-xs">
                      {social.label}
                    </p>
                    <p className="mt-0.5 truncate text-sm font-medium text-white/80 sm:text-base">
                      {social.value}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-white/15 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white/50" />
                </SpotlightCard>
              </motion.a>
            );
          })}
        </div>

        <div className="mt-32 border-t border-white/[0.06] pt-8 text-center">
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} Sujay Karkera. Crafted with intent.
          </p>
        </div>
      </div>
    </section>
  );
}
