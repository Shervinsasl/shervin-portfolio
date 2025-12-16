import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "tower-defense-game",
    title: "Tower Defense Game",
    summary:
      "Python game engine built from scratch with Pyglet, reusable tower/enemy classes, and YAML-configured levels.",
    year: 2025,
    tags: ["Game Dev", "Python"],
    stack: ["Python", "Pyglet", "YAML", "OOP"],
    accent: "#f59e0b",
    featured: true,
    links: {
      repo: "https://github.com/Shervinssl",
    },
    mdxFile: "tower-defense-game.mdx",
  },
  {
    slug: "allexercises-platform",
    title: "AllExercises Platform",
    summary:
      "Full-stack event coordination platform built with React and Django REST Framework with token-based auth.",
    year: 2025,
    tags: ["Full Stack", "Web"],
    stack: ["React", "Django", "Django REST Framework", "JWT"],
    accent: "#22c55e",
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
