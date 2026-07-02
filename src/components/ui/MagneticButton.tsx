"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/utils/cn";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export function MagneticButton({
  children,
  className,
  href,
  onClick,
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });
  const rotateX = useTransform(springY, [-20, 20], [6, -6]);
  const rotateY = useTransform(springX, [-20, 20], [-6, 6]);

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const inner = (
    <motion.span
      style={{ x: springX, y: springY, rotateX, rotateY, transformPerspective: 800 }}
      className="relative inline-flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",
          className
        )}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",
        className
      )}
    >
      {inner}
    </motion.button>
  );
}
