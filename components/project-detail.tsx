"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useTranslation } from "@/lib/use-translation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, Calendar, ExternalLink, Users, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface ProjectDetailProps {
  project: {
    title: string;
    subtitle?: string;
    description: string;
    image: string;
    imagePadding?: string;
    tags: string[];
    duration?: string;
    role?: string;
    team?: string;
    tools?: string[];
    liveUrl?: string;
    githubUrl?: string;
    overview?: {
      problem?: string;
      purpose?: string;
      goal?: string[];
      target?: string[];
      solution?: string;
    };
    features?: string[];
    challenges?: Array<{
      title: string;
      description: string;
      solution: string;
    }>;
    results?: {
      finalWork?: string;
      learnings?: string[];
      nextSteps?: string[];
    };
  };
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" asChild>
              <Link href="/#projects" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                {t("project_detail.back_to_projects")}
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="mb-6 text-xl text-foreground/80">
                {project.subtitle}
              </p>
            )}
            <p className="mx-auto mb-8 max-w-3xl text-lg text-foreground/70">
              {project.description}
            </p>

            <div className="mb-8 flex flex-wrap justify-center gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mb-12 aspect-video overflow-hidden rounded-xl bg-white shadow-2xl"
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className={`object-contain ${project.imagePadding || ""}`}
            />
          </motion.div>

          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-16 grid gap-6 md:grid-cols-3"
          >
            {project.duration && (
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Calendar className="h-5 w-5" />
                    {t("common.duration")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{project.duration}</p>
                </CardContent>
              </Card>
            )}

            {(project.role || project.team) && (
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="h-5 w-5" />
                    {t("common.team_role")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {project.role && (
                    <p className="text-foreground/80">{project.role}</p>
                  )}
                  {project.team && (
                    <p className="text-sm text-foreground/60">{project.team}</p>
                  )}
                </CardContent>
              </Card>
            )}

            {(project.tools || project.tags) && (
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Wrench className="h-5 w-5" />
                    {t("common.technologies_used")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {(project.tools || project.tags).map((tool) => (
                      <Badge key={tool} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      {project.overview && (
        <ProjectSection
          title={t("project_detail.project_overview")}
          content={
            <div className="space-y-8">
              {project.overview.problem && (
                <Card className="border-l-4 border-red-500 p-6">
                  <h4 className="mb-3 flex items-center gap-2 text-lg font-semibold text-red-600">
                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    {t("project_detail.problem_statement")}
                  </h4>
                  <p className="leading-relaxed text-foreground/80">
                    {project.overview.problem}
                  </p>
                </Card>
              )}

              {project.overview.purpose && (
                <Card className="border-l-4 border-blue-500 p-6">
                  <h4 className="mb-3 flex items-center gap-2 text-lg font-semibold text-blue-600">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    {t("project_detail.purpose")}
                  </h4>
                  <p className="leading-relaxed text-foreground/80">
                    {project.overview.purpose}
                  </p>
                </Card>
              )}

              {project.overview.goal && (
                <Card className="border-l-4 border-green-500 p-6">
                  <h4 className="mb-3 flex items-center gap-2 text-lg font-semibold text-green-600">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    {t("project_detail.goals")}
                  </h4>
                  <ul className="space-y-3">
                    {project.overview.goal.map((goal, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-green-500"></div>
                        <span className="leading-relaxed text-foreground/80">
                          {goal}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}

              {project.overview.solution && (
                <Card className="border-l-4 border-purple-500 p-6">
                  <h4 className="mb-3 flex items-center gap-2 text-lg font-semibold text-purple-600">
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                    {t("common.solution")}
                  </h4>
                  <p className="leading-relaxed text-foreground/80">
                    {project.overview.solution}
                  </p>
                </Card>
              )}
            </div>
          }
        />
      )}

      {/* Features */}
      {project.features && (
        <ProjectSection
          title={t("project_detail.key_features")}
          content={
            <Card className="border-l-4 border-blue-500 p-6">
              <h4 className="mb-4 flex items-center gap-2 text-lg font-semibold text-blue-600">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                {t("project_detail.features_implemented")}
              </h4>
              <ul className="space-y-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></div>
                    <span className="leading-relaxed text-foreground/80">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          }
        />
      )}

      {/* Challenges */}
      {project.challenges && (
        <ProjectSection
          title={t("project_detail.challenges_solutions")}
          content={
            <div className="space-y-6">
              {project.challenges.map((challenge, index) => (
                <Card key={index} className="border-l-4 border-orange-500 p-6">
                  <h4 className="mb-3 flex items-center gap-2 text-lg font-semibold text-orange-600">
                    <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                    {challenge.title}
                  </h4>
                  <p className="mb-4 leading-relaxed text-foreground/80">
                    {challenge.description}
                  </p>
                  <div className="rounded-lg bg-muted/50 p-4">
                    <p className="mb-1 text-sm font-medium text-foreground/90">
                      {t("common.solution")}:
                    </p>
                    <p className="leading-relaxed text-foreground/70">
                      {challenge.solution}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          }
        />
      )}

      {/* Results */}
      {project.results && (
        <ProjectSection
          title={t("project_detail.results_learning")}
          content={
            <div className="space-y-8">
              {project.results.finalWork && (
                <Card className="border-l-4 border-emerald-500 p-6">
                  <h4 className="mb-4 flex items-center gap-2 text-lg font-semibold text-emerald-600">
                    <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                    {t("project_detail.final_results")}
                  </h4>
                  <p className="leading-relaxed text-foreground/80">
                    {project.results.finalWork}
                  </p>
                </Card>
              )}

              {project.results.learnings && (
                <Card className="border-l-4 border-sky-500 p-6">
                  <h4 className="mb-4 flex items-center gap-2 text-lg font-semibold text-sky-600">
                    <div className="h-2 w-2 rounded-full bg-sky-500"></div>
                    {t("project_detail.what_learned")}
                  </h4>
                  <ul className="space-y-4">
                    {project.results.learnings.map((learning, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-sky-500"></div>
                        <span className="leading-relaxed text-foreground/80">
                          {learning}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}

              {project.results.nextSteps && (
                <Card className="border-l-4 border-purple-500 p-6">
                  <h4 className="mb-4 flex items-center gap-2 text-lg font-semibold text-purple-600">
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                    {t("project_detail.next_steps")}
                  </h4>
                  <ul className="space-y-4">
                    {project.results.nextSteps.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-500"></div>
                        <span className="leading-relaxed text-foreground/80">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}
            </div>
          }
        />
      )}

      {/* Links */}
      {(project.liveUrl || project.githubUrl) && (
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center gap-4">
              {project.liveUrl && (
                <Button asChild size="lg">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {t("project_detail.view_live_site")}
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button asChild size="lg" variant="outline">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {t("project_detail.view_code")}
                  </a>
                </Button>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Back to Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("project_detail.back_to_all_projects")}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function ProjectSection({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 odd:bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="mb-12 text-center text-2xl font-bold md:text-3xl">
            {title}
          </h3>
          <div className="mx-auto max-w-4xl">{content}</div>
        </motion.div>
      </div>
    </section>
  );
}
