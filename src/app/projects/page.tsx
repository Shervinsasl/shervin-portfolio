"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";

import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { projects, tags } from "@/data/projects";
import { searchProjects } from "@/lib/projects";

const tagOptions = ["All", ...tags];

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  const filtered = useMemo(
    () => searchProjects(query, selectedTag),
    [query, selectedTag]
  );

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-10 sm:px-8 sm:py-14">
      <div className="flex flex-col gap-6 rounded-2xl border border-border/70 bg-card/70 p-6 shadow-lg shadow-primary/5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              Projects
            </p>
            <h1 className="text-3xl font-semibold">
              Coursework, club, and hackathon builds
            </h1>
            <p className="text-muted-foreground">
              Search and filter by focus area to see the games, web apps, and
              embedded projects I&apos;ve shipped.
            </p>
          </div>
          <Button asChild className="rounded-full">
            <Link href="/contact">
              Book a build
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-3 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by name, stack, or keywords"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="h-12 rounded-xl pl-10"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {tagOptions.map((tag) => (
              <Badge
                key={tag}
                onClick={() => setSelectedTag(tag)}
                variant={selectedTag === tag ? "default" : "outline"}
                className={`cursor-pointer rounded-full px-3 py-1 text-sm ${
                  selectedTag === tag
                    ? "shadow-md shadow-primary/20"
                    : "border-border/70 bg-card text-foreground hover:border-primary/60"
                }`}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid gap-4 md:grid-cols-2"
      >
        {filtered.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full rounded-xl border border-dashed border-border/70 bg-card/60 p-6 text-center text-muted-foreground">
            No projects match that filter. Try a different tag or keyword.
          </div>
        )}
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="rounded-xl border border-border/70 bg-muted/40 px-4 py-3 text-sm text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-[0.18em] text-foreground/70">
              Stack
            </span>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {project.stack.map((item) => (
                <Badge key={item} variant="outline">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
