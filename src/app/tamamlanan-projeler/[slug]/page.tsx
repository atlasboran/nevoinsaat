import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { completedProjects } from "@/data/projects";
import ProjectDetailPage from "../../projeler/[slug]/ProjectDetailPage";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return completedProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = completedProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} | Tamamlanan Proje`,
    description: project.shortDescription,
    alternates: { canonical: `https://nevoinsaat.com/tamamlanan-projeler/${slug}` },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = completedProjects.find((p) => p.slug === slug);
  if (!project) notFound();
  return <ProjectDetailPage project={project} />;
}
