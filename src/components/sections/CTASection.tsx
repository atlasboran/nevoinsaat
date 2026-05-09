"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, ArrowRight } from "lucide-react";

export default function CTASection({ isEn = false }: { isEn?: boolean }) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: "url('/images/cta-bg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary" />
      </div>

      {/* Decorative accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-[0.2em] rounded-full mb-6">
            {isEn ? "CONTACT" : "İletişim"}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {isEn ? "Contact Us for" : "Projeniz İçin"}
            <br />
            <span className="text-gradient-gold">{isEn ? "Your Project" : "Bizimle İletişime Geçin"}</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            {isEn 
              ? "Contact us now for a free evaluation, project consulting, or to get a quote. Our expert team is with you."
              : "Ücretsiz keşif görüşmesi, proje danışmanlığı veya teklif almak için hemen iletişime geçin. Uzman ekibimiz sizinle."}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link
            href={isEn ? "/en/iletisim" : "/iletisim"}
            className="group inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-accent to-accent-dark text-primary font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-accent/30 transform hover:scale-105 transition-all duration-300"
          >
            {isEn ? "Get a Quote" : "Teklif Alın"}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="tel:05433648742"
            className="inline-flex items-center gap-2 px-10 py-4 border-2 border-white/20 text-white font-semibold text-lg rounded-xl hover:bg-white/10 hover:border-accent/50 transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            {isEn ? "Call Now" : "Hemen Arayın"}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/40 text-sm"
        >
          <a
            href="tel:03124371212"
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Phone className="w-4 h-4" />
            0312 437 12 12
          </a>
          <a
            href="mailto:info@nevoinsaat.com"
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Mail className="w-4 h-4" />
            info@nevoinsaat.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
