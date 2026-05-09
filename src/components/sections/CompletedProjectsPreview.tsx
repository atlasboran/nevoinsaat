"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Calendar, ArrowUpRight } from "lucide-react";
import { completedProjects } from "@/data/projects";
import SectionTitle from "@/components/ui/SectionTitle";

export default function CompletedProjectsPreview() {
  const featured = completedProjects.slice(0, 3);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Referanslarımız"
          title="Tamamlanan Projeler"
          description="Başarıyla teslim ettiğimiz projelerle güvenimizi kanıtlıyoruz."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
            >
              <Link
                href={`/tamamlanan-projeler/${project.slug}`}
                className="group block bg-surface rounded-2xl overflow-hidden card-hover"
              >
                <div className="relative aspect-[4/3] bg-secondary overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{
                      backgroundImage: `url('${project.coverImage}')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                      Tamamlandı
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-dark group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1.5 text-muted text-sm">
                      <MapPin className="w-3.5 h-3.5" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1.5 text-muted text-sm">
                      <Calendar className="w-3.5 h-3.5" />
                      {project.year}
                    </div>
                  </div>
                  <p className="mt-3 text-muted text-sm leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/tamamlanan-projeler"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300"
          >
            Tüm Tamamlanan Projeleri Görüntüle
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
