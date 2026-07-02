"use client";

import { motion } from "framer-motion";

export function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Animated gradient blobs */}
      <motion.div
        className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.22) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
        animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[34rem] w-[34rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(236, 72, 153, 0.18) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
        animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle noise overlay */}
      <div className="noise absolute inset-0" />
    </div>
  );
}
