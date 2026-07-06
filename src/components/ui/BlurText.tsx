"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/utils/cn";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  once?: boolean;
}

export function BlurText({
  text,
  className,
  delay = 0,
  staggerChildren = 0.012,
  once = true,
}: BlurTextProps) {
  const letters = Array.from(text);
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <span className={cn("inline-block", className)} aria-label={text}>
        {text}
      </span>
    );
  }

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      transition={{ staggerChildren, delayChildren: delay }}
      className={cn("inline-block", className)}
      aria-label={text}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, filter: "blur(8px)", y: 6 },
            visible: {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
              transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className="inline-block whitespace-pre"
          style={{ willChange: "filter, transform, opacity" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
