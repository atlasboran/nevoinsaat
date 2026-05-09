"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, Building2, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

export default function LeadPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const isEn = pathname === "/en" || pathname?.startsWith("/en/");

  useEffect(() => {
    // Show popup after 10 seconds, but only if not previously closed in this session
    const hasClosed = sessionStorage.getItem("nevo_lead_popup_closed");
    if (hasClosed) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("nevo_lead_popup_closed", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-24 sm:bottom-8 left-4 sm:left-8 z-50 max-w-sm w-[calc(100%-2rem)] sm:w-80 backdrop-blur-2xl bg-white/80 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-white/60 overflow-hidden"
        >
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10 transform -translate-x-1/2 translate-y-1/2" />
          
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-dark/60 hover:text-dark bg-white/40 hover:bg-white/80 backdrop-blur-md shadow-sm border border-white/80 flex items-center justify-center rounded-full transition-all duration-300 z-10"
            aria-label="Kapat"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="p-6 sm:p-8 pt-10">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-dark rounded-2xl flex items-center justify-center text-primary mb-5 shadow-lg shadow-accent/30 transform -rotate-3">
              <Building2 className="w-6 h-6" />
            </div>
            
            <h4 className="font-heading font-extrabold text-dark tracking-tight text-xl mb-3">
              {isEn ? "Planning a New Project?" : "Yeni Bir Projeniz Mi Var?"}
            </h4>
            <p className="text-muted text-sm leading-relaxed mb-6 font-medium">
              {isEn 
                ? "Contact our expert team for a site evaluation, architectural planning, and a custom quote to build your dream structure."
                : "Hayalinizdeki yapıyı inşa etmek için yerinde keşif, mimari projelendirme ve teklif almak üzere uzman ekibimizle görüşün."}
            </p>
            
            <Link 
              href={isEn ? "/en/iletisim" : "/iletisim"}
              onClick={handleClose}
              className="group relative flex items-center justify-between w-full px-5 py-3.5 bg-primary text-white text-sm font-semibold rounded-xl overflow-hidden shadow-md shadow-primary/20 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
              <span className="relative z-10">{isEn ? "Get a Quote" : "Ücretsiz Teklif Alın"}</span>
              <div className="relative z-10 w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-colors">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
