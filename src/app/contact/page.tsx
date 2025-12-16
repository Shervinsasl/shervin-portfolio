"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sent");
  };

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-10 px-5 py-10 sm:px-8 sm:py-14">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
          Contact
        </p>
        <h1 className="text-3xl font-semibold">Let&apos;s connect</h1>
        <p className="text-muted-foreground">
          Open to Summer 2025 internships, hackathons, and collaborations that
          mix web, game dev, or embedded systems. I typically respond within a
          business day.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <Card className="border-border/70 bg-card/70">
          <CardContent className="space-y-4 p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Your name</label>
                <Input required name="name" placeholder="Ada Lovelace" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  required
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">What do you need?</label>
                <Textarea
                  required
                  name="message"
                  placeholder="Ship a dashboard MVP, polish a design system, build product animations..."
                  className="min-h-28"
                />
              </div>
              <Button
                type="submit"
                className="w-full gap-2 rounded-full"
                disabled={status === "sent"}
              >
                {status === "sent" ? "Sent — I’ll reply shortly" : "Send"}
                <Send className="h-4 w-4" />
              </Button>
              <p className="text-xs text-muted-foreground">
                No backend wired up here—this demo form just shows the intended
                flow. Reach out directly via email for a real conversation.
              </p>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <div className="glass-panel rounded-xl p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Availability
            </p>
            <h3 className="mt-2 text-xl font-semibold">
              Summer 2025 + project collabs
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Interested in roles where I can apply React/Django, Three.js, or
              embedded experience (ESP32, MQTT, MicroPython).
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge variant="outline">Full-stack web</Badge>
              <Badge variant="outline">Game/graphics</Badge>
              <Badge variant="outline">Embedded/IoT</Badge>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              {
                label: "Email",
                value: "ShervinShahidi@ucla.edu",
                icon: <Mail className="h-4 w-4" />,
                href: "mailto:ShervinShahidi@ucla.edu",
              },
              {
                label: "GitHub",
                value: "github.com/Shervinssl",
                icon: <Github className="h-4 w-4" />,
                href: "https://github.com/Shervinssl",
              },
              {
                label: "LinkedIn",
                value: "/in/shervinshahidi",
                icon: <Linkedin className="h-4 w-4" />,
                href: "https://www.linkedin.com/in/shervinshahidi",
              },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                className="flex flex-col gap-1 rounded-xl border border-border/70 bg-muted/40 px-4 py-3 text-sm font-medium text-foreground transition hover:-translate-y-0.5 hover:border-primary/70"
                whileHover={{ y: -3 }}
              >
                <span className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {item.icon}
                  {item.label}
                </span>
                <span>{item.value}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
