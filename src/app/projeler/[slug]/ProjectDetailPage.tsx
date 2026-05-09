"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MapPin, Calendar, Ruler, Building, CheckCircle2, ArrowLeft, Phone, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import type { Project } from "@/data/projects";

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

export default function ProjectDetailPage({ project, isEn = false }: { project: Project; isEn?: boolean }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") setLightboxIndex((prev) => prev !== null ? (prev === 0 ? project.gallery.length - 1 : prev - 1) : null);
      if (e.key === "ArrowRight") setLightboxIndex((prev) => prev !== null ? (prev === project.gallery.length - 1 ? 0 : prev + 1) : null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, project.gallery.length]);

  const enData = enProjectMap[project.slug] || { name: project.name, category: project.category, location: project.location, shortDescription: project.shortDescription };
  const displayName = isEn ? enData.name : project.name;
  const displayCategory = isEn ? enData.category : project.category;
  const displayLocation = isEn ? enData.location : project.location;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-primary">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${project.coverImage}')` }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/40 text-sm mb-8">
              <Link href={isEn ? "/en" : "/"} className="hover:text-accent transition-colors">{isEn ? "Home" : "Anasayfa"}</Link>
              <span>/</span>
              <Link href={isEn ? "/en/projeler" : "/projeler"} className="hover:text-accent transition-colors">{isEn ? "Projects" : "Projeler"}</Link>
              <span>/</span>
              <span className="text-accent">{displayName}</span>
            </div>

            <span className="px-4 py-1.5 bg-accent text-primary text-xs font-bold rounded-full">
              {displayCategory}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-4">
              {displayName}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                {displayLocation}
              </div>
              <div className="flex items-center gap-2">
                <Ruler className="w-4 h-4 text-accent" />
                {project.area}
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-accent" />
                {isEn && project.units === "Çoklu Konut" ? "Multi Residence" : isEn && project.units === "Özel Tasarım Konutlar" ? "Custom Residences" : project.units}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent" />
                {isEn && project.year === "Tamamlandı" ? "Completed" : isEn && project.year === "Devam Ediyor / Tamamlandı" ? "Ongoing / Completed" : isEn && project.year === "Devam Ediyor / Tamamlananlar" ? "Ongoing / Completed" : project.year}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* Cover Image */}
                <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-surface mb-8">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${project.coverImage}')` }} />
                </div>

                <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-6">{isEn ? "About the Project" : "Proje Hakkında"}</h2>
                <p className="text-muted text-lg leading-relaxed mb-8">{project.description}</p>

                {/* Features */}
                <h3 className="font-heading text-xl font-bold text-dark mb-4">{isEn ? "Project Features" : "Proje Özellikleri"}</h3>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {project.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i }}
                      className="flex items-center gap-3 p-3 bg-surface rounded-xl"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-dark text-sm font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Gallery */}
                {project.gallery.length > 0 && (
                  <>
                    <h3 className="font-heading text-xl font-bold text-dark mb-4">{isEn ? "Project Gallery" : "Proje Galerisi"}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {project.gallery.map((img, i) => (
                        <div 
                          key={i} 
                          className="aspect-square rounded-xl overflow-hidden bg-surface cursor-pointer group relative"
                          onClick={() => setLightboxIndex(i)}
                        >
                          <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500" style={{ backgroundImage: `url('${img}')` }} />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center text-white scale-50 group-hover:scale-100">
                              <span className="sr-only">Büyüt</span>
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="sticky top-28 space-y-6"
              >
                {/* Info Card */}
                <div className="bg-surface p-8 rounded-2xl">
                  <h3 className="font-heading text-lg font-bold text-dark mb-6">{isEn ? "Project Information" : "Proje Bilgileri"}</h3>
                  <div className="space-y-4">
                    {[
                      { label: isEn ? "Location" : "Konum", value: displayLocation },
                      { label: isEn ? "Area" : "Alan", value: project.area },
                      { label: isEn ? "Units" : "Birim", value: isEn && project.units === "Çoklu Konut" ? "Multi Residence" : isEn && project.units === "Özel Tasarım Konutlar" ? "Custom Residences" : project.units },
                      { label: isEn ? "Status/Year" : "Teslim", value: isEn && project.year === "Tamamlandı" ? "Completed" : isEn && project.year === "Devam Ediyor / Tamamlandı" ? "Ongoing / Completed" : isEn && project.year === "Devam Ediyor / Tamamlananlar" ? "Ongoing / Completed" : project.year },
                      { label: isEn ? "Category" : "Kategori", value: displayCategory },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-surface-dark last:border-0">
                        <span className="text-muted text-sm">{item.label}</span>
                        <span className="text-dark text-sm font-semibold">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-primary p-8 rounded-2xl text-center">
                  <h3 className="font-heading text-xl font-bold text-white mb-3">
                    {isEn ? "Get Information About This Project" : "Bu Proje Hakkında Bilgi Alın"}
                  </h3>
                  <p className="text-white/50 text-sm mb-6">
                    {isEn ? "Contact us for detailed info and consultancy." : "Detaylı bilgi ve ön görüşme için bize ulaşın."}
                  </p>
                  <a
                    href="tel:05433648742"
                    className="block w-full py-3 bg-gradient-to-r from-accent to-accent-dark text-primary font-semibold rounded-xl hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 mb-3"
                  >
                    <Phone className="w-4 h-4 inline mr-2" />
                    {isEn ? "Call Now" : "Hemen Arayın"}
                  </a>
                  <Link
                    href={isEn ? "/en/iletisim" : "/iletisim"}
                    className="block w-full py-3 border border-white/20 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-300"
                  >
                    {isEn ? "Get a Quote" : "Teklif Alın"}
                  </Link>
                </div>

                <Link href={isEn ? "/en/projeler" : "/projeler"} className="flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all">
                  <ArrowLeft className="w-4 h-4" />
                  {isEn ? "Back to All Projects" : "Tüm Projelere Dön"}
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
          >
            {/* Kapat BUTONU */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-50 group"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Önceki Sonraki Butonları */}
            {project.gallery.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((prev) => prev === 0 ? project.gallery.length - 1 : prev! - 1);
                  }}
                  className="absolute left-4 sm:left-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-50 group"
                >
                  <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((prev) => prev === project.gallery.length - 1 ? 0 : prev! + 1);
                  }}
                  className="absolute right-4 sm:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-50 group"
                >
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </>
            )}

            {/* Görsel Taşıyıcı */}
            <div 
              className="relative w-full h-full p-4 sm:p-12 md:p-24 flex items-center justify-center"
              onClick={() => setLightboxIndex(null)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  src={project.gallery[lightboxIndex]}
                  alt={`${project.name} Galeri Görseli ${lightboxIndex + 1}`}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl pointer-events-auto cursor-default"
                  onClick={(e) => e.stopPropagation()}
                />
              </AnimatePresence>
              
              <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 px-5 py-2 bg-black/60 rounded-full text-white/80 text-sm font-medium tracking-widest backdrop-blur-md">
                {lightboxIndex + 1} / {project.gallery.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
