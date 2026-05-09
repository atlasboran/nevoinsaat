"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye, Award, Users, Shield, Hammer } from "lucide-react";
import CTASection from "@/components/sections/CTASection";

export default function AboutPage({ isEn = false }: { isEn?: boolean }) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-[0.2em] rounded-full mb-6">
              {isEn ? "About Us" : "Hakkımızda"}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {isEn ? (
                <>The Address of <span className="text-gradient-gold">Trust and Quality</span></>
              ) : (
                <>Güvenin ve Kalitenin <span className="text-gradient-gold">Adresi</span></>
              )}
            </h1>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed">
              {isEn
                ? "With over 10 years of experience in Ankara and its surroundings, we produce modern, reliable and high-standard construction projects."
                : "Ankara ve çevresinde 10 yılı aşkın deneyimimizle modern, güvenilir ve yüksek standartlı inşaat projeleri üretiyoruz."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-surface">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/about-story.jpg')" }} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
                {isEn ? "Our Company Story" : "Firma Hikayemiz"}
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  {isEn
                    ? "Established in Ankara Kahramankazan, Nevo Insaat is a professional construction company that has become a reliable name in the sector in residential, commercial and infrastructure projects."
                    : "Nevo İnşaat, Ankara Kahramankazan merkezli olarak kurulmuş, konut, ticari ve altyapı projelerinde sektörde güvenilir bir isim haline gelmiş profesyonel bir inşaat firmasıdır."}
                </p>
                <p>
                  {isEn
                    ? "Having successfully completed hundreds of apartments, dozens of commercial areas and many villa projects since its establishment, our company has adopted the principle of keeping quality standards at the highest level in every project."
                    : "Kuruluşundan bugüne yüzlerce daire, onlarca ticari alan ve çok sayıda villa projesini başarıyla tamamlayan firmamız, her projede kalite standartlarını en üst düzeyde tutma ilkesini benimsemiştir."}
                </p>
                <p>
                  {isEn
                    ? "Our experienced team of engineers and architects make every project exclusive by combining modern construction techniques with regional expertise. With the projects we carry out in developing regions of Ankara, we direct the construction sector of the region."
                    : "Deneyimli mühendis ve mimar kadromuz, modern inşaat tekniklerini bölgesel uzmanlıkla birleştirerek her projeyi ayrıcalıklı kılar. Ankara'nın gelişen bölgelerinde gerçekleştirdiğimiz projelerle, bölgenin yapı sektörüne yön veriyoruz."}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl"
            >
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-accent mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-dark mb-4">{isEn ? "Our Vision" : "Vizyonumuz"}</h3>
              <p className="text-muted leading-relaxed">
                {isEn
                  ? "To be the first company that comes to mind when it comes to quality, trust and innovation in the construction sector in Ankara and its surroundings. To add value to future generations with our sustainable building understanding and to become one of the leading construction companies in Turkey."
                  : "Ankara ve çevresinde inşaat sektöründe kalite, güven ve yenilikçilik denildiğinde akla ilk gelen firma olmak. Sürdürülebilir yapı anlayışımızla gelecek nesillere değer katmak ve Türkiye'nin önde gelen inşaat firmalarından biri haline gelmek."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-white p-10 rounded-2xl"
            >
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-accent mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-dark mb-4">{isEn ? "Our Mission" : "Misyonumuz"}</h3>
              <p className="text-muted leading-relaxed">
                {isEn
                  ? "To create spaces where people can live safely by building earthquake-resistant, energy-efficient and modern designed buildings. To complete every project with quality beyond the expectations of our customers and to be the symbol of reliability in the sector."
                  : "Depreme dayanıklı, enerji verimli ve modern tasarımlı yapılar inşa ederek insanların güvenle yaşayabileceği mekanlar üretmek. Her projeyi müşterilerimizin beklentilerinin ötesinde kaliteyle tamamlamak ve sektörde güvenilirliğin simgesi olmak."}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">{isEn ? "Our Values" : "Değerlerimiz"}</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              {isEn ? "The core principles behind every project" : "Her projemizin temelinde yatan ilkeler"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Shield className="w-6 h-6" />, title: isEn ? "Reliability" : "Güvenilirlik", desc: isEn ? "We keep our promises. Every project is safely delivered." : "Sözümüzü tutarız. Her proje güvenle teslim edilir." },
              { icon: <Award className="w-6 h-6" />, title: isEn ? "Quality" : "Kalite", desc: isEn ? "We work with the highest building standards." : "En yüksek yapı standartlarıyla çalışırız." },
              { icon: <Users className="w-6 h-6" />, title: isEn ? "Team Spirit" : "Ekip Ruhu", desc: isEn ? "We make a difference with our professional and experienced staff." : "Profesyonel ve deneyimli kadromuzla fark yaratırız." },
              { icon: <Hammer className="w-6 h-6" />, title: isEn ? "Innovation" : "İnovasyon", desc: isEn ? "We follow modern techniques and technologies." : "Modern teknikler ve teknolojileri takip ederiz." },
            ].map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="text-center p-8"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mx-auto mb-4">
                  {val.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-dark mb-2">{val.title}</h3>
                <p className="text-muted text-sm">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
