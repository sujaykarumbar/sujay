"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
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
      {...(animated
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
