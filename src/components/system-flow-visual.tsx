"use client";

import { motion } from "framer-motion";

const nodes = [
  { label: "Frontend", color: "bg-primary/80", x: 0 },
  { label: "API", color: "bg-amber-400/80", x: 1 },
  { label: "Database", color: "bg-emerald-400/80", x: 2 },
];

export function SystemFlowVisual() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border/70 bg-card/70 p-4">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.05),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.08),transparent_40%)]" />
      <div className="relative flex items-center justify-between gap-4">
        <div className="absolute left-[10%] right-[10%] top-1/2 h-[2px] -translate-y-1/2 bg-border/70" />
        {nodes.map((node) => (
          <motion.div
            key={node.label}
            className={`relative z-10 h-10 w-full max-w-[180px] rounded-lg ${node.color} text-center text-sm font-semibold text-slate-900 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.6)]`}
            initial={{ scale: 0.98, opacity: 0.9 }}
            whileHover={{ scale: 1.02, boxShadow: "0 16px 38px -22px rgba(0,0,0,0.45)" }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
          >
            <div className="flex h-full items-center justify-center px-3">
              {node.label}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-muted-foreground">
        <div className="rounded-lg border border-border/60 bg-muted/30 px-3 py-2">
          Structured state, forms, and role-aware UI.
        </div>
        <div className="rounded-lg border border-border/60 bg-muted/30 px-3 py-2">
          Authenticated REST endpoints with validation.
        </div>
        <div className="rounded-lg border border-border/60 bg-muted/30 px-3 py-2">
          Normalized models for events, users, and tags.
        </div>
      </div>
    </div>
  );
}
