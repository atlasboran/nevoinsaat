"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/vizyon", label: "Vizyon" },
  {
    href: "/projeler",
    label: "Projeler",
    children: [
      { href: "/projeler", label: "Tüm Projeler" },
      { href: "/tamamlanan-projeler", label: "Tamamlanan Projeler" },
    ],
  },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const isEn = pathname === "/en" || pathname.startsWith("/en/");

  const currentNavLinks = isEn ? [
    { href: "/en", label: "Home" },
    { href: "/en/hakkimizda", label: "About Us" },
    { href: "/en/vizyon", label: "Vision" },
    {
      href: "/en/projeler",
      label: "Projects",
      children: [
        { href: "/en/projeler", label: "All Projects" },
        { href: "/en/tamamlanan-projeler", label: "Completed Projects" },
      ],
    },
    { href: "/en/hizmetler", label: "Services" },
    { href: "/en/blog", label: "Blog" },
    { href: "/en/iletisim", label: "Contact" },
  ] : navLinks;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-primary/95 backdrop-blur-xl shadow-2xl shadow-black/20 py-2 md:py-3"
            : "bg-transparent py-3 md:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className={`flex flex-col md:flex-row items-center md:gap-0 group transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 -translate-x-4 lg:opacity-100 lg:translate-x-0 pointer-events-none lg:pointer-events-auto' : 'opacity-100 translate-x-0'}`}>
              <Image
                src="/images/logo1.png"
                alt="Nevo İnşaat Logo"
                width={600}
                height={160}
                className="w-24 sm:w-32 lg:w-40 h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                priority
              />
              <div className="flex flex-col -mt-6 md:mt-0 md:-ml-2">
                <span className="shimmer text-transparent bg-clip-text font-heading text-[13px] font-black tracking-[0.4em] uppercase">
                  İNŞAAT
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {currentNavLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() =>
                    link.children && setActiveDropdown(link.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-2 lg:px-3 py-2 text-[14px] font-medium text-white/90 hover:text-white transition-colors duration-300 hover-underline"
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300" />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.children && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-56 py-2 bg-primary-light/95 backdrop-blur-xl rounded-xl border border-accent/10 shadow-2xl"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-white/70 hover:text-accent hover:bg-white/5 transition-all duration-200"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Desktop CTA & Lang */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-4 whitespace-nowrap">
              <div className="flex items-center gap-4 mr-1 lg:mr-2 border-r border-white/20 pr-3 lg:pr-4">
                <Link href="/" className={`flex items-center transition-all duration-300 ${!isEn ? 'scale-110 drop-shadow-[0_0_10px_rgba(200,169,97,0.5)]' : 'opacity-60 hover:opacity-100 grayscale hover:grayscale-0'}`}>
                  <img src="https://flagcdn.com/tr.svg" alt="TR" width={24} height={18} className="rounded-sm object-cover shadow-sm" />
                </Link>
                <Link href="/en" className={`flex items-center transition-all duration-300 ${isEn ? 'scale-110 drop-shadow-[0_0_10px_rgba(200,169,97,0.5)]' : 'opacity-60 hover:opacity-100 grayscale hover:grayscale-0'}`}>
                  <img src="https://flagcdn.com/gb.svg" alt="EN" width={24} height={18} className="rounded-sm object-cover shadow-sm" />
                </Link>
              </div>

              <a
                href="tel:05433648742"
                className="flex items-center gap-2 text-white/80 hover:text-accent text-sm transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">0543 364 87 42</span>
              </a>
              <Link
                href="/iletisim"
                className="shine-effect px-6 py-2.5 bg-gradient-to-r from-accent to-accent-dark text-primary font-semibold text-sm rounded-lg hover:shadow-lg hover:shadow-accent/25 transform hover:scale-105 transition-all duration-300"
              >
                {isEn ? "Get Quote" : "Teklif Alın"}
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-accent transition-colors relative z-[60]"
              aria-label="Menü"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[55] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="absolute right-0 top-0 bottom-0 w-[85vw] sm:w-80 bg-primary shadow-2xl border-l border-white/10">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full pt-8 pb-32 overflow-y-auto px-6">
                
                {/* Mobile Drawer Logo */}
                <div className="flex flex-col items-start mb-8 pb-6 border-b border-white/5 w-full">
                  <Image
                    src="/images/logo1.png"
                    alt="Nevo İnşaat Logo"
                    width={600}
                    height={160}
                    className="h-16 w-auto object-contain"
                  />
                  <span className="-mt-4 shimmer text-transparent bg-clip-text font-heading text-[10px] font-black tracking-[0.4em] uppercase">
                    İNŞAAT
                  </span>
                </div>

                <nav className="flex-1 space-y-1">
                  {currentNavLinks.map((link) => (
                    <div key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-3 px-2 text-white/90 hover:text-accent hover:pl-2 text-base font-medium tracking-wide transition-all duration-300 border-b border-white/5"
                      >
                        {link.label}
                      </Link>
                      {link.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-2 py-2 px-4 text-white/50 hover:text-accent hover:pl-4 text-sm transition-all duration-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </nav>

                <div className="space-y-4 mt-auto pt-10">
                  <div className="flex items-center justify-center gap-10 mb-4">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center transition-all duration-300 ${!isEn ? 'scale-110 drop-shadow-[0_0_15px_rgba(200,169,97,0.5)]' : 'opacity-50 hover:opacity-100 grayscale hover:grayscale-0'}`}>
                      <img src="https://flagcdn.com/tr.svg" alt="TR" width={32} height={24} className="rounded-md object-cover shadow-sm" />
                    </Link>
                    <span className="text-white/20">|</span>
                    <Link href="/en" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center transition-all duration-300 ${isEn ? 'scale-110 drop-shadow-[0_0_15px_rgba(200,169,97,0.5)]' : 'opacity-50 hover:opacity-100 grayscale hover:grayscale-0'}`}>
                      <img src="https://flagcdn.com/gb.svg" alt="EN" width={32} height={24} className="rounded-md object-cover shadow-sm" />
                    </Link>
                  </div>

                  <a
                    href="tel:05433648742"
                    className="flex items-center justify-center gap-2 py-3.5 px-6 border border-accent/20 bg-accent/5 text-accent rounded-xl font-medium hover:bg-accent/10 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    0543 364 87 42
                  </a>
                  <Link
                    href="/iletisim"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="shine-effect block text-center py-3.5 px-6 bg-gradient-to-r from-accent to-accent-dark text-primary font-bold rounded-xl shadow-lg shadow-accent/20"
                  >
                    {isEn ? "Get Quote" : "Teklif Alın"}
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
