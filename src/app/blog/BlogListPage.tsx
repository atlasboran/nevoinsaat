"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { blogPosts, BlogPost } from "@/data/blog";

const enBlogMap: Record<string, { title: string, excerpt: string, category: string, readTime: string }> = {
  "ankara-insaat-firmasi-secerken-nelere-dikkat-edilmeli": {
    title: "What to Consider When Choosing a Construction Company in Ankara?",
    excerpt: "Choosing a reliable construction company is the most critical step determining the future of your investment. Here are 8 important criteria you should consider.",
    category: "Guide",
    readTime: "6 min"
  },
  "anahtar-teslim-insaat-sureci-nasil-ilerler": {
    title: "How Does the Turnkey Construction Process Proceed?",
    excerpt: "Turnkey construction service means completely managing your project from beginning to end. How does the process work step by step?",
    category: "Information",
    readTime: "5 min"
  },
  "muteahhit-firma-ile-calismanin-avantajlari": {
    title: "Advantages of Working with a Contractor Company",
    excerpt: "Working with a professional contracting firm offers many advantages from process management to cost control.",
    category: "Information",
    readTime: "4 min"
  },
  "ankara-villa-insaati-yaptirmak-mantikli-mi": {
    title: "Is It Logical to Build a Villa in Ankara?",
    excerpt: "Villa investments are becoming increasingly popular in the developing regions of Ankara. So how logical is this investment?",
    category: "Investment",
    readTime: "7 min"
  },
  "kahramankazan-konut-yatirimi": {
    title: "Housing Investment in Kahramankazan Region",
    excerpt: "We examine the advantages of investing in housing in Kahramankazan, one of the fastest developing districts of Ankara.",
    category: "Investment",
    readTime: "6 min"
  },
  "insaat-projelerinde-kaliteyi-belirleyen-unsurlar": {
    title: "Factors Determining Quality in Construction Projects",
    excerpt: "What are the key elements establishing the quality of a building project? Every detail is important, from material selection to workmanship.",
    category: "Technical",
    readTime: "5 min"
  }
};

export default function BlogListPage({ isEn = false }: { isEn?: boolean }) {
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
              Blog
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {isEn ? (
                <>From the Construction <span className="text-gradient-gold">World</span></>
              ) : (
                <>İnşaat <span className="text-gradient-gold">Dünyasından</span></>
              )}
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              {isEn 
                ? "Useful articles on sector information, investment advice, and construction processes." 
                : "Sektör bilgileri, yatırım tavsiyeleri ve inşaat süreçleri hakkında faydalı yazılar."}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post: BlogPost, i) => {
              const enData = enBlogMap[post.slug] || { title: post.title, excerpt: post.excerpt, category: post.category, readTime: post.readTime };
              const displayTitle = isEn ? enData.title : post.title;
              const displayExcerpt = isEn ? enData.excerpt : post.excerpt;
              const displayCategory = isEn ? enData.category : post.category;
              const displayTime = isEn ? enData.readTime : post.readTime;
              
              const dateObj = new Date(post.date);
              const formattedDate = isEn 
                ? dateObj.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })
                : dateObj.toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });

              return (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                >
                  <Link
                    href={isEn ? `/en/blog/${post.slug}` : `/blog/${post.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden card-hover h-full"
                  >
                    <div className="relative aspect-[16/10] bg-secondary overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                        style={{ backgroundImage: `url('${post.coverImage}')` }}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary/80 backdrop-blur-md text-white text-xs font-medium rounded-full">
                          {displayCategory}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-muted text-xs mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formattedDate}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {displayTime}
                        </div>
                      </div>
                      <h2 className="font-heading text-lg font-bold text-dark group-hover:text-accent transition-colors line-clamp-2 mb-2">
                        {displayTitle}
                      </h2>
                      <p className="text-muted text-sm leading-relaxed line-clamp-3">
                        {displayExcerpt}
                      </p>
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
