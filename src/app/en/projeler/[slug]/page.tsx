import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, completedProjects } from "@/data/projects";
import ProjectDetailPage from "@/app/projeler/[slug]/ProjectDetailPage";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const allProjects = [...projects, ...completedProjects];
  return allProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const allProjects = [...projects, ...completedProjects];
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} | Nevo Insaat Project`,
    description: project.shortDescription,
    alternates: { canonical: `https://nevoinsaat.com/en/projeler/${slug}` },
    openGraph: {
      title: project.name,
      description: project.shortDescription,
      images: [project.coverImage],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const allProjects = [...projects, ...completedProjects];
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) notFound();
  return <ProjectDetailPage project={project} isEn={true} />;
}
