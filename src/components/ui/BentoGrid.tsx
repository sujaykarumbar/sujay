"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

export function BentoGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoItemProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
  delay?: number;
}

export function BentoItem({
  title,
  description,
  icon,
  className,
  delay = 0,
}: BentoItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "glass group spotlight shimmer relative overflow-hidden rounded-3xl p-6 md:p-7",
        "transition-all duration-500 hover:-translate-y-1",
        className
      )}
    >
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] text-violet-200 transition-all duration-500 group-hover:border-violet-400/30 group-hover:text-white group-hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.5)]">
          {icon}
        </div>
        <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-white/55">{description}</p>

        <div className="mt-auto pt-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="mt-3 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white/30 transition-colors duration-500 group-hover:text-violet-300">
            <span>Explore</span>
            <svg
              className="h-3 w-3 transition-transform duration-500 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
