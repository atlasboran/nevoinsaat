import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services } from "@/data/services";
import ServiceDetailPage from "./ServiceDetailPage";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} | Nevo İnşaat Hizmetleri`,
    description: service.shortDescription,
    alternates: { canonical: `https://nevoinsaat.com/hizmetler/${slug}` },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  return <ServiceDetailPage service={service} />;
}
