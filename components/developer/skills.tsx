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
import { useTranslation } from "@/lib/use-translation";

type Skill = {
  name: string;
  level: number; // 0-100
};

type Category = {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  skills: Skill[];
};

const useSkillCategories = () => {
  const { t } = useTranslation();

  return [
    {
      title: t("skills.frontend"),
      icon: Code2,
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Angular", level: 80 },
        { name: "Framer Motion", level: 75 },
      ],
    },
    {
      title: t("skills.styling"),
      icon: Palette,
      skills: [
        { name: "Tailwind CSS", level: 90 },
        { name: "shadcn/ui", level: 85 },
        { name: "MUI", level: 75 },
        { name: "Chakra-UI", level: 85 },
        { name: "Figma", level: 90 },
        { name: "Responsive Design", level: 90 },
      ],
    },
    {
      title: t("skills.backend"),
      icon: Database,
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
        { name: "C#.NET", level: 85 },
        { name: "ASP.NET Web APIs", level: 80 },
        { name: "REST APIs", level: 85 },
        { name: "SQL Server", level: 80 },
      ],
    },
    {
      title: t("skills.tools"),
      icon: GitBranch,
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Docker", level: 80 },
        { name: "ESLint/Prettier", level: 85 },
        { name: "npm/yarn/pnpm", level: 85 },
      ],
    },
    {
      title: t("skills.testing"),
      icon: Workflow,
      skills: [
        { name: "Jest", level: 80 },
        { name: "React Testing Library", level: 75 },
        { name: "Cypress", level: 70 },
        { name: "Postman", level: 85 },
      ],
    },
    {
      title: t("skills.others"),
      icon: Layers,
      skills: [
        { name: "AWS", level: 75 },
        { name: "Azure", level: 70 },
        { name: "Linux", level: 80 },
        { name: "Github Actions", level: 85 },
        { name: "ChatGPT", level: 85 },
        { name: "Claude", level: 90 },
        { name: "Gemini", level: 75 },
      ],
    },
  ];
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();
  const skillCategories = useSkillCategories();

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
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            {t("skills.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-foreground/80">
            {t("skills.description")}
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
      initial={{ opacity: 0, y: 30, rotateY: -15 }}
      animate={
        inView
          ? { opacity: 1, y: 0, rotateY: 0 }
          : { opacity: 0, y: 30, rotateY: -15 }
      }
      transition={{
        duration: 0.8,
        delay: 0.1 + index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        y: -5,
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className="relative overflow-hidden rounded-xl border bg-card p-6 transition-shadow hover:shadow-2xl hover:shadow-primary/20"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-5"
        animate={{
          background: [
            "linear-gradient(45deg, #3b82f6, #8b5cf6)",
            "linear-gradient(45deg, #8b5cf6, #ec4899)",
            "linear-gradient(45deg, #ec4899, #3b82f6)",
          ],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        className="relative z-10 mb-6 flex items-center gap-3"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="relative rounded-lg bg-primary/10 p-3 text-primary"
          whileHover={{
            scale: 1.1,
            rotate: [0, -5, 5, 0],
            backgroundColor: "rgb(var(--primary) / 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="h-6 w-6" />
          <motion.div
            className="absolute inset-0 rounded-lg bg-primary/20"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.2, opacity: 0.3 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.h3
          className="text-xl font-bold"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {category.title}
        </motion.h3>
      </motion.div>

      <div className="relative z-10 space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <SkillProgressBar
            key={skill.name}
            skill={skill}
            index={skillIndex}
            inView={inView}
            categoryIndex={index}
          />
        ))}
      </div>
    </motion.div>
  );
}

function SkillProgressBar({
  skill,
  index,
  inView,
  categoryIndex,
}: {
  skill: Skill;
  index: number;
  inView: boolean;
  categoryIndex: number;
}) {
  const getSkillColor = (level: number) => {
    if (level >= 90) return "from-green-500 to-emerald-500";
    if (level >= 80) return "from-blue-500 to-cyan-500";
    if (level >= 70) return "from-yellow-500 to-orange-500";
    return "from-red-500 to-pink-500";
  };

  const getGlowColor = (level: number) => {
    if (level >= 90) return "shadow-green-500/50";
    if (level >= 80) return "shadow-blue-500/50";
    if (level >= 70) return "shadow-yellow-500/50";
    return "shadow-red-500/50";
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{
        duration: 0.6,
        delay: 0.3 + categoryIndex * 0.1 + index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{ scale: 1.02, x: 5 }}
      className="group"
    >
      <div className="mb-2 flex items-center justify-between">
        <motion.span
          className="text-sm font-medium text-foreground/80 transition-colors group-hover:text-foreground"
          whileHover={{ scale: 1.05 }}
        >
          {skill.name}
        </motion.span>
        <motion.span
          className="text-xs font-bold text-foreground/60"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1 + categoryIndex * 0.1 + index * 0.1 }}
        >
          {skill.level}%
        </motion.span>
      </div>

      <div className="relative h-2 overflow-hidden rounded-full bg-muted/50">
        {/* Background glow */}
        <motion.div
          className={`absolute inset-0 rounded-full blur-sm ${getGlowColor(skill.level)} opacity-0 group-hover:opacity-50`}
          transition={{ duration: 0.3 }}
        />

        {/* Progress bar */}
        <motion.div
          className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} relative overflow-hidden rounded-full`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.5 + categoryIndex * 0.1 + index * 0.15,
            ease: "easeOut",
          }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 1 + categoryIndex * 0.1 + index * 0.1,
              ease: "linear",
            }}
          />

          {/* Pulse effect for high skills */}
          {skill.level >= 85 && (
            <motion.div
              className="absolute inset-0 rounded-full bg-white/20"
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 2 + index * 0.2,
              }}
            />
          )}
        </motion.div>

        {/* Particle effects for expert level skills */}
        {skill.level >= 90 && inView && (
          <div className="pointer-events-none absolute inset-0">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-white"
                initial={{
                  x: `${skill.level * 0.8}%`,
                  y: "50%",
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  x: `${skill.level * 0.8 + ((i * 7) % 20)}%`,
                  y: ["-20%", "120%"],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 3 + i * 0.5,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
