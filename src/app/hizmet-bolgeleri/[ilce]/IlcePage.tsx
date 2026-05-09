"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Building, Shield, PhoneForwarded, ChevronDown, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface District {
  slug: string;
  name: string;
}

// Spintax / Varyasyon Kütüphanesi
const heroSubtitles = [
  "__DISTRICT__ ilçesindeki tüm yapı mimari, konut projeleri ve anahtar teslim taahhüt işlerinizde yanınızdayız. Modern tasarım ve sıfır hata prensibiyle çalışıyoruz.",
  "Nevo İnşaat olarak, __DISTRICT__ bölgesinde hayata geçirdiğimiz lüks konut ve ticari yaşam alanlarıyla geleceğin mimarisini bugünden inşa ediyoruz.",
  "__DISTRICT__ genelinde değer yaratan projelerimizle, arsa geliştirme ve sıfırdan anahtar teslim inşaat süreçlerinizi profesyonelce yönetiyoruz.",
  "Mimari vizyonumuz ve yüksek mühendislik standartlarımızla, __DISTRICT__ çevresindeki tüm taahhüt ve kentsel dönüşüm taleplerinize kalıcı çözümler sunuyoruz."
];

const sectionTitles = [
  "__DISTRICT__ Bölgesinde Neler Yapıyoruz?",
  "__DISTRICT__ İçin Profesyonel İnşaat Çözümleri",
  "Nevo İnşaat ile __DISTRICT__ Projeleri",
  "__DISTRICT__ Odaklı Hizmet Alanlarımız"
];

const paragraphTexts = [
  "__DISTRICT__ bölge dinamiklerini yakından tanıyan uzman ekibimizle, lokasyona değer katacak projelere imza atıyoruz. İster sıfırdan bir villa projesi olsun, ister kentsel dönüşüm odaklı modern bir konut kompleksi, kalite standartlarımızdan hiçbir koşulda ödün vermiyoruz.",
  "İnşaat sektöründeki yıllara dayanan tecrübemizi __DISTRICT__ bölgesine başarıyla taşıyoruz. Zemin etüdünden peyzaj tasarımına kadar her ayrıntıyı titizlikle planlayarak, estetik ve sağlamlığı bir arada sunan yaşam alanları kuruyoruz.",
  "Müşteri memnuniyetini merkeze alan yaklaşımımızla __DISTRICT__ genelinde prestijli projelere hayat veriyoruz. Şeffaf süreç yönetimi ve zamanında teslimat garantimiz ile yatırımcılarımıza hem güven hem de yüksek getiri potansiyeli sağlıyoruz.",
  "__DISTRICT__ özelinde geliştirdiğimiz yenilikçi konseptler sayesinde, sadece binalar değil, kalıcı ve huzurlu mahalle dokuları inşa ediyoruz. Çevreye duyarlı yapı malzemeleri kullanarak sağlam ve dayanıklı yapılar oluşturuyoruz."
];

const allFaqs = [
  {
    q: "__DISTRICT__ bölgesinde müstakil ev veya villa inşaatı yapıyor musunuz?",
    a: "Evet, __DISTRICT__ ilçesindeki arsalarınız için özel mimari tasarımlarla, modern ve yüksek yalıtımlı lüks villa ile müstakil inşaatlar gerçekleştiriyoruz. Tamamen size özel projelendirme yapıyoruz."
  },
  {
    q: "__DISTRICT__ özelinde kat karşılığı veya kentsel dönüşüm projeleriniz var mı?",
    a: "Kesinlikle. __DISTRICT__ lokasyonundaki mevcut binalarınızı veya arsalarınızı yerinde değerlendirerek, kentsel dönüşüm yasasına uygun, adil paylaşımlı ve kat karşılığı profesyonel hizmetler sunuyoruz."
  },
  {
    q: "__DISTRICT__ çevresindeki projelerde anahtar teslim süreci nasıl işliyor?",
    a: "Harita alımından başlayarak hafriyat, kaba inşaat, ince işçilik ve çevre düzenlemesi süreçlerinin tamamını tek elden tıkır tıkır yürütüyor, __DISTRICT__ bölgesindeki eseri söz verdiğimiz tarihte oturuma hazır teslim ediyoruz."
  },
  {
    q: "__DISTRICT__ projem için ücretsiz maliyet analizi veya keşif alabilir miyim?",
    a: "Elbette. __DISTRICT__ dahil olmak üzere Ankara'nın tüm noktaları için saha ekiplerimizle yerinde görerek ücretsiz inceleme yapıyor ve detaylı bir ön maliyet raporu çıkartıyoruz."
  },
  {
    q: "__DISTRICT__ ilçesine özgü yapı ruhsatı ve izin süreçlerinde destek oluyor musunuz?",
    a: "Evet, projenizin __DISTRICT__ belediyesi ve ilgili kurumlardaki mimari ruhsat, iskan süreçleri ve yasal prosedürlerin tamamını uzman ekibimizle sizin adınıza biz takip ediyoruz."
  }
];

