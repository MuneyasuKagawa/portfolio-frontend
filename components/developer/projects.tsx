"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import clsx from "clsx";
import {
  motion,
  useInView,
} from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
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
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className="relative h-full"
    >
      <div className="h-full">
        <Card className="group relative flex h-full min-h-[450px] flex-col overflow-hidden border-2 backdrop-blur-sm dark:border-neutral-700">
          <div className="relative aspect-video overflow-hidden bg-white">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={800}
              height={600}
              className={clsx(
                "h-full w-full object-contain",
                project.imagePadding
              )}
            />
          </div>

          <CardContent className="relative z-10 flex flex-1 flex-col justify-between p-6">
            <div>
              <h3 className="mb-2 text-xl font-bold">
                {project.title}
              </h3>
              <p className="mb-4 text-foreground/70">
                {project.description}
              </p>
            </div>

            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-2">
                {project.githubUrl && (
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
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
                )}
                <Button
                  size="sm"
                  asChild
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
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
