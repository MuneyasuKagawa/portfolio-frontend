"use client";

import { motion, useInView } from "framer-motion";
import {
  Code2,
  Database,
  GitBranch,
  Layers,
  Palette,
  Workflow,
} from "lucide-react";
import { useRef } from "react";

type Category = {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  skills: string[];
};

const skillCategories: Category[] = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Angular",
      "Framer Motion",
      "Jotai",
      "StoryBook",
    ],
  },
  {
    title: "UI/UX",
    icon: Palette,
    skills: [
      "Tailwind CSS",
      "shadcn/ui",
      "MUI",
      "Chakra-UI",
      "Figma",
      "Responsive Design",
      "Accessibility",
    ],
  },
  {
    title: "Backend",
    icon: Database,
    skills: [
      "Node.js",
      "Express",
      "C#.NET",
      "ASP.NET Web APIs",
      "Go",
      "REST APIs",
      "GraphQL",
      "SQL Server",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    title: "Tools",
    icon: GitBranch,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Webpack",
      "Vite",
      "Docker",
      "ESLint/Prettier",
      "npm/yarn/pnpm",
    ],
  },
  {
    title: "Testing",
    icon: Workflow,
    skills: [
      "Jest",
      "React Testing Library",
      "Postman",
      "Selenium",
      "Playwright",
      "Cypress",
    ],
  },
  {
    title: "Others",
    icon: Layers,
    skills: ["AWS", "Azure", "Linux", "Github Actions", "Jenkins", "VBA"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">My Skills</h2>
          <p className="mx-auto max-w-2xl text-foreground/80">
            I've worked with a variety of technologies and tools in the web
            development ecosystem. Here's an overview of my technical skills and
            expertise.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              index={index}
              inView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  category,
  index,
  inView,
}: {
  category: Category;
  index: number;
  inView: boolean;
}) {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      className="rounded-xl border bg-card p-6 transition-shadow hover:shadow-md"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-lg bg-primary/10 p-2 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold">{category.title}</h3>
      </div>

      <ul className="space-y-2">
        {category.skills.map((skill) => (
          <li key={skill} className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
            <span className="text-foreground/80">{skill}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
