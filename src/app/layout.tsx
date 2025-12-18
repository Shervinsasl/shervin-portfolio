import type { Metadata } from "next";
import { Manrope, Fira_Code } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shervin | Developer Portfolio",
  description:
    "A modern, product-focused developer portfolio showcasing projects, experiments, and contact information.",
  metadataBase: new URL("http://localhost:3000"),
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Shervin | Developer Portfolio",
    description:
      "A modern, product-focused developer portfolio showcasing projects, experiments, and contact information.",
    url: "https://example.com",
    siteName: "Shervin Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${mono.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        <ThemeProvider>
          <div className="relative isolate flex min-h-screen flex-col">
            <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl">
              <div className="absolute left-[10%] top-[10%] h-56 w-56 rounded-full bg-gradient-to-r from-cyan-400/40 to-blue-600/30 dark:from-cyan-500/30 dark:to-blue-500/20" />
              <div className="absolute bottom-[5%] right-[8%] h-64 w-64 rounded-full bg-gradient-to-r from-emerald-400/30 to-teal-500/30 dark:from-emerald-500/20 dark:to-teal-400/20" />
            </div>
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
