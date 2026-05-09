"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowUpRight, Ruler, Building } from "lucide-react";
import { completedProjects } from "@/data/projects";

const enProjectMap: Record<string, { name: string, location: string, shortDescription: string }> = {
  "hatay-projesi": {
    name: "Hatay Housing Project",
    location: "Hatay",
    shortDescription: "Our earthquake-safe, modern housing project built in Hatay."
  },
  "pendik-hastanesi": {
    name: "Pendik Hospital",
    location: "Pendik, Istanbul",
    shortDescription: "Pendik 400-bed Training and Research Hospital completed in partnership."
  },
  "osmaniye-projesi": {
    name: "Osmaniye Project",
    location: "Osmaniye",
    shortDescription: "Our project completed with quality manufacturing and modern design in Osmaniye."
  }
};

export default function CompletedPage({ isEn = false }: { isEn?: boolean }) {
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
              {isEn ? "Our References" : "Referanslarımız"}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {isEn ? (
                <>Completed <span className="text-gradient-gold">Projects</span></>
              ) : (
                <>Tamamlanan <span className="text-gradient-gold">Projeler</span></>
              )}
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              {isEn 
                ? "We prove our reliability with the projects we successfully deliver. Every project is a concrete indicator of our quality standards." 
                : "Başarıyla teslim ettiğimiz projelerle güvenimizi kanıtlıyoruz. Her proje, kalite standartlarımızın somut göstergesidir."}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project, i) => {
              const enData = enProjectMap[project.slug] || { name: project.name, location: project.location, shortDescription: project.shortDescription };
              const displayName = isEn ? enData.name : project.name;
              const displayLocation = isEn ? enData.location : project.location;
              const displayDesc = isEn ? enData.shortDescription : project.shortDescription;

              return (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                >
                  <Link
                    href={isEn ? `/en/tamamlanan-projeler/${project.slug}` : `/tamamlanan-projeler/${project.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden card-hover"
                  >
                    <div className="relative aspect-[4/3] bg-secondary overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                        style={{ backgroundImage: `url('${project.coverImage}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">{isEn ? "Completed" : "Tamamlandı"}</span>
                        <span className="px-3 py-1 bg-white/90 text-dark text-xs font-bold rounded-full">{isEn && project.year === "Tamamlandı" ? "Completed" : project.year}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h2 className="font-heading text-xl font-bold text-dark group-hover:text-accent transition-colors">{displayName}</h2>
                      <div className="flex items-center gap-2 mt-2 text-muted text-sm">
                        <MapPin className="w-3.5 h-3.5" />
                        {displayLocation}
                      </div>
                      <p className="mt-3 text-muted text-sm leading-relaxed line-clamp-2">{displayDesc}</p>
                      <div className="flex items-center gap-6 mt-4 pt-4 border-t border-surface-dark">
                        <div className="flex items-center gap-1.5 text-xs text-muted">
                          <Ruler className="w-3.5 h-3.5 text-accent" />
                          <span className="font-semibold text-dark">{project.area}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-muted">
                          <Building className="w-3.5 h-3.5 text-accent" />
                          <span className="font-semibold text-dark">{isEn && project.units === "Çoklu Konut" ? "Multi Residence" : isEn && project.units === "Özel Tasarım Konutlar" ? "Custom Residences" : project.units}</span>
                        </div>
                      </div>
                    </div>
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
