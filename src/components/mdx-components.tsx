import { ReactNode } from "react";
import Link from "next/link";

type ComponentProps = {
  children: ReactNode;
};

export const mdxComponents = {
  h1: ({ children }: ComponentProps) => (
    <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight">
      {children}
    </h1>
  ),
  h2: ({ children }: ComponentProps) => (
    <h2 className="mt-10 mb-4 text-2xl font-semibold leading-tight">
      {children}
    </h2>
  ),
  h3: ({ children }: ComponentProps) => (
    <h3 className="mt-6 mb-3 text-xl font-semibold leading-snug">
      {children}
    </h3>
  ),
  p: ({ children }: ComponentProps) => (
    <p className="mb-4 text-base leading-relaxed text-muted-foreground">
      {children}
    </p>
  ),
  ul: ({ children }: ComponentProps) => (
    <ul className="mb-4 list-disc space-y-2 pl-5 text-muted-foreground">
      {children}
    </ul>
  ),
  ol: ({ children }: ComponentProps) => (
    <ol className="mb-4 list-decimal space-y-2 pl-5 text-muted-foreground">
      {children}
    </ol>
  ),
  li: ({ children }: ComponentProps) => (
    <li className="leading-relaxed">{children}</li>
  ),
  blockquote: ({ children }: ComponentProps) => (
    <blockquote className="my-6 border-l-4 border-primary/60 bg-primary/5 px-4 py-2 text-base text-foreground">
      {children}
    </blockquote>
  ),
  a: ({ children, href }: ComponentProps & { href?: string }) => (
    <Link
      href={href || "#"}
      className="font-semibold text-primary underline-offset-4 hover:underline"
    >
      {children}
    </Link>
  ),
  strong: ({ children }: ComponentProps) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
};
