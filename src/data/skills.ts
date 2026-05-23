export interface Skill {
  name: string;
  category: "frontend" | "backend" | "design" | "tools";
  level: number;
}

export const skills: Skill[] = [
  // Frontend
  { name: "HTML5", category: "frontend", level: 95 },
  { name: "CSS3", category: "frontend", level: 90 },
  { name: "JavaScript", category: "frontend", level: 90 },
  { name: "TypeScript", category: "frontend", level: 85 },
  { name: "React", category: "frontend", level: 90 },
  { name: "Next.js", category: "frontend", level: 85 },
  { name: "Astro", category: "frontend", level: 75 },
  { name: "Vue.js", category: "frontend", level: 70 },
  { name: "Tailwind CSS", category: "frontend", level: 90 },
  { name: "GSAP", category: "frontend", level: 75 },
  { name: "Framer Motion", category: "frontend", level: 75 },

  // Backend
  { name: "Node.js", category: "backend", level: 80 },
  { name: "Express", category: "backend", level: 75 },
  { name: "C#/.NET", category: "backend", level: 85 },
  { name: "REST API", category: "backend", level: 85 },
  { name: "PostgreSQL", category: "backend", level: 75 },
  { name: "SQL Server", category: "backend", level: 80 },

  // Design
  { name: "Figma", category: "design", level: 90 },
  { name: "UI Design", category: "design", level: 85 },
  { name: "UX Design", category: "design", level: 80 },
  { name: "Responsive Design", category: "design", level: 90 },

  // Tools
  { name: "Git", category: "tools", level: 90 },
  { name: "GitHub", category: "tools", level: 85 },
  { name: "VS Code", category: "tools", level: 95 },
  { name: "Docker", category: "tools", level: 80 },
  { name: "AWS", category: "tools", level: 75 },
  { name: "GitHub Actions", category: "tools", level: 85 },
];
