"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed left-0 right-0 top-0 z-50 flex justify-center px-4 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <nav
        className={cn(
          "flex items-center gap-1 rounded-full border px-2 py-2 transition-all duration-500",
          scrolled
            ? "glass-strong border-white/10"
            : "border-white/5 bg-white/[0.02] backdrop-blur-md"
        )}
      >
        <a
          href="#top"
          className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold text-white"
        >
          <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-[11px] font-bold">
            SK
            <span className="absolute inset-0 rounded-full pulse-ring bg-violet-500/40" />
          </span>
          <span className="hidden sm:inline">Sujay</span>
        </a>

        <div className="mx-1 hidden h-5 w-px bg-white/10 md:block" />

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300",
                  active === l.href.replace("#", "")
                    ? "text-white"
                    : "text-white/50 hover:text-white/90"
                )}
              >
                {active === l.href.replace("#", "") && (
                  <motion.span
                    layoutId="navpill"
                    className="absolute inset-0 -z-10 rounded-full bg-white/10"
                    transition={{ type: "spring", stiffness: 320, damping: 28 }}
                  />
                )}
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="ml-1 hidden rounded-full bg-white px-4 py-1.5 text-sm font-medium text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.5)] md:inline-flex"
        >
          Hire Me
        </a>

        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="ml-1 flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/80 md:hidden"
          aria-label="Menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={cn(
                "h-0.5 w-4 bg-current transition-all duration-300",
                mobileOpen && "translate-y-2 rotate-45"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-4 bg-current transition-all duration-300",
                mobileOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-4 bg-current transition-all duration-300",
                mobileOpen && "-translate-y-2 -rotate-45"
              )}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 w-[90%] max-w-sm rounded-2xl glass-strong p-2 md:hidden"
          >
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-1 block rounded-xl bg-white px-4 py-3 text-center text-sm font-medium text-black"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
