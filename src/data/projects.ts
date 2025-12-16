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
      "3D take on Snake with free camera control, AI enemies, dynamic lighting, and shader-driven effects in Three.js.",
    year: 2024,
    tags: ["3D", "Game Dev"],
    stack: ["JavaScript", "Three.js", "WebGL", "Shaders"],
    accent: "#6366f1",
    featured: false,
    links: {
      repo: "https://github.com/Shervinssl",
    },
    mdxFile: "twisted-snake.mdx",
  },
  {
    slug: "esp32-rover-dashboard",
    title: "ESP32 Rover Dashboard",
    summary:
      "Hackathon build with React UI + Node backend controlling an ESP32 rover over MQTT with live video and sensors.",
    year: 2024,
    tags: ["IoT", "Robotics"],
    stack: ["React", "Node.js", "MQTT", "ESP32", "MicroPython", "Raspberry Pi"],
    accent: "#0ea5e9",
    featured: false,
    links: {
      repo: "https://github.com/Shervinssl",
    },
    mdxFile: "esp32-rover-dashboard.mdx",
  },
];

export const tags = Array.from(
  new Set(projects.flatMap((project) => project.tags))
).sort();
