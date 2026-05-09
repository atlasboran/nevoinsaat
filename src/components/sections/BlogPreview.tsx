"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog";
import SectionTitle from "@/components/ui/SectionTitle";

const blogTranslationsEn: Record<string, any> = {
  "ankara-insaat-firmasi-secerken-nelere-dikkat-edilmeli": {
    title: "What to Consider When Choosing a Construction Company in Ankara?",
    excerpt: "Choosing a reliable construction company is the most critical step determining the future of your investment. Here are 8 important criteria.",
    category: "Guide",
  },
  "anahtar-teslim-insaat-sureci-nasil-ilerler": {
    title: "How Does the Turnkey Construction Process Work?",
    excerpt: "Turnkey construction service means your project is managed from a single source from start to finish. How does the process work step by step?",
    category: "Information",
  },
  "muteahhit-firma-ile-calismanin-avantajlari": {
    title: "Advantages of Working with a Contractor Company",
    excerpt: "Working with a professional contractor company offers many advantages from process management to cost control.",
    category: "Information",
  },
};

export default function BlogPreview({ isEn = false }: { isEn?: boolean }) {
  const featured = blogPosts.slice(0, 3);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle={isEn ? "Blog" : "BLOG"}
          title={isEn ? "From the Construction World" : "İnşaat Dünyasından"}
          description={isEn 
            ? "Useful content about industry trends, investment advice, and construction processes."
            : "Sektör bilgileri, yatırım tavsiyeleri ve inşaat süreçleri hakkında faydalı içerikler."}
        />

        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((post, i) => {
            const trData = isEn ? blogTranslationsEn[post.slug] : null;
            const dTitle = trData?.title || post.title;
            const dExcerpt = trData?.excerpt || post.excerpt;
            const dCat = trData?.category || post.category;
            const readTimeStr = isEn ? post.readTime.replace(" dk", " min") : post.readTime;
            
            return (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-surface rounded-2xl overflow-hidden card-hover"
              >
                <div className="relative aspect-[16/10] bg-secondary overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{
                      backgroundImage: `url('${post.coverImage}')`,
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/80 backdrop-blur-md text-white text-xs font-medium rounded-full">
                      {dCat}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-muted text-xs mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString(isEn ? "en-US" : "tr-TR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {readTimeStr}
                    </div>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-dark group-hover:text-accent transition-colors line-clamp-2">
                    {dTitle}
                  </h3>
                  <p className="mt-2 text-muted text-sm leading-relaxed line-clamp-2">
                    {dExcerpt}
                  </p>
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
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300"
          >
            {isEn ? "All Blog Posts" : "Tüm Blog Yazıları"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
