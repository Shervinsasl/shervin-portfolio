"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";

import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getFeaturedProjects } from "@/lib/projects";

const featured = getFeaturedProjects();

export default function HomePage() {
  const stackLayers = [
    { title: "Applications", detail: "Interfaces, APIs, orchestration" },
    { title: "Machine Learning", detail: "Models layered onto strong systems" },
    { title: "Operating Systems", detail: "Processes, memory, scheduling" },
    { title: "Hardware", detail: "I/O, buses, electrical realities" },
  ];

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14">
      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 220 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Building software, games, and hardware projects that bridge code and
            circuits.
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            I am a Computer Science undergraduate at UCLA, graduating in May
            2026, with a strong foundation across both software and hardware
            systems. My experience spans high-level software development,
            operating systems, and computer architecture, as well as low-level
            execution, embedded systems, and electronic circuits. By combining
            computer science and electrical engineering principles, I focus on
            building well-rounded, efficient, and thoughtfully engineered
            systems.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary px-6 text-primary-foreground shadow-lg shadow-primary/25"
            >
              <Link href="/projects" className="flex items-center gap-2">
                View projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/contact">Let&apos;s collaborate</Link>
            </Button>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/Shervinssl" target="_blank">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/shervinshahidi" target="_blank">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                label: "Languages",
                items: [
                  "Python",
                  "C/C++",
                  "SQL",
                  "JavaScript",
                  "HTML/CSS",
                  "x86 & RISC-V Assembly",
                  "Verilog",
                  "Bash/Shell",
                ],
              },
              {
                label: "Frameworks & Tools",
                items: [
                  "React",
                  "Node.js",
                  "Three.js",
                  "Django",
                  "WordPress",
                  "Git",
                  "Jupyter Notebook",
                  "Docker",
                ],
              },
            ].map((stat) => (
              <Card
                key={stat.label}
                className="border-border/70 bg-card/70 shadow-sm"
              >
                <CardContent className="space-y-3 p-5">
                  <p className="text-sm font-semibold text-muted-foreground">
                    {stat.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {stat.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-semibold"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 180 }}
          className="glass-panel relative overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
          <div className="relative space-y-4 p-6">
            <div className="flex items-center gap-3">
              <Badge className="bg-primary/15 text-primary">Focus</Badge>
              <span className="text-sm text-muted-foreground">2025</span>
            </div>
            <h3 className="text-2xl font-semibold">End-to-end systems engineering</h3>
            <p className="text-muted-foreground">
              Building software with an understanding of how it executes from
              high-level application logic and APIs down to operating systems,
              hardware interfaces, and physical constraints.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  title: "Full-Stack Systems",
                  text: "React + Django REST, Authentication, Data models",
                },
                {
                  title: "Graphics & Game Loops",
                  text: "Three.js, Pyglet, Real-time rendering",
                },
                {
                  title: "Embedded & Robotics",
                  text: "Raspberry Pi, MicroPython, MQTT, Sensors",
                },
                {
                  title: "Circuits & Hardware Basics",
                  text: "Analog analysis, PCB fundamentals",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border/60 bg-muted/40 px-4 py-3 text-sm font-medium text-foreground"
                >
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              Featured work
            </p>
            <h2 className="text-3xl font-semibold">
              Projects from class, clubs, and hackathons
            </h2>
          </div>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/projects">
              View all
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="glass-panel grid gap-6 rounded-2xl p-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            Where I Add Leverage
          </p>
          <h3 className="text-2xl font-semibold">
            "Systems First Engineering With Room For Intelligence"
          </h3>
          <p className="text-muted-foreground">
            I build systems from the ground up understanding how software
            executes, how hardware behaves, and how real constraints shape
            design. I’m especially effective in performance sensitive,
            early stage projects, and I’m increasingly exploring how machine
            learning and data driven approaches can sit on top of well engineered
            systems.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-xl border border-border/70 bg-gradient-to-br from-card/40 via-card/20 to-card/60 p-5">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/20 blur-2xl" />
          <div className="relative grid grid-cols-2 gap-4 sm:gap-5">
            <div className="pointer-events-none absolute inset-3 rounded-2xl border border-border/50" />
            {stackLayers.map((layer) => {
              return (
                <div
                  key={layer.title}
                  className="relative flex min-h-[110px] items-center justify-center rounded-2xl border border-border/70 bg-gradient-to-br from-card/80 via-card/60 to-card/80 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.5)]"
                >
                  <div className="absolute inset-0 rounded-2xl border border-primary/20" />
                  <div className="relative flex flex-col items-center gap-1 px-3 text-center">
                    <span className="text-sm font-semibold text-foreground">
                      {layer.title}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {layer.detail}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
