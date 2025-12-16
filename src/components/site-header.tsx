// Responsive header with nav and theme toggle
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";

import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border/60 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium text-muted-foreground transition hover:text-foreground",
                  isActive && "text-foreground"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute -inset-x-2 -bottom-2 h-8 rounded-full bg-primary/10"
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="border-border/70">
              <SheetHeader>
                <SheetTitle>Navigate</SheetTitle>
                <SheetDescription>
                  Quick jump to a section of the portfolio.
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-3">
                <AnimatePresence>
                  {links.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center justify-between rounded-lg border border-transparent px-3 py-2 text-base font-medium transition hover:border-border/80 hover:bg-muted/60",
                          pathname.startsWith(link.href) &&
                            "border-border/80 bg-muted/50 text-foreground"
                        )}
                      >
                        <span>{link.label}</span>
                        <span className="text-xs text-muted-foreground">
                          {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
