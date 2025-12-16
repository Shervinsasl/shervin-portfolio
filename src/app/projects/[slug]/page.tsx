import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
          {project.links.repo && (
            <Button asChild variant="outline" className="gap-2 rounded-full">
              <Link href={project.links.repo} target="_blank">
                Code
                <Github className="h-4 w-4" />
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
          <div
            className="glass-panel relative aspect-[4/3] overflow-hidden rounded-xl"
            style={{
              background: `radial-gradient(circle at 20% 20%, ${project.accent}26, transparent 30%), radial-gradient(circle at 80% 0%, ${project.accent}33, transparent 35%), linear-gradient(135deg, ${project.accent}1f, transparent 65%)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-card/0 via-card/20 to-card/70" />
            <div className="relative flex h-full flex-col justify-end p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Concept visual
              </p>
              <h3 className="text-xl font-semibold text-foreground">
                Product-like dashboard surfaces
              </h3>
            </div>
          </div>
        </CardContent>
      </Card>

      <article className="max-w-none space-y-6 text-base leading-relaxed text-foreground">
        {content}
      </article>
    </div>
  );
}
