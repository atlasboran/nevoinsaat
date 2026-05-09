import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { seoPages } from "@/data/seoPages";
import SeoLandingPage from "./SeoLandingPage";

interface Props {
  params: Promise<{ seoSlug: string }>;
}

export async function generateStaticParams() {
  return seoPages.map((p) => ({ seoSlug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { seoSlug } = await params;
  const page = seoPages.find((p) => p.slug === seoSlug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `https://nevoinsaat.com/${seoSlug}` },
    openGraph: {
      title: page.title,
      description: page.description,
    },
  };
}

export default async function Page({ params }: Props) {
  const { seoSlug } = await params;
  const page = seoPages.find((p) => p.slug === seoSlug);
  if (!page) notFound();
  return <SeoLandingPage page={page} />;
}
