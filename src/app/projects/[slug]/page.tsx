import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SystemFlowVisual } from "@/components/system-flow-visual";
import { projects } from "@/data/projects";
import { getMDXContent } from "@/lib/mdx";
import { getProjectBySlug } from "@/lib/projects";

type ProjectPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: `${project.title} | Project`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const content = await getMDXContent(project.mdxFile);

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 px-5 py-10 sm:px-8 sm:py-14">
      <div className="flex items-center justify-between gap-3">
        <Button asChild variant="ghost" className="gap-2">
          <Link href="/projects">
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
        </Button>
        <div className="flex gap-2">
          {project.links.live && (
            <Button asChild variant="secondary" className="gap-2 rounded-full">
              <Link href={project.links.live} target="_blank">
                Live
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>

      <Card className="overflow-hidden border-border/70 bg-card/70">
        <CardContent className="grid gap-6 p-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Badge className="bg-primary/15 text-xs font-semibold text-primary">
                {project.year}
              </Badge>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <h1 className="text-3xl font-semibold">{project.title}</h1>
            <p className="text-muted-foreground">{project.summary}</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border/70 bg-muted/40 px-3 py-1 text-xs font-semibold text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div
              className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-primary/12 via-card/80 to-card/70 px-5 py-5 text-sm text-foreground shadow-[0_16px_38px_-24px_rgba(0,0,0,0.65)] sm:px-6 sm:py-6"
              style={{
                boxShadow: `0 18px 46px -26px ${project.accent}88`,
              }}
            >
              <div
                className="absolute left-0 top-0 h-full w-1.5 sm:w-2"
                style={{ background: project.accent }}
              />
              <div
                className="absolute right-[-18%] top-[-18%] h-32 w-32 rounded-full blur-3xl opacity-30"
                style={{ background: project.accent }}
              />
              <div className="relative space-y-2">
                <p className="text-base font-semibold text-foreground">
                  Design focus
                </p>
                <p className="text-muted-foreground">
                  {project.slug === "allexercises"
                    ? "Clear boundaries between React UI, authenticated APIs, and data models to keep collaboration predictable and changes low-risk."
                    : "Performance-aware, modular structure with clear seams between simulation, rendering, and configuration so mechanics can evolve without refactoring core systems."}
                </p>
              </div>
            </div>
            {project.slug === "allexercises" && <SystemFlowVisual />}
          </div>
        </CardContent>
      </Card>

      <article className="max-w-none space-y-6 text-base leading-relaxed text-foreground">
        {content}
      </article>
    </div>
  );
}
