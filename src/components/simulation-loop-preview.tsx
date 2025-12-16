"use client";

import { motion } from "framer-motion";

const pathPoints = [
  { x: "6%", y: "6%" },
  { x: "70%", y: "6%" },
  { x: "70%", y: "70%" },
  { x: "12%", y: "70%" },
  { x: "12%", y: "30%" },
  { x: "85%", y: "30%" },
  { x: "85%", y: "6%" },
];

export function SimulationLoopPreview() {
  return (
    <div className="relative h-full overflow-hidden rounded-xl border border-border/60 bg-card/70 p-4">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.04),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.06),transparent_40%)]" />
      <div className="relative h-full rounded-lg border border-primary/10 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 p-3">
        <div className="absolute inset-3 grid grid-cols-6 grid-rows-6 gap-2 opacity-30">
          {Array.from({ length: 36 }).map((_, index) => (
            <div
              key={index}
              className="rounded-md border border-border/50 bg-muted/30"
            />
          ))}
        </div>

        <motion.div
          className="absolute top-6 left-6 h-3 w-3 rounded-full bg-primary shadow-[0_0_18px_-4px_rgba(59,130,246,0.8)]"
          animate={{
            x: pathPoints.map((point) => point.x),
            y: pathPoints.map((point) => point.y),
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-14 left-[42%] h-2 w-2 rounded-full bg-amber-400/90 shadow-[0_0_14px_-4px_rgba(251,191,36,0.8)]"
          animate={{
            x: ["0%", "10%", "-6%", "8%", "0%"],
            y: ["0%", "-6%", "12%", "-8%", "0%"],
            opacity: [0.25, 0.8, 1, 0.8, 0.25],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-8 right-10 h-2 w-2 rounded-full bg-emerald-400/90 shadow-[0_0_14px_-4px_rgba(52,211,153,0.7)]"
          animate={{
            x: ["0%", "-12%", "14%", "-8%", "0%"],
            y: ["0%", "8%", "-10%", "6%", "0%"],
            opacity: [0.35, 0.9, 1, 0.9, 0.35],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="absolute inset-4">
          <div className="absolute bottom-4 left-4 rounded-md border border-border/60 bg-card/60 px-3 py-2 text-xs text-foreground/80 shadow-[0_6px_20px_-14px_rgba(0,0,0,0.55)]">
            Simulation loop preview
          </div>
        </div>
      </div>
    </div>
  );
}
