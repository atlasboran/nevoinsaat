"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, MapPin, ChevronDown, ChevronUp, CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";
import type { SeoPage } from "@/data/seoPages";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-surface-dark rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-surface/50 transition-colors"
      >
        <span className="font-heading text-base font-semibold text-dark pr-4">{question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-accent shrink-0" /> : <ChevronDown className="w-5 h-5 text-muted shrink-0" />}
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="px-5 pb-5"
        >
          <p className="text-muted text-sm leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </div>
  );
}

export default function SeoLandingPage({ page }: { page: SeoPage }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 text-white/40 text-sm mb-6">
              <Link href="/" className="hover:text-accent transition-colors">Anasayfa</Link>
              <span>/</span>
              <span className="text-accent">{page.h1}</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {page.h1.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-gradient-gold">{page.h1.split(" ").slice(-1)}</span>
            </h1>
            <p className="text-white/60 text-lg max-w-3xl leading-relaxed">
              {page.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-dark text-primary font-bold rounded-xl hover:shadow-2xl hover:shadow-accent/30 transform hover:scale-105 transition-all duration-300"
              >
                Teklif Alın
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:05433648742"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Hemen Arayın
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-6">
              {page.district ? `${page.district}'da` : `${page.city}'da`} Güvenilir İnşaat Çözümleri
            </h2>
            <p className="text-muted text-lg leading-relaxed">{page.introText}</p>
          </motion.div>
        </div>
      </section>

      {/* Service Detail */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-6">Hizmetlerimiz</h2>
            <p className="text-muted text-lg leading-relaxed mb-8">{page.serviceText}</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Konut Projeleri",
                "Villa İnşaatı",
                "Ticari Yapı",
                "Anahtar Teslim İnşaat",
                "Taahhüt Hizmetleri",
                "Proje Geliştirme",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-dark text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Nevo */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-6">Neden Nevo İnşaat?</h2>
            <p className="text-muted text-lg leading-relaxed">{page.whyNevo}</p>
          </motion.div>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-6">Bölgesel Uzmanlık</h2>
            <p className="text-muted text-lg leading-relaxed">{page.localExpertise}</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      {page.faqs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-8">Sık Sorulan Sorular</h2>
              <div className="space-y-3">
                {page.faqs.map((faq, i) => (
                  <FAQItem key={i} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              {page.district || page.city}&apos;da Projeniz İçin
              <br />
              <span className="text-gradient-gold">Bizimle İletişime Geçin</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link
                href="/iletisim"
                className="px-10 py-4 bg-gradient-to-r from-accent to-accent-dark text-primary font-bold rounded-xl hover:shadow-2xl hover:shadow-accent/30 transition-all"
              >
                Teklif Alın
              </Link>
              <a
                href="tel:05433648742"
                className="flex items-center gap-2 px-10 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                <Phone className="w-5 h-5" />
                0543 364 87 42
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8 text-white/40 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Kahramankazan, Ankara
              </div>
              <a href="mailto:info@nevoinsaat.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                info@nevoinsaat.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-heading text-lg font-bold text-dark mb-4">İlgili Sayfalar</h3>
          <div className="flex flex-wrap gap-2">
            {[
              { href: "/projeler", label: "Projeler" },
              { href: "/tamamlanan-projeler", label: "Tamamlanan Projeler" },
              { href: "/hizmetler", label: "Hizmetler" },
              { href: "/hakkimizda", label: "Hakkımızda" },
              { href: "/iletisim", label: "İletişim" },
              { href: "/ankara-insaat-firmasi", label: "Ankara İnşaat Firması" },
              { href: "/kahramankazan-insaat-firmasi", label: "Kahramankazan İnşaat Firması" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 bg-white text-muted text-sm rounded-lg hover:text-accent hover:shadow-sm transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
