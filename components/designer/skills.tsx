"use client";

import { motion, useInView } from "framer-motion";
import {
  Heart,
  Layers,
  Lightbulb,
  Monitor,
  Palette,
  Users,
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
  color: string;
};

const getSkillCategories = (t: (key: string) => string): Category[] => [
  {
    title: t("designer_skills.design_tools"),
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Figma", level: 95 },
      { name: "Adobe Creative Suite", level: 85 },
      { name: "Sketch", level: 80 },
      { name: "Principle", level: 75 },
      { name: "Framer", level: 70 },
      { name: "InVision", level: 80 },
    ],
  },
  {
    title: t("designer_skills.ui_ux_design"),
    icon: Monitor,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "User Interface Design", level: 90 },
      { name: "User Experience Design", level: 88 },
      { name: "Responsive Design", level: 92 },
      { name: "Design Systems", level: 85 },
      { name: "Prototyping", level: 90 },
      { name: "Wireframing", level: 88 },
    ],
  },
  {
    title: t("designer_skills.research_testing"),
    icon: Users,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "User Research", level: 85 },
      { name: "Usability Testing", level: 80 },
      { name: "A/B Testing", level: 75 },
      { name: "User Interviews", level: 85 },
      { name: "Surveys & Analytics", level: 80 },
      { name: "Journey Mapping", level: 82 },
    ],
  },
  {
    title: t("designer_skills.development"),
    icon: Layers,
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "HTML5 & CSS3", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 88 },
      { name: "Next.js", level: 82 },
      { name: "Tailwind CSS", level: 90 },
      { name: "C#.NET", level: 80 },
    ],
  },
  {
    title: t("designer_skills.soft_skills"),
    icon: Heart,
    color: "from-rose-500 to-pink-500",
    skills: [
      { name: "Team Collaboration", level: 80 },
      { name: "Client Communication", level: 88 },
      { name: "Problem Solving", level: 90 },
      { name: "Project Management", level: 85 },
      { name: "Design Thinking", level: 90 },
      { name: "Mentoring", level: 80 },
    ],
  },
  {
    title: t("designer_skills.innovation"),
    icon: Lightbulb,
    color: "from-yellow-500 to-orange-500",
    skills: [
      { name: "Design Strategy", level: 85 },
      { name: "Micro-interactions", level: 88 },
      { name: "Accessibility Design", level: 85 },
    ],
  },
];

export default function DesignerSkills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();
  const skillCategories = getSkillCategories(t);

  return (
    <section id="skills" className="relative overflow-hidden bg-muted/30 py-20">
      {/* Elegant background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-primary to-purple-500 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-light md:text-4xl">
            {t("designer_skills.title")}
          </h2>
          <p className="mx-auto max-w-2xl leading-relaxed text-foreground/70">
            {t("designer_skills.description")}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <DesignerSkillCard
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

function DesignerSkillCard({
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
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={
        inView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 40, scale: 0.95 }
      }
      transition={{
        duration: 0.8,
        delay: 0.1 + index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
    >
      {/* Elegant gradient background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br opacity-0 ${category.color}`}
        whileHover={{ opacity: 0.02 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="relative z-10 mb-6 flex items-center gap-3"
        whileHover={{ x: 2 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className={`relative rounded-xl bg-gradient-to-br ${category.color} p-3 text-white shadow-lg`}
          whileHover={{
            scale: 1.1,
            rotate: [0, -2, 2, 0],
          }}
          transition={{ duration: 0.4 }}
        >
          <Icon className="h-6 w-6" />
          <motion.div
            className="absolute inset-0 rounded-xl bg-white/20"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1, opacity: 0.3 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.h3
          className="text-xl font-medium"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {category.title}
        </motion.h3>
      </motion.div>

      <div className="relative z-10 space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <DesignerSkillProgressBar
            key={skill.name}
            skill={skill}
            index={skillIndex}
            inView={inView}
            categoryIndex={index}
            color={category.color}
          />
        ))}
      </div>
    </motion.div>
  );
}

function DesignerSkillProgressBar({
  skill,
  index,
  inView,
  categoryIndex,
  color,
}: {
  skill: Skill;
  index: number;
  inView: boolean;
  categoryIndex: number;
  color: string;
}) {
  const getSkillOpacity = (level: number) => {
    if (level >= 90) return "opacity-90";
    if (level >= 80) return "opacity-80";
    if (level >= 70) return "opacity-70";
    return "opacity-60";
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{
        duration: 0.6,
        delay: 0.3 + categoryIndex * 0.1 + index * 0.05,
        ease: "easeOut",
      }}
      whileHover={{ scale: 1.02, x: 4 }}
      className="group"
    >
      <div className="mb-2 flex items-center justify-between">
        <motion.span
          className="text-sm font-medium text-foreground/80 transition-colors group-hover:text-foreground"
          whileHover={{ scale: 1.02 }}
        >
          {skill.name}
        </motion.span>
        <motion.span
          className="text-xs font-medium text-foreground/60"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1 + categoryIndex * 0.1 + index * 0.05 }}
        >
          {skill.level}%
        </motion.span>
      </div>

      <div className="relative h-2 overflow-hidden rounded-full bg-muted/50">
        {/* Progress bar with elegant gradient */}
        <motion.div
          className={`h-full bg-gradient-to-r ${color} ${getSkillOpacity(skill.level)} relative overflow-hidden rounded-full`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{
            duration: 1.5,
            delay: 0.5 + categoryIndex * 0.1 + index * 0.1,
            ease: "easeOut",
          }}
        >
          {/* Elegant shimmer effect */}
          <motion.div
            className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: 1.2 + categoryIndex * 0.1 + index * 0.05,
              ease: "linear",
            }}
          />

          {/* Subtle pulse for high skills */}
          {skill.level >= 85 && (
            <motion.div
              className="absolute inset-0 rounded-full bg-white/10"
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 2.5 + index * 0.3,
              }}
            />
          )}
        </motion.div>

        {/* Gentle glow effect on hover */}
        <motion.div
          className={`absolute inset-0 rounded-full bg-gradient-to-r ${color} opacity-0 blur-sm group-hover:opacity-20`}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}
