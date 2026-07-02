"use client";

import { motion } from "framer-motion";

export function SectionDivider({ label }: { label?: string }) {
  return (
    <div className="relative my-4 flex items-center justify-center">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
      {label && (
        <span className="mx-4 font-mono text-[10px] uppercase tracking-[0.4em] text-white/30">
          {label}
        </span>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
    </div>
  );
}
