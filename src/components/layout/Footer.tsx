"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  ArrowUp,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { ankaraDistricts } from "@/data/districts";

const quickLinks = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/vizyon", label: "Vizyon & Misyon" },
  { href: "/projeler", label: "Projeler" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

const serviceLinks = [
  { href: "/hizmetler/anahtar-teslim-insaat", label: "Anahtar Teslim İnşaat" },
  { href: "/hizmetler/konut-projeleri", label: "Konut Projeleri" },
  { href: "/hizmetler/villa-insaati", label: "Villa İnşaatı" },
  { href: "/hizmetler/ticari-yapi-insaati", label: "Ticari Yapı İnşaatı" },
  { href: "/hizmetler/taahhut-hizmetleri", label: "Taahhüt Hizmetleri" },
  { href: "/hizmetler/proje-gelistirme", label: "Proje Geliştirme" },
  { href: "/hizmetler/ozel-tasarim-evler", label: "Özel Tasarım Toplu & Tekli Evler" },
  { href: "/hizmetler/prefabrik-evler", label: "Prefabrik ve Özel Tasarım Evler" },
];

export default function Footer() {
  const pathname = usePathname();
  const isEn = pathname === "/en" || pathname.startsWith("/en/");

  return (
    <footer className="bg-primary text-white">
      {/* Top CTA Bar */}
      <div className="bg-gradient-to-r from-accent via-accent-light to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-primary font-heading text-2xl md:text-3xl font-bold">
                {isEn ? "Contact Us for Your Project" : "Projeniz İçin Bizimle İletişime Geçin"}
              </h3>
              <p className="text-primary/70 mt-1 text-sm md:text-base">
                {isEn ? "Call us now for a free evaluation and consultation." : "Ücretsiz keşif ve ön görüşme için hemen arayın."}
              </p>
            </div>
            <div className="flex flex-row gap-2 sm:gap-3 w-full sm:w-auto mt-4 md:mt-0">
              <a
                href="tel:05433648742"
                className="flex-1 sm:flex-none px-3 sm:px-8 py-3 text-sm sm:text-base bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors duration-300 text-center whitespace-nowrap"
              >
                {isEn ? "Call Now" : "Hemen Arayın"}
              </a>
              <Link
                href={isEn ? "/en/iletisim" : "/iletisim"}
                className="flex-1 sm:flex-none px-3 sm:px-8 py-3 text-sm sm:text-base bg-white/20 border-2 border-primary/30 text-primary font-semibold rounded-lg hover:bg-white/30 transition-colors duration-300 text-center whitespace-nowrap"
              >
                {isEn ? "Get Quote" : "Teklif Alın"}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex flex-col md:flex-row items-start md:items-center md:gap-0 group mb-6">
              <Image
                src="/images/logo1.png"
                alt="Nevo İnşaat Logo"
                width={600}
                height={160}
                className="h-24 lg:h-28 w-auto object-contain"
              />
              <div className="flex flex-col -mt-4 md:mt-0 md:-ml-2">
                <span className="shimmer text-transparent bg-clip-text font-heading text-[13px] font-black tracking-[0.4em] uppercase">
                  İNŞAAT
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {isEn
                ? "Producing modern, reliable and high-standard construction projects in Ankara and its surroundings, Nevo Insaat builds the future by combining quality and trust."
                : "Ankara ve çevresinde modern, güvenilir ve yüksek standartlı inşaat projeleri üreten Nevo İnşaat, kalite ve güveni bir arada sunarak geleceği inşa ediyor."}
            </p>
            <div className="flex items-center gap-2 text-white/40 text-xs">
              <Clock className="w-3.5 h-3.5" />
              <span>{isEn ? "Mon - Sat: 08:00 - 18:00" : "Pzt - Cmt: 08:00 - 18:00"}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-accent font-heading font-bold text-sm uppercase tracking-wider mb-6">
              {isEn ? "Quick Links" : "Hızlı Erişim"}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => {
                const enMap: Record<string, string> = { "Hakkımızda": "About Us", "Vizyon & Misyon": "Vision", "Projeler": "Projects", "Hizmetler": "Services", "Blog": "Blog", "İletişim": "Contact" };
                return (
                <li key={link.href}>
                  <Link
                    href={isEn ? `/en${link.href}` : link.href}
                    className="flex items-center gap-2 text-white/60 hover:text-accent text-sm transition-colors duration-200 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-accent/50 group-hover:translate-x-1 transition-transform" />
                    {isEn && enMap[link.label] ? enMap[link.label] : link.label}
                  </Link>
                </li>
              )})}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-accent font-heading font-bold text-sm uppercase tracking-wider mb-6">
              {isEn ? "Our Services" : "Hizmetlerimiz"}
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => {
                const enMap: Record<string, string> = {
                  "Anahtar Teslim İnşaat": "Turnkey Construction",
                  "Konut Projeleri": "Residential Projects",
                  "Villa İnşaatı": "Villa Construction",
                  "Ticari Yapı İnşaatı": "Commercial Construction",
                  "Taahhüt Hizmetleri": "Contracting Services",
                  "Proje Geliştirme": "Project Development",
                  "Özel Tasarım Toplu & Tekli Evler": "Custom Designed Homes",
                  "Prefabrik ve Özel Tasarım Evler": "Prefabricated Custom Homes",
                };
                return (
                <li key={link.href}>
                  <Link
                    href={isEn ? `/en${link.href}` : link.href}
                    className="flex items-center gap-2 text-white/60 hover:text-accent text-sm transition-colors duration-200 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-accent/50 group-hover:translate-x-1 transition-transform" />
                    {isEn && enMap[link.label] ? enMap[link.label] : link.label}
                  </Link>
                </li>
              )})}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-accent font-heading font-bold text-sm uppercase tracking-wider mb-6">
              {isEn ? "Contact" : "İletişim"}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-1 shrink-0" />
                <p className="text-white/60 text-sm leading-relaxed">
                  Dağyaka Mah. 2007 Cad. No: 4
                  <br />
                  Kahramankazan / ANKARA
                </p>
              </div>
              <a
                href="tel:03124371212"
                className="flex items-center gap-3 text-white/60 hover:text-accent text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-accent shrink-0" />
                0312 437 12 12
              </a>
              <a
                href="tel:05433648742"
                className="flex items-center gap-3 text-white/60 hover:text-accent text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-accent shrink-0" />
                0543 364 87 42
              </a>
              <a
                href="mailto:info@nevoinsaat.com"
                className="flex items-center gap-3 text-white/60 hover:text-accent text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-accent shrink-0" />
                info@nevoinsaat.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Regional Links */}
      <div className="border-t border-white/10 pt-8 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h4 className="text-accent font-heading font-bold text-xs uppercase tracking-wider mb-4">
            {isEn ? "Service Areas (Ankara)" : "Hizmet Bölgelerimiz (Ankara)"}
          </h4>
          <div className="flex flex-wrap gap-x-3 gap-y-2">
            {ankaraDistricts.map((district) => (
              <Link
                key={district.slug}
                href={`/hizmet-bolgeleri/${district.slug}`}
                className="text-white/40 hover:text-accent text-[11px] transition-colors"
                title={isEn ? `Ankara ${district.name} Construction Company` : `Ankara ${district.name} İnşaat Firması`}
              >
                 {district.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 pb-20 md:pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
              <p className="text-white/30 text-xs text-center sm:text-left">
                © {new Date().getFullYear()} Nevo İnşaat. {isEn ? "All rights reserved." : "Tüm hakları saklıdır."}
              </p>
              <span className="hidden sm:inline text-white/10 text-xs">|</span>
              <p className="text-white/30 text-xs text-center sm:text-left flex items-center gap-1">
                Powered by{" "}
                <a
                  href="https://sekizpro.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent/70 hover:text-accent font-semibold transition-colors duration-300"
                >
                  SekizPRO
                </a>
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href={isEn ? "/en/kvkk" : "/kvkk"}
                className="text-white/30 hover:text-accent text-xs transition-colors"
              >
                {isEn ? "KVKK (Privacy)" : "KVKK"}
              </Link>
              <Link
                href={isEn ? "/en/gizlilik-politikasi" : "/gizlilik-politikasi"}
                className="text-white/30 hover:text-accent text-xs transition-colors"
              >
                {isEn ? "Privacy Policy" : "Gizlilik Politikası"}
              </Link>
              <button
                onClick={() =>
                  typeof window !== "undefined" &&
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className="p-2 bg-white/5 hover:bg-accent/20 rounded-lg text-white/30 hover:text-accent transition-all"
                aria-label={isEn ? "Scroll to top" : "Yukarı çık"}
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
