"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import clsx from "clsx";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FiGithub } from "react-icons/fi";

type Project = {
  title: string;
  description: string;
  image: string;
  imagePadding?: string;
  tags: string[];
  liveUrl: string;
  githubUrl?: string;
  slug: string;
};
const projects: Project[] = [
  {
    title: "Automatic update system",
    description:
      "A web application that centralizes store information management and automatically updates multiple portal sites on a scheduled basis, saving businesses time while ensuring consistent online presence.",
    image: "/mrvenrey.svg",
    imagePadding: "px-16",
    tags: ["C#.NET", "Angular", "NgRx", "SQL Server", "Jenkins", "Azure"],
    liveUrl: "https://mr.venrey.jp/",
    slug: "automatic-update-system",
  },
  {
    title: "Mirai Translator Plus",
    description:
      "I created a translation service for consumers using React and Chakra-UI. This service lets users easily translate text into multiple languages using machine translation technology.",
    image: "/mirai.svg",
    imagePadding: "px-16",
    tags: [
      "React",
      "Chakra-UI",
      "Jest",
      "Cypress",
      "StoryBook",
      "Docker",
      "AWS",
    ],
    liveUrl: "https://plus.miraitranslate.com/",
    slug: "mirai-translator-plus",
  },
  {
    title: "Sumi Technology",
    description:
      "I built a company website using Next.js and Tailwind CSS, creating a fast, user-friendly site with clean design and easy navigation.",
    image: "/sumi.webp",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "PHP",
      "reCAPTCHA",
      "Github Actions",
    ],
    liveUrl: "https://sumitechnology.jp/",
    slug: "sumi-technology",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">My Projects</h2>
          <p className="mx-auto max-w-2xl text-foreground/80">
            Here are some of my recent projects. Each one was built to solve a
            specific problem and showcase different skills and technologies.
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
  project: Project;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
    >
      <Card className="group flex h-full flex-col overflow-hidden dark:border-neutral-700">
        <div className="relative aspect-video overflow-hidden bg-white">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={800}
            height={600}
            className={clsx(
              "h-full w-full object-contain transition-transform duration-500 group-hover:scale-105",
              project.imagePadding
            )}
          />
        </div>
        <CardContent className="flex flex-1 flex-col justify-between p-6">
          <div>
            <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
            <p className="mb-4 text-foreground/70">{project.description}</p>
          </div>

          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-2">
              <Button size="sm" variant="outline" asChild>
                <Link href={`/projects/${project.slug}`}>
                  View Details
                </Link>
              </Button>
              {project.githubUrl && (
                <Button size="sm" variant="outline" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub className="mr-1 h-4 w-4" />
                    Code
                  </a>
                </Button>
              )}
              <Button size="sm" asChild>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-1 h-4 w-4" />
                  Live Site
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
