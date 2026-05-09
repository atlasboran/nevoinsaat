"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, ArrowRight, Phone, Users, Workflow, Building } from "lucide-react";
import type { Service } from "@/data/services";
import { projects, completedProjects } from "@/data/projects";
import Image from "next/image";

const nameEnMap: Record<string, string> = {
  "anahtar-teslim-insaat": "Turnkey Construction",
  "konut-projeleri": "Residential Projects",
  "villa-insaati": "Villa Construction",
  "ticari-yapi-insaati": "Commercial Construction",
  "taahhut-hizmetleri": "Contracting Services",
  "proje-gelistirme": "Project Development",
  "ozel-tasarim-evler": "Custom Designed Homes",
  "prefabrik-evler": "Prefabricated Custom Homes",
};

export default function ServiceDetailPage({ service, isEn = false }: { service: Service; isEn?: boolean }) {
  const displayName = isEn && nameEnMap[service.slug] ? nameEnMap[service.slug] : service.name;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 text-white/40 text-sm mb-8">
              <Link href={isEn ? "/en" : "/"} className="hover:text-accent transition-colors">{isEn ? "Home" : "Anasayfa"}</Link>
              <span>/</span>
              <Link href={isEn ? "/en/hizmetler" : "/hizmetler"} className="hover:text-accent transition-colors">{isEn ? "Services" : "Hizmetler"}</Link>
              <span>/</span>
              <span className="text-accent">{displayName}</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {displayName}
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">{service.shortDescription}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-6">{isEn ? "Service Details" : "Hizmet Detayı"}</h2>
                <p className="text-muted text-lg leading-relaxed">{service.description}</p>
              </motion.div>

              {/* Features */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="font-heading text-xl font-bold text-dark mb-6 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  {isEn ? "Scope of Service" : "Hizmet Kapsamı"}
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i }}
                      className="flex items-center gap-3 p-4 bg-surface rounded-xl"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-dark text-sm font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Process */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="font-heading text-xl font-bold text-dark mb-6 flex items-center gap-3">
                  <Workflow className="w-6 h-6 text-accent" />
                  {isEn ? "How the Process Works?" : "Süreç Nasıl İşler?"}
                </h3>
                <div className="space-y-4">
                  {service.process.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      className="flex items-start gap-4 p-4 bg-surface rounded-xl"
                    >
                      <div className="w-8 h-8 bg-accent text-primary rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <span className="text-dark font-medium">{step}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* For Whom */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="font-heading text-xl font-bold text-dark mb-6 flex items-center gap-3">
                  <Users className="w-6 h-6 text-accent" />
                  {isEn ? "Who Is It For?" : "Kimler İçin Uygun?"}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {service.forWhom.map((item, i) => (
                    <span key={i} className="px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Showcase Projects */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="pt-8 border-t border-gray-100">
                <h3 className="font-heading text-xl font-bold text-dark mb-6 flex items-center gap-3">
                  <Building className="w-6 h-6 text-accent" />
                  {isEn ? "Sample Projects" : "Örnek Projelerimiz"}
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Select a mix of 2 sample projects */}
                  {[...projects, ...completedProjects].slice(0, 2).map((project, idx) => (
                    <Link href={isEn ? `/en/projeler/${project.slug}` : `/projeler/${project.slug}`} key={project.slug} className="group block">
                      <div className="relative h-48 rounded-xl overflow-hidden mb-4 shadow-md bg-gray-100">
                        <Image
                          src={project.coverImage || "/images/hero-bg.jpg"}
                          alt={project.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-accent text-xs font-bold mb-1">{project.category}</p>
                          <h4 className="text-white font-bold leading-tight line-clamp-1">{project.name}</h4>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-4">
                  <Link href={isEn ? "/en/projeler" : "/projeler"} className="text-accent text-sm font-bold hover:underline flex items-center gap-1">
                    {isEn ? "View All Projects" : "Tüm Projeleri İncele"} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-28 space-y-6">
                <div className="bg-primary p-8 rounded-2xl text-center">
                  <h3 className="font-heading text-xl font-bold text-white mb-3">
                    {isEn ? `Get a Quote for ${displayName}` : `${displayName} İçin Teklif Alın`}
                  </h3>
                  <p className="text-white/50 text-sm mb-6">
                    {isEn ? "Contact us for a free evaluation and consultation." : "Ücretsiz keşif ve ön görüşme için bizimle iletişime geçin."}
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
                    {isEn ? "Contact Form" : "İletişim Formu"}
                  </Link>
                </div>

                <div className="bg-surface p-6 rounded-2xl">
                  <h4 className="font-heading text-sm font-bold text-dark mb-4 uppercase tracking-wider">{isEn ? "Other Services" : "Diğer Hizmetler"}</h4>
                  <div className="space-y-2">
                    {["anahtar-teslim-insaat", "konut-projeleri", "villa-insaati", "ticari-yapi-insaati", "taahhut-hizmetleri", "proje-gelistirme", "ozel-tasarim-evler", "prefabrik-evler"]
                      .filter((s) => s !== service.slug)
                      .map((slug) => {
                        const names: Record<string, string> = {
                          "anahtar-teslim-insaat": isEn ? "Turnkey Construction" : "Anahtar Teslim İnşaat",
                          "konut-projeleri": isEn ? "Residential Projects" : "Konut Projeleri",
                          "villa-insaati": isEn ? "Villa Construction" : "Villa İnşaatı",
                          "ticari-yapi-insaati": isEn ? "Commercial Construction" : "Ticari Yapı İnşaatı",
                          "taahhut-hizmetleri": isEn ? "Contracting Services" : "Taahhüt Hizmetleri",
                          "proje-gelistirme": isEn ? "Project Development" : "Proje Geliştirme",
                          "ozel-tasarim-evler": isEn ? "Custom Designed Homes" : "Özel Tasarım Evler",
                          "prefabrik-evler": isEn ? "Prefabricated Homes" : "Prefabrik Evler",
                        };
                        return (
                          <Link
                            key={slug}
                            href={isEn ? `/en/hizmetler/${slug}` : `/hizmetler/${slug}`}
                            className="flex items-center justify-between py-2.5 px-3 text-sm text-muted hover:text-accent hover:bg-white rounded-lg transition-all"
                          >
                            {names[slug]}
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        );
                      })}
                  </div>
                </div>

                <Link href={isEn ? "/en/hizmetler" : "/hizmetler"} className="flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all">
                  <ArrowLeft className="w-4 h-4" />
                  {isEn ? "Back to All Services" : "Tüm Hizmetlere Dön"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
