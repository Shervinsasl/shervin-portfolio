import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "tower-defense",
    title: "Tower Defense Engine",
    summary:
      "Python-based 2D game engine with real-time simulation, configurable levels, and performance-aware rendering.",
    year: 2025,
    tags: ["Game Systems", "Python", "OOP"],
    stack: ["Python", "Pyglet", "YAML", "OOP", "Sprite Batching"],
    accent: "#0ea5e9",
    featured: true,
    links: {
      repo: "https://github.com/Shervinssl",
    },
    mdxFile: "tower-defense.mdx",
  },
  {
    slug: "allexercises",
    title: "AllExercises Platform",
    summary:
      "Full-stack event coordination system with authenticated APIs, structured data models, and collaborative workflows.",
    year: 2025,
    tags: ["Full Stack", "Web Systems", "APIs"],
    stack: ["React", "Django", "Django REST Framework", "JWT", "PostgreSQL"],
    accent: "#10b981",
    featured: true,
    links: {
      repo: "https://github.com/Shervinssl",
    },
    mdxFile: "allexercises-platform.mdx",
  },
  {
    slug: "twisted-snake",
    title: "Twisted Snake",
    summary:
      "Interactive 3D game built with custom camera systems, real-time rendering, and shader-driven visuals.",
    year: 2024,
    tags: ["3D Graphics", "Three.js", "Real-Time Systems"],
    stack: ["JavaScript", "Three.js", "WebGL", "Shaders", "Pointer Lock"],
    accent: "#6366f1",
    featured: false,
    links: {
      repo: "https://github.com/Shervinssl",
    },
    mdxFile: "twisted-snake.mdx",
  },
  {
    slug: "rover-control",
    title: "Rover Control System",
    summary:
      "Distributed embedded system using a Raspberry Pi and ESP32 for real-time control, telemetry, and sensor integration.",
    year: 2024,
    tags: ["Embedded Systems", "IoT", "Distributed Systems"],
    stack: ["React", "Node.js", "MQTT", "ESP32", "MicroPython", "Raspberry Pi"],
    accent: "#0ea5e9",
    featured: false,
    links: {
      repo: "https://github.com/Shervinssl",
    },
    mdxFile: "rover-control.mdx",
  },
];

export const tags = Array.from(
  new Set(projects.flatMap((project) => project.tags))
).sort();
