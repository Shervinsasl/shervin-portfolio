"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLAttributes, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
  highlight?: boolean;
  className?: string;
};

export function Reveal({
  children,
  delay = 0,
  duration = 0.5,
  y = 16,
  once = true,
  highlight = false,
  className,
}: RevealProps & HTMLAttributes<HTMLDivElement>) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{
        opacity: 1,
        y: 0,
        boxShadow: highlight
          ? "0 18px 40px -28px rgba(59,130,246,0.35)"
          : undefined,
        borderColor: highlight ? "rgba(59,130,246,0.35)" : undefined,
      }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
