"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutPreview({ isEn = false }: { isEn?: boolean }) {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image Area */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-surface">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/about-preview.jpg')",
                  }}
                />
              </div>
              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-2xl shadow-2xl"
              >
                <span className="text-gradient-gold font-heading text-4xl font-bold block">
                  10+
                </span>
                <span className="text-white/60 text-sm">{isEn ? "Years in Business" : "Yıllık Firma"}</span>
              </motion.div>
            </div>
            {/* Decorative */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-[0.2em] rounded-full mb-4">
              {isEn ? "About Us" : "Hakkımızda"}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-dark leading-tight mb-6">
              {isEn ? "The Name of Trust and Quality:" : "Güvenin ve Kalitenin"}
              <br />
              <span className="text-accent">Nevo İnşaat</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              {isEn 
                ? "With over 10 years of experience in Ankara and its surroundings, we bring modern architectural understanding together with quality craftsmanship. We prepare living spaces for the future by prioritizing reliability, on-time delivery, and customer satisfaction in every project."
                : "Ankara ve çevresinde 10 yılı aşkın deneyimimizle, modern mimari anlayışını kaliteli işçilikle buluşturuyoruz. Her projemizde güvenilirlik, zamanında teslim ve müşteri memnuniyetini ön planda tutarak, yaşam alanlarını geleceğe hazırlıyoruz."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {(isEn ? [
                "Earthquake Resistant Buildings",
                "On-Time Delivery Guarantee",
                "Professional Engineering",
                "Quality Material Usage",
                "Transparent Process Management",
                "Customer Satisfaction",
              ] : [
                "Depreme Dayanıklı Yapılar",
                "Zamanında Teslim Garantisi",
                "Profesyonel Mühendislik",
                "Kaliteli Malzeme Kullanımı",
                "Şeffaf Süreç Yönetimi",
                "Müşteri Memnuniyeti",
              ]).map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-dark text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <Link
              href="/hakkimizda"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-light hover:shadow-xl transition-all duration-300"
            >
              {isEn ? "Learn More" : "Daha Fazla Bilgi"}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
