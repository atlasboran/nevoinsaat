"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import { projects, completedProjects } from "@/data/projects";
import SectionTitle from "@/components/ui/SectionTitle";

const projectTranslationsEn: Record<string, any> = {
  "kirikkale-yahsihan-konutlari": {
    name: "Yahşihan Life Homes",
    category: "Residential",
    location: "Yahşihan, Kırıkkale",
    shortDescription: "Aesthetic and comfortable new living space located in Yahşihan, Kırıkkale.",
    area: "Various",
    units: "Multi-Unit",
  },
  "prefabrik-evler": {
    name: "Prefabricated Custom Homes",
    category: "Special Projects",
    location: "Various Locations",
    shortDescription: "Low cost, fast installation, reliable prefabricated and steel houses.",
    area: "Customizable",
    units: "Custom",
  },
  "yayla-evleri": {
    name: "Plateau and Village Houses",
    category: "Residential",
    location: "Various Locations",
    shortDescription: "Custom concept highland houses and durable village houses intertwined with nature.",
    area: "Customizable",
    units: "Custom",
  },
};

export default function ProjectsPreview({ isEn = false }: { isEn?: boolean }) {
  const allProjects = [...projects, ...completedProjects];

  return (
    <section className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle={isEn ? "Our Works" : "Projelerimiz"}
          title={isEn ? "Projects" : "Projeler"}
          description={isEn 
            ? "Discover our projects built with a strictly modern architectural approach."
            : "Modern mimari anlayışımızla inşa ettiğimiz projelerimizi keşfedin."}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, i) => {
            const trData = isEn ? projectTranslationsEn[project.slug] : null;
            const dName = trData?.name || project.name;
            const dCat = trData?.category || project.category;
            const dLoc = trData?.location || project.location;
            const dDesc = trData?.shortDescription || project.shortDescription;
            const dArea = trData?.area || project.area;
            const dUnits = trData?.units || project.units;

            return (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
            >
              <Link
                href={`/projeler/${project.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden card-hover"
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
                    <span className="px-3 py-1 bg-accent text-primary text-xs font-bold rounded-full">
                      {dCat}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-4">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-dark group-hover:text-accent transition-colors duration-300">
                    {dName}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 text-muted text-sm">
                    <MapPin className="w-3.5 h-3.5" />
                    {dLoc}
                  </div>
                  <p className="mt-3 text-muted text-sm leading-relaxed line-clamp-2">
                    {dDesc}
                  </p>
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-surface-dark">
                    <span className="text-xs text-muted">
                      <strong className="text-dark">{dArea}</strong>
                    </span>
                    <span className="text-xs text-muted">
                      <strong className="text-dark">{dUnits}</strong>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
            ); 
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/projeler"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
          >
            {isEn ? "View All Projects" : "Tüm Projeleri Görüntüle"}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
