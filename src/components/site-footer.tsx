import Link from "next/link";

import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-background/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-muted-foreground">
              Open to Summer 2025 internships and project collaborations.
            </p>
            <p className="text-lg font-semibold">
              Let&apos;s build something new.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Contact
            </Link>
            <a
              href="https://www.linkedin.com/in/shervinshahidi"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border/70 px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-primary/70"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Shervinsasl"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border/70 px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-primary/70"
            >
              GitHub
            </a>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Shervin Shahidi</span>
        </div>
      </div>
    </footer>
  );
}
