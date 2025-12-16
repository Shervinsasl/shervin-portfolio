import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.015,
        boxShadow: `0 22px 55px -28px ${project.accent}80`,
      }}
      whileTap={{ scale: 0.995 }}
      transition={{ delay: index * 0.05, type: "spring", stiffness: 260 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="group relative overflow-hidden border-border/70 transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/10">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              background: `radial-gradient(circle at 15% 20%, ${project.accent}26, transparent 25%), radial-gradient(circle at 80% 0%, ${project.accent}33, transparent 30%), linear-gradient(135deg, ${project.accent}14, transparent 60%)`,
            }}
          />
          <CardHeader className="relative z-10">
            <div className="flex items-center justify-between">
              <Badge className="bg-primary/15 text-xs font-semibold text-foreground">
                {project.year}
              </Badge>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </div>
            <CardTitle className="text-xl">{project.title}</CardTitle>
            <p className="text-sm text-muted-foreground">{project.summary}</p>
          </CardHeader>
          <CardContent className="relative z-10 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={cn(
                  "rounded-full border border-border/70 px-3 py-1 text-xs font-semibold text-muted-foreground transition",
                  "group-hover:border-primary/70 group-hover:text-foreground"
                )}
              >
                {tag}
              </span>
            ))}
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
