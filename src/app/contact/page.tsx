"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";

import { SendSuccessOverlay } from "@/components/SendSuccessOverlay";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormState = {
  name: string;
  email: string;
  message: string;
  honey: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    honey: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showOverlay, setShowOverlay] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mql.matches);
    const handler = (event: MediaQueryListEvent) => setReduceMotion(event.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const hasErrors = useMemo(
    () => Object.values(errors).some((message) => message),
    [errors]
  );

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) {
      nextErrors.name = "Name is required.";
    } else if (form.name.trim().length < 2 || form.name.trim().length > 60) {
      nextErrors.name = "Enter 2-60 characters.";
    }
    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Enter a valid email.";
    }
    if (!form.message.trim()) {
      nextErrors.message = "Message is required.";
    } else if (form.message.trim().length < 30) {
      nextErrors.message = "Please provide at least 30 characters.";
    } else if (form.message.trim().length > 2000) {
      nextErrors.message = "Keep the message under 2000 characters.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    setSubmitError(null);
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));

      if (response.status === 429 || data.error === "rate_limited") {
        setStatus("error");
        setSubmitError("Too many messages — try again later.");
        return;
      }

      if (!response.ok || !data?.ok) {
        throw new Error(data.error || "Unable to send right now.");
      }

      if (reduceMotion) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "", honey: "" });
        return;
      }

      setShowOverlay(true);
    } catch (error) {
      setStatus("error");
      setSubmitError(
        error instanceof Error ? error.message : "Unable to send right now."
      );
    }
  };

  const handleOverlayComplete = () => {
    setShowOverlay(false);
    setStatus("sent");
    setForm({ name: "", email: "", message: "", honey: "" });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (status === "sent") setStatus("idle");
  };

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-10 px-5 py-10 sm:px-8 sm:py-14">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold">Let&apos;s connect</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <Card className="border-border/70 bg-card/70">
          <CardContent className="space-y-4 p-6">
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <input
                type="text"
                name="honey"
                value={form.honey}
                onChange={handleChange}
                className="absolute left-[-9999px] top-[-9999px] h-0 w-0 opacity-0"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <div className="space-y-2">
                <label className="text-sm font-medium">Your name</label>
                <Input
                  required
                  name="name"
                  placeholder="First / Last name"
                  value={form.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && (
                  <p className="text-xs text-red-400">{errors.name}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  required
                  type="email"
                  name="email"
                  placeholder="name@domain.com"
                  value={form.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && (
                  <p className="text-xs text-red-400">{errors.email}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">What do you need?</label>
                <Textarea
                  required
                  name="message"
                  placeholder="Briefly describe your project, timeline, and goals."
                  className="min-h-28"
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && (
                  <p className="text-xs text-red-400">{errors.message}</p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full gap-2 rounded-full"
                disabled={status === "sent" || status === "sending" || hasErrors}
                aria-busy={status === "sending"}
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                    ? "Sent"
                    : "Send"}
                <Send className="h-4 w-4" />
              </Button>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <p>Expect a reply within one business day.</p>
                {status === "sent" && (
                  <p className="text-emerald-400">Sent ✓</p>
                )}
              </div>
              {submitError && (
                <p className="text-xs text-red-400">{submitError}</p>
              )}
            </form>
          </CardContent>
        </Card>

        <Card className="h-full border-border/70 bg-card/70">
          <CardContent className="flex h-full flex-col gap-4 p-5">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Contact details
              </p>
              <h3 className="text-xl font-semibold">Professional channels</h3>
              <p className="text-sm text-muted-foreground">
                I typically respond within 1 business day.
              </p>
            </div>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:contact.shervinshah@gmail.com"
                className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border/70 bg-muted/30 px-4 py-3 transition hover:border-primary/70"
              >
                <span className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium text-foreground">Email</span>
                </span>
                <span className="truncate text-muted-foreground">
                  contact.shervinshah@gmail.com
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/shervinshahidi"
                target="_blank"
                rel="noreferrer"
                className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border/70 bg-muted/30 px-4 py-3 transition hover:border-primary/70"
              >
                <span className="flex items-center gap-3">
                  <Linkedin className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium text-foreground">LinkedIn</span>
                </span>
                <span className="truncate text-muted-foreground">
                  linkedin.com/in/shervinshahidi
                </span>
              </a>
              <a
                href="https://github.com/Shervinssl"
                target="_blank"
                rel="noreferrer"
                className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border/70 bg-muted/30 px-4 py-3 transition hover:border-primary/70"
              >
                <span className="flex items-center gap-3">
                  <Github className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium text-foreground">GitHub</span>
                </span>
                <span className="truncate text-muted-foreground">
                  github.com/Shervinssl
                </span>
              </a>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {["Internships", "Project collaborations", "Research"].map(
                (chip) => (
                  <Badge key={chip} variant="outline" className="px-3 py-1">
                    {chip}
                  </Badge>
                )
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      <AnimatePresence>
        {showOverlay && (
          <SendSuccessOverlay onClose={handleOverlayComplete} />
        )}
      </AnimatePresence>
    </div>
  );
}
