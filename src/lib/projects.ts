import { projects } from "@/data/projects";
import { Project } from "@/types/project";

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function searchProjects(query: string, tag: string): Project[] {
  const normalizedQuery = query.toLowerCase();
  return projects.filter((project) => {
    const matchesQuery =
      !normalizedQuery ||
      project.title.toLowerCase().includes(normalizedQuery) ||
      project.summary.toLowerCase().includes(normalizedQuery) ||
      project.stack.some((tech) => tech.toLowerCase().includes(normalizedQuery));

    const matchesTag = tag === "All" || project.tags.includes(tag);

    return matchesQuery && matchesTag;
  });
}
