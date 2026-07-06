"use client";

import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion";
import { useMobileOptimization } from "@/hooks/use-mobile-optimization";
import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

interface GradientTextProps extends Omit<HTMLMotionProps<"span">, "children"> {
  children: ReactNode;
  className?: string;
  from?: string;
  via?: string;
  to?: string;
  animated?: boolean;
}

export function GradientText({
  children,
  className,
  from = "#8b5cf6",
  via = "#a78bfa",
  to = "#3b82f6",
  animated = false,
  ...props
}: GradientTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const simplifyForMobile = useMobileOptimization();

  return (
    <motion.span
      className={cn("inline-block", className)}
      style={{
        backgroundImage: `linear-gradient(120deg, ${from}, ${via}, ${to})`,
        backgroundSize: animated ? "200% 200%" : "100% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent",
      }}
      {...(animated && !shouldReduceMotion && !simplifyForMobile
        ? {
            animate: {
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            },
            transition: {
              duration: 6,
              ease: "easeInOut",
              repeat: Infinity,
            },
          }
        : {})}
      {...props}
    >
      {children}
    </motion.span>
  );
}
