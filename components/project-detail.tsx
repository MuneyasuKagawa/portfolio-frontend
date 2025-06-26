"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Calendar, Users, Wrench } from "lucide-react"

interface ProjectDetailProps {
  project: {
    title: string
    subtitle?: string
    description: string
    image: string
    imagePadding?: string
    tags: string[]
    duration?: string
    role?: string
    team?: string
    tools?: string[]
    liveUrl?: string
    githubUrl?: string
    overview?: {
      problem?: string
      purpose?: string
      goal?: string[]
      target?: string[]
      solution?: string
    }
    features?: string[]
    challenges?: string[]
    results?: {
      finalWork?: string
      learnings?: string[]
      nextSteps?: string[]
    }
  }
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" asChild>
            <Link href="/#projects" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
            {project.subtitle && (
              <p className="text-xl text-foreground/80 mb-6">{project.subtitle}</p>
            )}
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto mb-8">{project.description}</p>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
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
            className="relative aspect-video rounded-xl overflow-hidden shadow-2xl mb-12 bg-white"
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
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {project.duration && (
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Calendar className="h-5 w-5" />
                    Duration
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
                    Team & Role
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {project.role && <p className="text-foreground/80">{project.role}</p>}
                  {project.team && <p className="text-sm text-foreground/60">{project.team}</p>}
                </CardContent>
              </Card>
            )}

            {(project.tools || project.tags) && (
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Wrench className="h-5 w-5" />
                    Technologies Used
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
          title="Project Overview"
          content={
            <div className="space-y-8">
              {project.overview.problem && (
                <Card className="p-6 border-l-4 border-red-500">
                  <h4 className="text-lg font-semibold mb-3 text-red-600 flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    Problem Statement
                  </h4>
                  <p className="text-foreground/80 leading-relaxed">{project.overview.problem}</p>
                </Card>
              )}

              {project.overview.purpose && (
                <Card className="p-6 border-l-4 border-blue-500">
                  <h4 className="text-lg font-semibold mb-3 text-blue-600 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Purpose
                  </h4>
                  <p className="text-foreground/80 leading-relaxed">{project.overview.purpose}</p>
                </Card>
              )}

              {project.overview.goal && (
                <Card className="p-6 border-l-4 border-green-500">
                  <h4 className="text-lg font-semibold mb-3 text-green-600 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Goals
                  </h4>
                  <ul className="space-y-3">
                    {project.overview.goal.map((goal, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                        <span className="text-foreground/80 leading-relaxed">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}

              {project.overview.solution && (
                <Card className="p-6 border-l-4 border-purple-500">
                  <h4 className="text-lg font-semibold mb-3 text-purple-600 flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Solution
                  </h4>
                  <p className="text-foreground/80 leading-relaxed">{project.overview.solution}</p>
                </Card>
              )}
            </div>
          }
        />
      )}

      {/* Features */}
      {project.features && (
        <ProjectSection
          title="Key Features"
          content={
            <Card className="p-6 border-l-4 border-blue-500">
              <h4 className="text-lg font-semibold mb-4 text-blue-600 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Features Implemented
              </h4>
              <ul className="space-y-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                    <span className="text-foreground/80 leading-relaxed">{feature}</span>
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
          title="Challenges & Solutions"
          content={
            <Card className="p-6 border-l-4 border-orange-500">
              <h4 className="text-lg font-semibold mb-4 text-orange-600 flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                Technical Challenges
              </h4>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                    <span className="text-foreground/80 leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </Card>
          }
        />
      )}

      {/* Results */}
      {project.results && (
        <ProjectSection
          title="Results & Learning"
          content={
            <div className="space-y-8">
              {project.results.finalWork && (
                <Card className="p-6 border-l-4 border-emerald-500">
                  <h4 className="text-lg font-semibold mb-4 text-emerald-600 flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    Final Results
                  </h4>
                  <p className="text-foreground/80 leading-relaxed">{project.results.finalWork}</p>
                </Card>
              )}

              {project.results.learnings && (
                <Card className="p-6 border-l-4 border-sky-500">
                  <h4 className="text-lg font-semibold mb-4 text-sky-600 flex items-center gap-2">
                    <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                    What I Learned
                  </h4>
                  <ul className="space-y-4">
                    {project.results.learnings.map((learning, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-sky-500 mt-2 flex-shrink-0"></div>
                        <span className="text-foreground/80 leading-relaxed">{learning}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}

              {project.results.nextSteps && (
                <Card className="p-6 border-l-4 border-purple-500">
                  <h4 className="text-lg font-semibold mb-4 text-purple-600 flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Next Steps
                  </h4>
                  <ul className="space-y-4">
                    {project.results.nextSteps.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                        <span className="text-foreground/80 leading-relaxed">{step}</span>
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
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center gap-4">
              {project.liveUrl && (
                <Button asChild size="lg">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live Site
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button asChild size="lg" variant="outline">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Code
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
              Back to All Projects
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

function ProjectSection({ title, content }: { title: string; content: React.ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 odd:bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">{title}</h3>
          <div className="max-w-4xl mx-auto">{content}</div>
        </motion.div>
      </div>
    </section>
  )
}