export default function IlcePage({ district }: { district: District }) {
  // Deterministic Hash Fonksiyonu
  const getIndex = (str: string, max: number) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) hash += str.charCodeAt(i);
    return hash % max;
  };

  const seed = getIndex(district.slug, 100);
  
  // Varyasyonları Belirleme
  const heroSub = heroSubtitles[seed % heroSubtitles.length].replace(/__DISTRICT__/g, district.name);
  const secTitle = sectionTitles[(seed + 1) % sectionTitles.length].replace(/__DISTRICT__/g, district.name);
  const pText = paragraphTexts[(seed + 2) % paragraphTexts.length].replace(/__DISTRICT__/g, district.name);
  
  // 3 Benzersiz Sık Sorulan Soru Seçimi
  const fIndex = seed % allFaqs.length;
  const pageFaqs = [
    allFaqs[fIndex],
    allFaqs[(fIndex + 1) % allFaqs.length],
    allFaqs[(fIndex + 2) % allFaqs.length],
  ].map(faq => ({
    q: faq.q.replace(/__DISTRICT__/g, district.name),
    a: faq.a.replace(/__DISTRICT__/g, district.name)
  }));

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Hero Section specific to District */}
      <section className="relative pt-32 pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 font-medium text-accent text-sm">
              <MapPin className="w-4 h-4" />
              <span>{district.name} / Ankara İnşaat Hizmetleri</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {district.name}'da <span className="text-gradient-gold">Geleceği</span><br className="hidden md:block"/> Güvenle İnşa Ediyoruz
            </h1>
            
            <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
              {heroSub}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-dark text-primary font-bold rounded-xl hover:scale-105 transition-transform duration-300"
              >
                Ücretsiz Keşif İste
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Context */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
                {secTitle}
              </h2>
              <div className="space-y-6 text-muted text-lg leading-relaxed">
                <p>{pText}</p>
                <ul className="space-y-4 pt-4">
                  {[
                    "Anahtar Teslim Komple İnşaat",
                    "Özel Konut ve Lüks Villa Projeleri",
                    "Ticari Yapı ve Plaza İnşaatları",
                    "Profesyonel Yapı Taahhüt Hizmetleri"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-dark font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/hero-bg.jpg" alt={`${district.name} inşaat projeleri`} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <div className="glass p-6 rounded-2xl flex items-center gap-4">
                  <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Building className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">Bölgesel Hakimiyet</h4>
                    <p className="text-white/70 text-sm">{district.name} sınırları için alanında uzman yerel çözümler.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">Sıkça Sorulan Sorular</h2>
            <p className="text-muted text-lg">{district.name} bölgesindeki yatırımcıların en çok merak ettikleri</p>
          </div>
          
          <div className="space-y-4">
            {pageFaqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === idx ? 'border-accent bg-accent/5' : 'border-gray-200 hover:border-accent/50'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold text-lg text-dark pr-8">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-accent shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-muted overflow-hidden"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Projenizi Birlikte Hayata Geçirelim
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            {district.name} ilçesindeki tüm yatırımlarınız ve yapı fikirleriniz için ekibimizle görüşün, projelendirelim.
          </p>
          <a href="tel:05433648742" className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl transition-all duration-300 backdrop-blur-sm">
            <PhoneForwarded className="w-5 h-5 text-accent" />
            0543 364 87 42
          </a>
        </div>
      </section>
    </>
  );
}
