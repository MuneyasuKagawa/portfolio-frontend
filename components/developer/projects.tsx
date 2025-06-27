"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import clsx from "clsx";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { FiGithub } from "react-icons/fi";

import { developerProjects, type DeveloperProject } from "@/lib/project-data";
import { useTranslation } from "@/lib/use-translation";

const projects = developerProjects;

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            {t("projects.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-foreground/80">
            {t("projects.developer_description")}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              inView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: DeveloperProject;
  index: number;
  inView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);

  // Outer container rotations (subtle background effect)
  const rotateX = useTransform(cardY, [-150, 150], [0.5, -0.5]);
  const rotateY = useTransform(cardX, [-150, 150], [-0.5, 0.5]);

  // Card rotations (more pronounced but subtle)
  const cardRotateX = useSpring(useTransform(cardY, [-150, 150], [1.5, -1.5]), {
    stiffness: 300,
    damping: 30,
  });
  const cardRotateY = useSpring(useTransform(cardX, [-150, 150], [-1.5, 1.5]), {
    stiffness: 300,
    damping: 30,
  });

  // Glow effect positions
  const glowX = useTransform(cardX, [-150, 150], [-40, 40]);
  const glowY = useTransform(cardY, [-150, 150], [-40, 40]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const offsetX = e.clientX - centerX;
    const offsetY = e.clientY - centerY;

    cardX.set(offsetX);
    cardY.set(offsetY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    cardX.set(0);
    cardY.set(0);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // クリックイベントを停止せず、3D効果を維持
    e.stopPropagation();
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      style={{
        perspective: 800,
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="relative"
      whileHover={{ z: 20 }}
    >
      {/* Glow effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-lg opacity-0"
        animate={{
          opacity: isHovered ? 0.6 : 0,
        }}
        style={{
          background: `radial-gradient(300px circle at ${glowX}px ${glowY}px, rgba(59, 130, 246, 0.4), transparent 40%)`,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Holographic overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-lg opacity-0"
        animate={{
          opacity: isHovered ? 0.3 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(${(Math.atan2(cardY.get(), cardX.get()) * 180) / Math.PI + 90}deg, 
              transparent 30%, 
              rgba(255, 255, 255, 0.1) 50%, 
              transparent 70%)`,
            transform: `translate(${cardX.get() * 0.1}px, ${cardY.get() * 0.1}px)`,
          }}
        />
      </motion.div>

      <motion.div
        className="h-full"
        style={{
          rotateX: cardRotateX,
          rotateY: cardRotateY,
          transformStyle: "preserve-3d",
        }}
        transition={{ velocity: 0 }}
      >
        <Card className="group relative flex h-full min-h-[450px] flex-col overflow-hidden border-2 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 dark:border-neutral-700">
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-10"
            animate={{
              background: [
                "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                "linear-gradient(45deg, #8b5cf6, #ec4899)",
                "linear-gradient(45deg, #ec4899, #3b82f6)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <motion.div
            className="relative aspect-video overflow-hidden bg-white"
            style={{ transformStyle: "preserve-3d" }}
            animate={{
              z: isHovered ? 20 : 0,
            }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={800}
              height={600}
              className={clsx(
                "h-full w-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:brightness-110",
                project.imagePadding
              )}
            />
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
              animate={isHovered ? { x: ["-100%", "100%"] } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          <CardContent className="relative z-10 flex flex-1 flex-col justify-between p-6">
            <div>
              <motion.h3
                className="mb-2 text-xl font-bold transition-colors duration-300 group-hover:text-primary"
                style={{ transformStyle: "preserve-3d" }}
                animate={{
                  z: isHovered ? 15 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                {project.title}
              </motion.h3>
              <motion.p
                className="mb-4 text-foreground/70 transition-colors duration-300 group-hover:text-foreground/90"
                style={{ transformStyle: "preserve-3d" }}
                animate={{
                  z: isHovered ? 10 : 0,
                }}
                transition={{ duration: 0.2, delay: 0.05 }}
              >
                {project.description}
              </motion.p>
            </div>

            <div>
              <motion.div
                className="mb-4 flex flex-wrap gap-2"
                style={{ transformStyle: "preserve-3d" }}
                animate={{
                  z: isHovered ? 5 : 0,
                }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                {project.tags.map((tag) => (
                  <motion.div
                    key={tag}
                    whileHover={{ scale: 1.1, z: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Badge
                      variant="secondary"
                      className="transition-all duration-200 hover:bg-primary/20 hover:text-primary"
                    >
                      {tag}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="mt-auto flex flex-wrap gap-2"
                style={{ transformStyle: "preserve-3d" }}
                animate={{
                  z: isHovered ? 15 : 0,
                }}
                transition={{ duration: 0.2, delay: 0.15 }}
              >
                {project.githubUrl && (
                  <motion.div
                    whileHover={{ scale: 1.05, z: 20 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="transition-all duration-200 hover:bg-gray-800 hover:text-white"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiGithub className="mr-1 h-4 w-4" />
                        {t("common.code")}
                      </a>
                    </Button>
                  </motion.div>
                )}
                <motion.div
                  whileHover={{ scale: 1.05, z: 20 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="sm"
                    asChild
                    className="transition-all duration-200 hover:bg-primary/90"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-1 h-4 w-4" />
                      {t("common.product_page")}
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
