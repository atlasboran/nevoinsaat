"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/data/blog";

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

export default function BlogDetailPage({ post, isEn = false }: { post: BlogPost; isEn?: boolean }) {
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
    <>
      <section className="relative pt-32 pb-16 bg-primary">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 text-white/40 text-sm mb-8">
              <Link href={isEn ? "/en" : "/"} className="hover:text-accent transition-colors">{isEn ? "Home" : "Anasayfa"}</Link>
              <span>/</span>
              <Link href={isEn ? "/en/blog" : "/blog"} className="hover:text-accent transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-accent line-clamp-1">{displayTitle}</span>
            </div>
            <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-bold rounded-full">
              {displayCategory}
            </span>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              {displayTitle}
            </h1>
            <div className="flex items-center gap-6 text-white/50 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formattedDate}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {displayTime}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cover Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-[16/9] rounded-2xl overflow-hidden bg-surface mb-12"
          >
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${post.coverImage}')` }} />
          </motion.div>

          {/* Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-muted text-lg leading-relaxed">{displayExcerpt}</p>
            <div className="mt-8 p-8 bg-surface rounded-2xl">
              <p className="text-muted text-base leading-relaxed">
                {isEn 
                  ? "This article will soon be published in its entirety. As Nevo Insaat, we continue to share our sector knowledge with you." 
                  : "Bu makale yakında tam içeriğiyle yayına girecektir. Nevo İnşaat olarak sektörel bilgi birikimimizi sizlerle paylaşmaya devam ediyoruz."}
              </p>
            </div>
          </motion.article>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-surface-dark">
            <Link href={isEn ? "/en/blog" : "/blog"} className="flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4" />
              {isEn ? "All Articles" : "Tüm Yazılar"}
            </Link>
            <Link href={isEn ? "/en/iletisim" : "/iletisim"} className="flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all">
              {isEn ? "Contact" : "İletişim"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
