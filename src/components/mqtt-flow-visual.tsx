"use client";

import { motion } from "framer-motion";

const nodes = [
  { label: "Web UI", color: "from-sky-400/80 to-sky-500/70" },
  { label: "MQTT Broker", color: "from-amber-300/80 to-amber-400/70" },
  { label: "Raspberry Pi", color: "from-emerald-300/80 to-emerald-400/70" },
  { label: "ESP32", color: "from-indigo-300/80 to-indigo-400/70" },
  { label: "Sensors", color: "from-slate-200/80 to-slate-300/70" },
];

export function MqttFlowVisual() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border/70 bg-card/70 p-4">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.05),transparent_35%),radial-gradient(circle_at_75%_0%,rgba(14,165,233,0.08),transparent_42%)]" />
      <div className="relative flex items-center justify-between gap-4">
        <div className="absolute left-[6%] right-[6%] top-1/2 h-[2px] -translate-y-1/2 bg-border/70" />
        {nodes.map((node) => (
          <motion.div
            key={node.label}
            className={`relative z-10 h-10 w-full max-w-[200px] rounded-lg bg-gradient-to-r ${node.color} text-center text-sm font-semibold text-slate-900 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.6)]`}
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
      <div className="mt-4 grid grid-cols-3 gap-3 text-[11px] text-muted-foreground">
        <div className="rounded-lg border border-border/60 bg-muted/30 px-3 py-2">
          Telemetry rendered live in dashboard UI.
        </div>
        <div className="rounded-lg border border-border/60 bg-muted/30 px-3 py-2">
          Pub/sub broker routing commands and data.
        </div>
        <div className="rounded-lg border border-border/60 bg-muted/30 px-3 py-2">
          Firmware handling sensors and drive commands.
        </div>
      </div>
      <div className="mt-3 rounded-lg border border-border/60 bg-muted/30 px-3 py-2 text-[11px] text-muted-foreground">
        Raspberry Pi acts as the primary controller between dashboard, broker, and ESP32 peripherals.
      </div>
    </div>
  );
}
