"use client";

import { useEffect, useRef, useState } from "react";

import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 0) {
        setProgress(0);
        return;
      }
      setProgress(Math.min(100, Math.max(0, (el.scrollLeft / max) * 100)));
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    const onResize = () => update();
    window.addEventListener("resize", onResize);

    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const nudge = (direction: "left" | "right") => {
    const el = carouselRef.current;
    if (!el) return;
    const delta = el.clientWidth * 0.8;
    el.scrollBy({ left: direction === "left" ? -delta : delta, behavior: "smooth" });
  };

  const handleBarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = carouselRef.current;
    if (!el) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const pct = (event.clientX - rect.left) / rect.width;
    const max = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: max * pct, behavior: "smooth" });
  };

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 px-5 py-10 sm:px-8 sm:py-14">
      <Reveal className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
          About
        </p>
        <h1 className="text-4xl font-semibold sm:text-5xl">
          I Build Systems End to End
        </h1>
        <p className="text-lg text-muted-foreground sm:text-xl">
          I&apos;m a UCLA Computer Science student (Graduating December 2026) with hands on builds across
          software and embedded systems. I move between software engineering, graphics,
          and hardware: C/C++, Python, JavaScript/React/Three.js, plus ESP32/Arduino/Raspberry Pi,
          MQTT, and KiCad. Recent work includes a real time 3D Snake game with camera
          transforms, a Python tower defense engine tuned for performance, and embedded
          prototypes with PWM motor control, sensors, and MQTT communication.
        </p>
      </Reveal>

      <Reveal highlight>
        <Card className="border-border/70 bg-card/70">
          <CardContent className="space-y-4 p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                What I build
              </p>
              <span className="text-xs text-muted-foreground">
                Swipe or scroll →
              </span>
            </div>
            <div
              ref={carouselRef}
              className="flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
            >
              {[
                {
                  title: "3D Snake",
                  text: "Real-time graphics, camera transforms, and responsive input loops in Three.js.",
                },
                {
                  title: "Tower Defense Engine",
                  text: "Python engine tuned for performance and predictable simulation under load.",
                },
                {
                  title: "Embedded Control",
                  text: "MQTT messaging, PWM motor control, and sensor feedback on ESP32/Arduino.",
                },
                {
                  title: "Rover Control System",
                  text: "Raspberry Pi controller + ESP32 peripherals with telemetry, MQTT, and sensor-driven navigation.",
                },
                {
                  title: "AllExercises Platform",
                  text: "React + Django REST system with structured data models and authenticated APIs.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="min-w-[260px] max-w-[320px] snap-center rounded-xl border border-border/70 bg-card/80 px-5 py-4 shadow-[0_12px_34px_-26px_rgba(59,130,246,0.45)]"
                >
                  <p className="text-base font-semibold text-foreground sm:text-lg">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => nudge("left")}
              >
                ‹
              </Button>
              <div
                className="relative h-2 flex-1 cursor-pointer rounded-full bg-muted/50"
                onClick={handleBarClick}
              >
                <div
                  className="absolute inset-y-0 rounded-full bg-primary/50"
                  style={{ width: `${progress}%` }}
                />
                <div
                  className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_12px_-4px_rgba(59,130,246,0.8)] transition"
                  style={{ left: `calc(${progress}% - 6px)` }}
                />
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => nudge("right")}
              >
                ›
              </Button>
            </div>
          </CardContent>
        </Card>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        <Reveal highlight>
          <Card className="border-border/70 bg-card/70">
            <CardContent className="space-y-3 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                How I Think
              </p>
              <p className="text-base text-foreground sm:text-lg">
                I break problems into systems, prototype early, and iterate with real constraints.
                I enjoy tracing how UI changes hit APIs, event loops, rendering pipelines, and
                hardware limits.
              </p>
              <p className="text-base text-muted-foreground sm:text-lg">
                Comfortable across C/C++, Python, JavaScript/TypeScript, React, Django, Three.js,
                and embedded tools like ESP32, MicroPython, MQTT, and KiCad.
              </p>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal highlight delay={0.05}>
          <Card className="border-border/70 bg-card/70">
            <CardContent className="space-y-3 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Interests
              </p>
              <p className="text-base text-foreground sm:text-lg">
                I&apos;m actively learning machine learning and AI, focused on how intelligent
                models integrate into real systems—interactive apps, systems engineering, and
                robotics/embedded contexts.
              </p>
              <p className="text-base text-muted-foreground sm:text-lg">
                Building the math and systems foundations now; aiming to apply ML in grounded,
                system aware ways rather than as a bolt on feature.
              </p>
            </CardContent>
          </Card>
        </Reveal>
      </div>

      <Reveal highlight>
        <Card className="border-border/70 bg-card/70">
          <CardContent className="space-y-4 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Languages
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { lang: "English", level: "Fluent" },
                { lang: "Turkish", level: "Fluent" },
                { lang: "Farsi", level: "Fluent" },
              ].map((item) => (
                <div
                  key={item.lang}
                  className="rounded-xl border border-border/70 bg-muted/40 px-4 py-3 text-center shadow-[0_10px_30px_-24px_rgba(59,130,246,0.4)]"
                >
                  <p className="text-base font-semibold text-foreground sm:text-lg">
                    {item.lang}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.level}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </Reveal>

      <Reveal highlight>
        <Card className="border-border/70 bg-card/70">
          <CardContent className="space-y-2 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Looking Ahead
            </p>
            <p className="text-base text-foreground sm:text-lg">
              Actively seeking Software Engineering and Embedded/Systems internships. I add value
              where teams need ownership across layers, clear reasoning, and systems thinking not
              just surface level features.
            </p>
          </CardContent>
        </Card>
      </Reveal>
    </div>
  );
}
