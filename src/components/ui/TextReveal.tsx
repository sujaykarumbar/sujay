"use client";

import { motion, type Variants, useReducedMotion } from "framer-motion";
import { useMobileOptimization } from "@/hooks/use-mobile-optimization";
import { cn } from "@/utils/cn";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  once?: boolean;
}

export function TextReveal({
  text,
  className,
  delay = 0,
  staggerChildren = 0.03,
  once = true,
}: TextRevealProps) {
  const words = text.split(" ");
  const shouldReduceMotion = useReducedMotion();
  const simplifyForMobile = useMobileOptimization();

  if (shouldReduceMotion || simplifyForMobile) {
    return (
      <span className={cn("inline-block", className)} aria-label={text}>
        {text}
      </span>
    );
  }

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: "110%",
      rotateX: -40,
    },
    visible: {
      opacity: 1,
      y: "0%",
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      className={cn("inline-block", className)}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-baseline"
          style={{ paddingBottom: "0.1em" }}
        >
          <motion.span
            variants={child}
            className="inline-block will-change-transform"
            style={{ transformOrigin: "0% 100%" }}
          >
            {word}
            {i < words.length - 1 && "\u00A0"}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
