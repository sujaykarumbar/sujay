"use client";

import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/utils/cn";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
}

export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(139, 92, 246, 0.25)",
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn(
        "glass relative overflow-hidden rounded-2xl",
        "transition-all duration-500",
        "hover:border-white/15",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, ${spotlightColor}, transparent 50%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
