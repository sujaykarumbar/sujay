"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setShow(false), 300);
          return 100;
        }
        return p + Math.random() * 15 + 5;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#07030f]"
        >
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600"
            >
              <span className="font-display text-2xl font-bold text-white">
                SK
              </span>
              <div className="absolute inset-0 animate-glow rounded-2xl" />
            </motion.div>

            <div className="flex flex-col items-center gap-3">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/50"
              >
                Loading Portfolio
              </motion.p>

              <div className="h-px w-48 overflow-hidden bg-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
              <span className="font-mono text-xs text-white/30">
                {Math.min(Math.floor(progress), 100)}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
