export type Project = {
  slug: string;
  title: string;
  summary: string;
  year: number;
  tags: string[];
  stack: string[];
  cover?: string;
  accent: string;
  featured?: boolean;
  links: {
    live?: string;
    repo?: string;
  };
  mdxFile: string;
};
