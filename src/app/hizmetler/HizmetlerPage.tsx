"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Key, Building2, Home, Store, Handshake, Compass, ArrowRight, Layout, Warehouse } from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, React.ReactNode> = {
  Key: <Key className="w-8 h-8" />,
  Building2: <Building2 className="w-8 h-8" />,
  Home: <Home className="w-8 h-8" />,
  Store: <Store className="w-8 h-8" />,
  Handshake: <Handshake className="w-8 h-8" />,
  Compass: <Compass className="w-8 h-8" />,
  Layout: <Layout className="w-8 h-8" />,
  Warehouse: <Warehouse className="w-8 h-8" />,
};

const enTranslations: Record<string, { name: string, shortDescription: string }> = {
  "anahtar-teslim-insaat": { name: "Turnkey Construction", shortDescription: "We manage all processes from design to delivery." },
  "konut-projeleri": { name: "Residential Projects", shortDescription: "We build modern and safe living spaces." },
  "villa-insaati": { name: "Villa Construction", shortDescription: "We build your dream villa turnkey." },
  "ticari-yapi-insaati": { name: "Commercial Construction", shortDescription: "We build business centers, stores and commercial areas." },
  "taahhut-hizmetleri": { name: "Contracting Services", shortDescription: "We complete your projects with professional contracting services." },
  "proje-gelistirme": { name: "Project Development", shortDescription: "We transform your land into valuable projects." },
  "ozel-tasarim-evler": { name: "Custom Designed Homes", shortDescription: "We build custom-designed single or mass housing suitable for your land and lifestyle." },
  "prefabrik-evler": { name: "Prefabricated Custom Homes", shortDescription: "Modern, fast-installed and highly durable prefabricated and steel house solutions." }
};

export default function HizmetlerPage({ isEn = false }: { isEn?: boolean }) {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-[0.2em] rounded-full mb-6">
              {isEn ? "Our Services" : "Hizmetlerimiz"}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {isEn ? (
                <>Professional <span className="text-gradient-gold">Construction Services</span></>
              ) : (
                <>Profesyonel <span className="text-gradient-gold">İnşaat Hizmetleri</span></>
              )}
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              {isEn 
                ? "We offer all the services you need in the construction sector under one roof with our professional team." 
                : "İnşaat sektöründe ihtiyacınız olan tüm hizmetleri tek çatı altında, profesyonel ekibimizle sunuyoruz."}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const enData = enTranslations[service.slug] || { name: service.name, shortDescription: service.shortDescription };
              const displayName = isEn ? enData.name : service.name;
              const displayDesc = isEn ? enData.shortDescription : service.shortDescription;
              
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                >
                  <Link
                    href={isEn ? `/en/hizmetler/${service.slug}` : `/hizmetler/${service.slug}`}
                    className="group block bg-white p-8 rounded-2xl card-hover h-full"
                  >
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                      {iconMap[service.icon]}
                    </div>
                    <h2 className="font-heading text-xl font-bold text-dark mb-3 group-hover:text-accent transition-colors">
                      {displayName}
                    </h2>
                    <p className="text-muted text-sm leading-relaxed mb-6">
                      {displayDesc}
                    </p>
                    <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold group-hover:gap-3 transition-all">
                      {isEn ? "Details" : "Detaylı Bilgi"} <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
