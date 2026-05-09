"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Users,
  Award,
  Hammer,
  HeartHandshake,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const reasons = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Güvenilirlik",
    description:
      "Tamamlanan projelerimiz ve memnun müşterilerimizle sektörde güven inşa ediyoruz.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Zamanında Teslim",
    description:
      "Proje planına sadık kalarak, taahhüt ettiğimiz sürede teslimatı gerçekleştiriyoruz.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Profesyonel Ekip",
    description:
      "Deneyimli mühendis, mimar ve teknisyen kadromuzla kusursuz işçilik sunuyoruz.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Kalite Standardı",
    description:
      "En yüksek yapı standartlarını uygulayarak, uzun ömürlü yapılar inşa ediyoruz.",
  },
  {
    icon: <Hammer className="w-6 h-6" />,
    title: "Kaliteli Malzeme",
    description:
      "Sektörün en güvenilir tedarikçilerinden premium malzemeler kullanıyoruz.",
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: "Müşteri Odaklılık",
    description:
      "Şeffaf iletişim ve sürekli bilgilendirme ile müşteri memnuniyetini ön planda tutuyoruz.",
  },
];

const reasonsTranslationsEn: Record<string, any> = {
  "Güvenilirlik": {
    title: "Reliability",
    description: "We build trust in the sector with our completed projects and satisfied customers."
  },
  "Zamanında Teslim": {
    title: "On-time Delivery",
    description: "We stick to the project plan and deliver exactly within the promised timeframe."
  },
  "Profesyonel Ekip": {
    title: "Professional Team",
    description: "We provide flawless craftsmanship with our experienced engineers, architects, and technicians."
  },
  "Kalite Standardı": {
    title: "Quality Standard",
    description: "We build long-lasting structures by applying the highest construction standards."
  },
  "Kaliteli Malzeme": {
    title: "Quality Materials",
    description: "We use premium materials from the sector's most reliable suppliers."
  },
  "Müşteri Odaklılık": {
    title: "Customer Focus",
    description: "We prioritize customer satisfaction through transparent communication and continuous updates."
  }
};

export default function WhyUsSection({ isEn = false }: { isEn?: boolean }) {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle={isEn ? "Why Us" : "Neden Biz"}
          title={isEn ? "The Nevo İnşaat Difference" : "Nevo İnşaat Farkı"}
          description={isEn 
            ? "We add value to your projects with our approach that makes a difference in the sector and our understanding of quality."
            : "Sektörde fark yaratan yaklaşımımız ve kalite anlayışımızla projelerinize değer katıyoruz."}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => {
            const trData = isEn ? reasonsTranslationsEn[reason.title] : null;
            const dTitle = trData?.title || reason.title;
            const dDesc = trData?.description || reason.description;
            
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 group flex items-start gap-4 sm:gap-5"
            >
              <div className="w-12 h-12 shrink-0 bg-primary rounded-xl flex items-center justify-center text-accent group-hover:-translate-y-1 transition-transform duration-300">
                {reason.icon}
              </div>
              <div>
                <h3 className="font-heading text-lg sm:text-lg font-bold text-dark mb-2">
                  {dTitle}
                </h3>
                <p className="text-muted text-[13px] sm:text-sm leading-relaxed">
                  {dDesc}
                </p>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
