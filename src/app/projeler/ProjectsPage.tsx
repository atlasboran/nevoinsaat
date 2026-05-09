"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowUpRight, Ruler, Building } from "lucide-react";
import { projects, completedProjects } from "@/data/projects";

const enProjectMap: Record<string, { name: string, category: string, location: string, shortDescription: string }> = {
  "kirikkale-yahsihan-konutlari": {
    name: "Yahsihan Life Houses",
    category: "Residential Project",
    location: "Yahsihan, Kirikkale",
    shortDescription: "An aesthetic and comfortable new living space located in Yahsihan, Kirikkale."
  },
  "prefabrik-evler": {
    name: "Prefabricated and Custom Designed Homes",
    category: "Special Projects",
    location: "Various Locations",
    shortDescription: "Prefabricated and specially designed home projects with modern architecture."
  },
  "toplu-tekli-evler": {
    name: "Custom Design Public & Single Houses",
    category: "Special Projects",
    location: "Various Locations",
    shortDescription: "Custom designed public and single housing projects."
  },
  "hatay-projesi": {
    name: "Hatay Housing Project",
    category: "Residential Project",
    location: "Hatay",
    shortDescription: "Our earthquake-safe, modern housing project built in Hatay."
  },
  "pendik-hastanesi": {
    name: "Pendik Hospital",
    category: "Healthcare Project (Partnership)",
    location: "Pendik, Istanbul",
    shortDescription: "Pendik 400-bed Training and Research Hospital completed in partnership."
  },
  "osmaniye-projesi": {
    name: "Osmaniye Project",
    category: "Residential Project",
    location: "Osmaniye",
    shortDescription: "Our project completed with quality manufacturing and modern design in Osmaniye."
  }
};

export default function ProjectsPage({ isEn = false }: { isEn?: boolean }) {
  const allProjects = [...projects, ...completedProjects];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-[0.2em] rounded-full mb-6">
              {isEn ? "Our Projects" : "Projelerimiz"}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {isEn ? (
                <>All <span className="text-gradient-gold">Projects</span></>
              ) : (
                <>Tüm <span className="text-gradient-gold">Projeler</span></>
              )}
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              {isEn 
                ? "Discover the projects we have carefully designed and realized with our modern architectural understanding." 
                : "Modern mimari anlayışımızla özenle tasarlayıp hayata geçirdiğimiz projelerimizi keşfedin."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, i) => {
              const enData = enProjectMap[project.slug] || { name: project.name, category: project.category, location: project.location, shortDescription: project.shortDescription };
              const displayName = isEn ? enData.name : project.name;
              const displayCategory = isEn ? enData.category : project.category;
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
                    href={isEn ? `/en/projeler/${project.slug}` : `/projeler/${project.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden card-hover"
                  >
                    <div className="relative aspect-[4/3] bg-secondary overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                        style={{ backgroundImage: `url('${project.coverImage}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-accent text-primary text-xs font-bold rounded-full">
                          {displayCategory}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h2 className="font-heading text-xl font-bold text-dark group-hover:text-accent transition-colors">
                        {displayName}
                      </h2>
                      <div className="flex items-center gap-2 mt-2 text-muted text-sm">
                        <MapPin className="w-3.5 h-3.5" />
                        {displayLocation}
                      </div>
                      <p className="mt-3 text-muted text-sm leading-relaxed line-clamp-2">
                        {displayDesc}
                      </p>
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
