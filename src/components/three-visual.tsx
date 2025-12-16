"use client";

import { motion } from "framer-motion";

export function ThreeVisual() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border/70 bg-card/70 p-4">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.04),transparent_45%)]" />
      <div className="relative flex h-40 items-center justify-center">
        <motion.div
          className="absolute h-24 w-24 rounded-full bg-gradient-to-tr from-indigo-400/70 via-indigo-500/70 to-indigo-300/60 blur-xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="relative h-20 w-20 rounded-full border border-indigo-300/60 bg-gradient-to-br from-indigo-500/30 to-indigo-600/10 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.65)]"
          animate={{ rotate: [0, 6, -6, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-2 rounded-full border border-indigo-200/50"
            animate={{ rotate: [-8, 8, -8] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-4 rounded-full border border-indigo-200/30"
            animate={{ rotate: [12, -12, 12] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300 shadow-[0_0_18px_-6px_rgba(251,191,36,0.9)]"
            animate={{ y: ["-24%", "24%", "-24%"], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-2 top-3 h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_-6px_rgba(52,211,153,0.8)]"
            animate={{ y: [0, 12, -10, 0], opacity: [0.6, 1, 0.7, 0.6] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -left-3 bottom-3 h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_14px_-6px_rgba(125,211,252,0.8)]"
            animate={{ y: [0, -10, 12, 0], opacity: [0.6, 1, 0.7, 0.6] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-[11px] text-muted-foreground">
        <div className="rounded-md border border-border/60 bg-muted/30 px-2 py-1.5">
          Camera orbit + pointer lock
        </div>
        <div className="rounded-md border border-border/60 bg-muted/30 px-2 py-1.5">
          Lighting shifts per frame
        </div>
        <div className="rounded-md border border-border/60 bg-muted/30 px-2 py-1.5">
          Shader-driven materials
        </div>
      </div>
    </div>
  );
}
