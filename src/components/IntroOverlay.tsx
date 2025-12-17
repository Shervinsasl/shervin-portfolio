"use client";

import { useCallback, useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

import laptopAnimation from "@/../public/animations/laptop_animation.json";

type IntroOverlayProps = {
  onFinish: () => void;
};

export function IntroOverlay({ onFinish }: IntroOverlayProps) {
  const overlayControls = useAnimationControls();
  const zoomControls = useAnimationControls();
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const finishedRef = useRef(false);
  const timeoutRef = useRef<number | null>(null);

  const completeSequence = useCallback(async () => {
    if (finishedRef.current) return;
    finishedRef.current = true;

    await Promise.all([
      zoomControls.start({
        scale: 7,
        opacity: 0,
        transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
      }),
      overlayControls.start({
        opacity: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      }),
    ]);

    onFinish();
  }, [onFinish, overlayControls, zoomControls]);

  const handleSkip = useCallback(() => {
    overlayControls.stop();
    zoomControls.stop();
    overlayControls.set({ opacity: 0 });
    zoomControls.set({ scale: 7, opacity: 0 });
    if (!finishedRef.current) {
      finishedRef.current = true;
      onFinish();
    }
  }, [overlayControls, zoomControls, onFinish]);

  useEffect(() => {
    const ref = lottieRef.current;

    const fallbackTimer = window.setTimeout(() => {
      completeSequence();
    }, 2200);

    return () => {
      window.clearTimeout(fallbackTimer);
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      if (ref) {
        ref.destroy();
      }
    };
  }, [completeSequence]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={overlayControls}
      className="fixed inset-0 z-[9999] bg-gradient-to-b from-[#050915] via-[#030712] to-[#040814] text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.1),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.12),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.08),transparent_35%)]" />
      <button
        onClick={handleSkip}
        className="absolute right-6 top-6 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 transition hover:border-white/30 hover:bg-white/15 hover:text-white"
      >
        Skip intro
      </button>

      <div className="relative flex h-full items-center justify-center overflow-hidden">
        <motion.div
          animate={zoomControls}
          initial={{ scale: 1, opacity: 1 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative h-64 w-64 sm:h-80 sm:w-80">
            <Lottie
              lottieRef={lottieRef}
              animationData={laptopAnimation}
              loop={false}
              autoplay
              onComplete={() => {
                timeoutRef.current = window.setTimeout(() => {
                  completeSequence();
                }, 300);
              }}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
