// Toggle between light and dark themes
"use client";

import { useSyncExternalStore } from "react";
import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const isHydrated = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="h-10 w-10 rounded-full border border-border/70 bg-card/60 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-lg"
    >
      {isHydrated ? (
        <>
          <SunMedium className="h-5 w-5 transition-opacity duration-300 dark:opacity-0" />
          <MoonStar className="absolute h-5 w-5 opacity-0 transition-opacity duration-300 dark:opacity-100" />
        </>
      ) : (
        <SunMedium className="h-5 w-5" />
      )}
    </Button>
  );
}
