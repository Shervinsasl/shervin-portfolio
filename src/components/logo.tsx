import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3 rounded-full border border-transparent px-2 py-1 text-sm font-semibold tracking-tight transition hover:border-border/60"
    >
      <Avatar className="h-14 w-14 transition group-hover:scale-105 group-hover:shadow-lg">
        <AvatarImage src="/profile.jpg" alt="Shervin Shahidi" />
        <AvatarFallback className="text-sm font-semibold">SS</AvatarFallback>
      </Avatar>
      <span className="flex flex-col leading-tight">
        <span className="text-base font-semibold">Shervin Shahidi</span>
        <span className="text-xs text-muted-foreground">Software Developer</span>
      </span>
    </Link>
  );
}
