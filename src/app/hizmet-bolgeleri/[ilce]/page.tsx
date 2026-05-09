import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ankaraDistricts } from '@/data/districts';
import IlcePage from './IlcePage';

export async function generateStaticParams() {
  return ankaraDistricts.map((district) => ({
    ilce: district.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ ilce: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const district = ankaraDistricts.find(d => d.slug === resolvedParams.ilce);
  if (!district) return {};

  return {
    title: `${district.name} İnşaat Firması | Nevo İnşaat`,
    description: `Ankara ${district.name} bölgesinde anahtar teslim inşaat, konut, villa ve taahhüt projeleriniz için bölgenin lider inşaat markası Nevo İnşaat güvencesiyle tanışın.`,
    alternates: { canonical: `https://nevoinsaat.com/hizmet-bolgeleri/${district.slug}` },
  };
}

export default async function Page({ params }: { params: Promise<{ ilce: string }> }) {
  const resolvedParams = await params;
  const district = ankaraDistricts.find(d => d.slug === resolvedParams.ilce);
  
  if (!district) {
    notFound();
  }

  return <IlcePage district={district} />;
}
