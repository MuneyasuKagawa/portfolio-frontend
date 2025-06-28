import ProjectDetail from "@/components/project-detail";
import { designerProjects } from "@/lib/project-data";
import { notFound } from "next/navigation";

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  const title = `${project.title} - Mun's Portfolio`;
  const description =
    project.description || `${project.title} project by Muneyasu Kagawa`;
  const imageUrl = project.image || "/icon.png";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://mun-k.com/projects/${slug}`,
      siteName: "Mun's Portfolio",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@m_kagawa_",
      creator: "@m_kagawa_",
      title,
      description,
      images: [imageUrl],
    },
  };
}
