"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Key,
  Building2,
  Home,
  Store,
  Handshake,
  Compass,
  ArrowRight,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const iconMap: Record<string, React.ReactNode> = {
  Key: <Key className="w-7 h-7" />,
  Building2: <Building2 className="w-7 h-7" />,
  Home: <Home className="w-7 h-7" />,
  Store: <Store className="w-7 h-7" />,
  Handshake: <Handshake className="w-7 h-7" />,
  Compass: <Compass className="w-7 h-7" />,
};

const servicesData = [
  {
    slug: "anahtar-teslim-insaat",
    name: "Anahtar Teslim İnşaat",
    icon: "Key",
    description:
      "Projelendirmeden teslimata kadar tüm süreçleri profesyonel ekibimizle yönetiyoruz.",
  },
  {
    slug: "konut-projeleri",
    name: "Konut Projeleri",
    icon: "Building2",
    description:
      "Modern ve güvenli yaşam alanları inşa ediyoruz. Depreme dayanıklı, kaliteli yapılar.",
  },
  {
    slug: "villa-insaati",
    name: "Villa İnşaatı",
    icon: "Home",
    description:
      "Hayalinizdeki villayı kişiye özel tasarım ve premium malzemelerle inşa ediyoruz.",
  },
  {
    slug: "ticari-yapi-insaati",
    name: "Ticari Yapı İnşaatı",
    icon: "Store",
    description:
      "İş merkezleri, mağazalar ve ticari alanlar için modern yapı çözümleri.",
  },
  {
    slug: "taahhut-hizmetleri",
    name: "Taahhüt Hizmetleri",
    icon: "Handshake",
    description:
      "Kamu ve özel sektör projelerinde güvenilir taahhüt hizmetleri sunuyoruz.",
  },
  {
    slug: "proje-gelistirme",
    name: "Proje Geliştirme",
    icon: "Compass",
    description:
      "Arsanızı değerli projelere dönüştürmek için fizibilite ve proje geliştirme.",
  },
];

const servicesDataEn: Record<string, { name: string; description: string }> = {
  "anahtar-teslim-insaat": {
    name: "Turnkey Construction",
    description: "We manage all processes from design to delivery with our professional team.",
  },
  "konut-projeleri": {
    name: "Residential Projects",
    description: "We build modern and safe living spaces. Earthquake-resistant, high-quality structures.",
  },
  "villa-insaati": {
    name: "Villa Construction",
    description: "We build your dream villa with custom design and premium materials.",
  },
  "ticari-yapi-insaati": {
    name: "Commercial Construction",
    description: "Modern construction solutions for business centers, shops, and commercial spaces.",
  },
  "taahhut-hizmetleri": {
    name: "Contracting Services",
    description: "We offer reliable contracting services in public and private sector projects.",
  },
  "proje-gelistirme": {
    name: "Project Development",
    description: "Feasibility and project development to transform your land into valuable projects.",
  },
};

export default function ServicesSection({ isEn = false }: { isEn?: boolean }) {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle={isEn ? "Our Expertise" : "Hizmetlerimiz"}
          title={isEn ? "Premium Services" : "Geniş Hizmet Yelpazesi"}
          description={isEn 
            ? "We offer all the services you need in the construction sector under a single roof."
            : "İnşaat sektöründe ihtiyacınız olan tüm hizmetleri tek çatı altında sunuyoruz."}
          light
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, i) => {
            const displayName = isEn ? servicesDataEn[service.slug]?.name || service.name : service.name;
            const displayDesc = isEn ? servicesDataEn[service.slug]?.description || service.description : service.description;
            
            return (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
            >
              <Link
                href={`/hizmetler/${service.slug}`}
                className="group block p-8 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.08] hover:border-accent/20 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                  {iconMap[service.icon]}
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {displayName}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {displayDesc}
                </p>
                <span className="inline-flex items-center gap-2 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                  {isEn ? "View Details" : "Detaylı Bilgi"}
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
