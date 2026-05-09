"use client";

import { motion } from "framer-motion";
import { Eye, Target, Shield, Gem, Rocket, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

const getValues = (isEn: boolean) => [
  {
    icon: <Shield className="w-6 h-6" />,
    title: isEn ? "Uncompromising Reliability" : "Tavizsiz Güvenilirlik",
    description: isEn ? "We deliver every promised project on time, with the highest safety and quality standards." : "Söz verdiğimiz her projeyi, en yüksek güvenlik ve kalite standartlarında, tam zamanında teslim ederiz.",
  },
  {
    icon: <Gem className="w-6 h-6" />,
    title: isEn ? "Flawless Workmanship" : "Kusursuz İşçilik",
    description: isEn ? "We aim for perfection in every detail, from the material we use to the architecture we implement." : "Kullandığımız malzemeden uyguladığımız mimariye kadar her detayda mükemmelliği hedefleriz.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: isEn ? "Modernity and Innovation" : "Modernite ve İnovasyon",
    description: isEn ? "We courageously integrate future technologies and current architectural trends into our projects." : "Geleceğin teknolojilerini ve güncel mimari trendleri projelerimize cesurca entegre ederiz.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: isEn ? "Respect for Humans and Nature" : "İnsana ve Doğaya Saygı",
    description: isEn ? "We build not only buildings but also sustainable, nature-friendly living spaces that add value to people." : "Sadece binalar değil, sürdürülebilir, doğayla barışık ve insana değer katan yaşam alanları inşa ederiz.",
  },
];

export default function VizyonPage({ isEn = false }: { isEn?: boolean }) {
  const values = getValues(isEn);

  return (
    <>
      {/* Premium Hero */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
        
        {/* Animated Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1.5 h-1.5 bg-accent/50 rounded-full"
            style={{ top: `${Math.random() * 80 + 10}%`, left: `${Math.random() * 80 + 10}%` }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-5 py-2 bg-accent/10 text-accent text-xs font-bold uppercase tracking-[0.3em] rounded-full mb-6 border border-accent/20 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
              {isEn ? "Designing the Future" : "Geleceği Tasarlamak"}
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              {isEn ? "Vision" : "Vizyon"} <span className="text-gradient-gold">&</span> {isEn ? "Mission" : "Misyon"}
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              {isEn 
                ? "We don't just build buildings; we build a respectable legacy built on solid foundations that will be passed down from generation to generation." 
                : "Biz sadece binalar inşa etmiyoruz; sağlam temeller üzerine kurulu, nesilden nesile aktarılacak itibarlı bir miras inşa ediyoruz."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Vision & Mission Content */}
      <section className="relative section-padding bg-surface -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* VİZYON KARTI */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/0 to-accent/0 group-hover:from-accent/30 group-hover:to-transparent rounded-3xl blur-md transition-all duration-700" />
              <div className="relative h-full bg-white p-10 md:p-14 rounded-3xl shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[100px] -z-1" />
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center text-accent shadow-lg mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Eye className="w-8 h-8" />
                </div>
                <h2 className="font-heading text-4xl font-bold text-dark mb-6">{isEn ? "Our Vision" : "Vizyonumuz"}</h2>
                <div className="space-y-4 text-muted text-lg leading-relaxed">
                  <p>
                    {isEn ? (
                      <>To be the <strong className="text-primary">symbol of quality and trust</strong>, not just square meters in the sector. To carry our adventure that started in and around Ankara to the top of the construction sector with innovative and ultra-modern architectural solutions.</>
                    ) : (
                      <>Sektörde sadece metrekareler değil, <strong className="text-primary">kalite ve güvenin sembolü</strong> olmak. Ankara ve çevresinde başlayan serüvenimizi, yenilikçi ve ultra modern mimari çözümlerle inşaat sektörünün zirvesine taşımak.</>
                    )}
                  </p>
                  <p>
                    {isEn ? (
                      <>By blending the traditional understanding of quality with contemporary engineering, to become a leading 'Building Brand' that <strong className="text-dark">pushes aesthetic limits</strong> and shapes the city's silhouette.</>
                    ) : (
                      <>Geleneksel kalite anlayışını çağdaş mühendislikle harmanlayarak, <strong className="text-dark">estetik sınırları zorlayan</strong> ve şehrin silüetine yön veren öncü bir 'Yapı Markası' haline gelmek.</>
                    )}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* MİSYON KARTI */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative group mt-12 lg:mt-24"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-l from-accent/0 to-accent/0 group-hover:from-accent/30 group-hover:to-transparent rounded-3xl blur-md transition-all duration-700" />
              <div className="relative h-full bg-primary p-10 md:p-14 rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/5 rounded-tr-[100px] z-0" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-accent shadow-lg mb-8 border border-white/5 group-hover:rotate-12 transition-transform duration-500">
                    <Target className="w-8 h-8" />
                  </div>
                  <h2 className="font-heading text-4xl font-bold text-white mb-6">{isEn ? "Our Mission" : "Misyonumuz"}</h2>
                  <div className="space-y-4 text-white/70 text-lg leading-relaxed">
                    <p>
                      {isEn ? (
                        <>By taking our customers' dreams and expectations right to our center; to produce <strong className="text-white">solid-based, aesthetic, and functional</strong> living spaces.</>
                      ) : (
                        <>Müşterilerimizin hayallerini ve beklentilerini tam merkezimize alarak; <strong className="text-white">sağlam temelli, estetik, ve fonksiyonel</strong> yaşam alanları üretmek.</>
                      )}
                    </p>
                    <p>
                      {isEn ? (
                        <>Working with the principle of <strong className="text-accent">"Zero Error, Maximum Trust"</strong> in every project, and never compromising high standards from the smallest nail used to the general architectural concept. To realize projects where families will live peacefully and investors will choose with confidence.</>
                      ) : (
                        <>Her bir projede <strong className="text-accent">"Sıfır Hata, Maksimum Güven"</strong> prensibiyle çalışıp, kullanılan en ufak bir çividen genel mimari konsepte kadar yüksek standartlardan asla taviz vermemek. Ailelerin huzurla yaşayacağı, yatırımcıların ise güvenle tercih edeceği projeleri hayata geçirmek.</>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-white relative">
        <div className="absolute inset-0 bg-surface/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-dark mb-6">{isEn ? "Our Core Values" : "Temel Değerlerimiz"}</h2>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-6" />
            <p className="text-muted text-lg">
              {isEn ? "Our unwavering company culture and fundamental working principles that make us who we are and become our signature in every project." : "Bizi biz yapan, her projede imzamız haline gelen sarsılmaz şirket kültürümüz ve temel çalışma prensiplerimiz."}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-surface-dark hover:shadow-xl hover:border-accent/40 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-surface rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-accent transition-colors duration-300 mb-6">
                  {val.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                  {val.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Wrapper */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            {isEn ? (
              <>Are you ready to meet <br /> <span className="text-gradient-gold">this Vision?</span></>
            ) : (
              <>Bu Vizyonla Tanışmaya <br /> <span className="text-gradient-gold">Hazır Mısınız?</span></>
            )}
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            {isEn 
              ? "Examine our promising, quality and prestige-oriented new generation construction projects or get a quote for your project." 
              : "Gelecek vadeden, kalite ve prestij odaklı yeni nesil inşaat projelerimizi inceleyin veya projeniz için teklif alın."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={isEn ? "/en/iletisim" : "/iletisim"}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-dark text-primary font-bold rounded-xl hover:scale-105 transition-transform duration-300"
            >
              {isEn ? "Contact Us" : "Bizimle İletişime Geçin"}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
