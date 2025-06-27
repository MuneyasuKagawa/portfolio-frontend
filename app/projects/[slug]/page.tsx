import { notFound } from "next/navigation";
import ProjectDetail from "@/components/project-detail";
import { designerProjects } from "@/lib/project-data";

// Convert designer projects array to object for easy lookup
const projectsData = designerProjects.reduce(
  (acc, project) => {
    acc[project.slug] = project;
    return acc;
  },
  {} as Record<string, (typeof designerProjects)[0]>
);

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}

export function generateStaticParams() {
  return designerProjects.map((project) => ({
    slug: project.slug,
  }));
}
