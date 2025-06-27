"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import clsx from "clsx";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FiGithub } from "react-icons/fi";

import { designerProjects, type DesignerProject } from "@/lib/project-data";

const projects = designerProjects;

export default function DesignerProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative overflow-hidden py-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-light md:text-4xl">My Projects</h2>
          <p className="mx-auto max-w-2xl leading-relaxed text-foreground/70">
            Here are some of my recent projects. Each one was built to solve a
            specific problem and showcase different design and development
            skills.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <DesignerProjectCard
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

function DesignerProjectCard({
  project,
  index,
  inView,
}: {
  project: DesignerProject;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.8,
        delay: 0.2 + index * 0.15,
        ease: "easeOut",
      }}
      className="group relative"
    >
      <Card className="flex h-full min-h-[450px] flex-col overflow-hidden border-0 bg-card/80 shadow-lg backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
        {/* Elegant gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-[0.02]"
          style={{
            background:
              "linear-gradient(135deg, var(--primary) 0%, var(--primary) 50%, transparent 100%)",
          }}
        />

        {/* Image container with sophisticated hover effect */}
        <motion.div
          className="relative aspect-video overflow-hidden bg-white"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={800}
            height={600}
            className={clsx(
              "h-full w-full object-contain transition-all duration-700 group-hover:scale-110",
              project.imagePadding
            )}
          />

          {/* Elegant overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />

          {/* Subtle border highlight */}
          <motion.div
            className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20"
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </motion.div>

        <CardContent className="relative z-10 flex flex-1 flex-col justify-between p-6">
          <div>
            <motion.h3
              className="duration-400 mb-3 text-xl font-medium transition-colors group-hover:text-primary"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              {project.title}
            </motion.h3>
            <motion.p
              className="duration-400 mb-4 leading-relaxed text-foreground/70 transition-colors group-hover:text-foreground/85"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {project.description}
            </motion.p>
          </div>

          <div>
            <motion.div
              className="mb-6 flex flex-wrap gap-2"
              initial={{ opacity: 0.9 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {project.tags.map((tag, tagIndex) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    inView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{
                    duration: 0.4,
                    delay: 0.4 + index * 0.1 + tagIndex * 0.05,
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2 },
                  }}
                >
                  <Badge
                    variant="secondary"
                    className="border border-transparent transition-all duration-300 hover:border-primary/20 hover:bg-primary/10 hover:text-primary"
                  >
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0.9 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="border-primary/30 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Link href={`/projects/${project.slug}`}>View Details</Link>
                </Button>
              </motion.div>

              {project.githubUrl && (
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="border-gray-300 transition-all duration-300 hover:border-gray-800 hover:bg-gray-800 hover:text-white"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub className="mr-1 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </motion.div>
              )}

              {/* <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="sm"
                  asChild
                  className="bg-gradient-to-r from-primary to-purple-500 shadow-md transition-all duration-300 hover:from-primary/90 hover:to-purple-500/90 hover:shadow-lg"
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-1 h-4 w-4" />
                    Live Site
                  </a>
                </Button>
              </motion.div> */}
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
