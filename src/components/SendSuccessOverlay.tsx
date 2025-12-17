"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

import handshakeAnimation from "@/../public/animations/handshake_animation.json";
import { Button } from "@/components/ui/button";

type SendSuccessOverlayProps = {
  onClose: () => void;
};

export function SendSuccessOverlay({ onClose }: SendSuccessOverlayProps) {
  const closedRef = useRef(false);

  const safeClose = () => {
    if (closedRef.current) return;
    closedRef.current = true;
    onClose();
  };

  useEffect(() => {
    const timer = setTimeout(safeClose, 1900);
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        safeClose();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/75 backdrop-blur"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0" onClick={safeClose} aria-hidden />
      <motion.div
        className="relative z-10 w-[min(520px,90vw)] overflow-hidden rounded-2xl border border-border/70 bg-card/80 p-6 text-center shadow-2xl shadow-primary/15"
        initial={{ opacity: 0, scale: 0.97, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 8 }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
      >
        <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
        <div className="absolute right-3 top-3">
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full px-3 py-1 text-xs"
            onClick={safeClose}
          >
            Close
          </Button>
        </div>
        <div className="mx-auto flex w-full max-w-[320px] flex-col items-center gap-4 pt-6">
          <Lottie
            animationData={handshakeAnimation}
            autoplay
            loop={false}
            className="w-full max-w-[320px]"
            onComplete={safeClose}
          />
          <div className="space-y-1">
            <p className="text-lg font-semibold text-foreground">Message sent</p>
            <p className="text-sm text-muted-foreground">
              Thanks for reaching out — Shervin will respond soon.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
