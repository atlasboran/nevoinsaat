"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, Award, Clock } from "lucide-react";
import { useEffect, useState, useRef } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span ref={ref} className="text-gradient-gold font-heading text-4xl md:text-5xl font-bold tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function HeroSection({ isEn = false }: { isEn?: boolean }) {
  const stats = [
    { number: 7, suffix: "+", label: isEn ? "Completed Projects" : "Tamamlanan Proje", floatDelay: 0 },
    { number: 500, suffix: "+", label: isEn ? "Happy Families" : "Mutlu Aile", floatDelay: 1.5 },
    { number: 10, suffix: "+", label: isEn ? "Years in Business" : "Yıllık Firma", floatDelay: 3 },
    { number: 50, suffix: "+", label: isEn ? "Expert Staff" : "Uzman Kadro", floatDelay: 4.5 },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full"
            style={{
              top: `${20 + i * 12}%`,
              left: `${60 + (i % 3) * 12}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-[2px] w-12 bg-gradient-to-r from-accent to-transparent" />
              <span className="text-accent font-medium tracking-[0.2em] text-sm uppercase">
                {isEn ? "Ankara's Leading Construction Brand" : "Ankara'nın Lider İnşaat Markası"}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              {isEn ? (
                <>Building the <span className="text-gradient-gold">Future</span><br/>with Trust</>
              ) : (
                <>Geleceği <span className="text-gradient-gold">Güvenle</span><br/>İnşa Ediyoruz</>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
            >
              {isEn ? "Construction works, Contracting, Building Operations" : "Yapı İnşaat, Yapı Taahhüt, Bina İşleri"}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/projeler"
                className="shine-effect group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-dark text-primary font-bold rounded-xl hover:shadow-2xl hover:shadow-accent/30 transform hover:scale-105 transition-all duration-300"
              >
                {isEn ? "Explore Our Projects" : "Projelerimizi İnceleyin"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-accent/50 transition-all duration-300"
              >
                <Play className="w-4 h-4" />
                {isEn ? "Get Quote" : "Teklif Alın"}
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex items-center justify-between sm:justify-start gap-2 sm:gap-8 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                </div>
                <div>
                  <span className="text-white font-bold text-sm sm:text-lg block leading-none">100%</span>
                  <p className="text-white/40 text-[9px] sm:text-xs mt-0.5">{isEn ? "Reliable" : "Güvenilir"}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                </div>
                <div>
                  <span className="text-white font-bold text-sm sm:text-lg block leading-none">A+</span>
                  <p className="text-white/40 text-[9px] sm:text-xs leading-tight mt-0.5">{isEn ? "Quality Standard" : "Kalite Standardı"}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                </div>
                <div className="text-left">
                  <span className="text-white font-bold text-sm sm:text-lg block leading-none">{isEn ? "On Time" : "Zamanında"}</span>
                  <p className="text-white/40 text-[9px] sm:text-xs leading-tight mt-0.5">{isEn ? "Delivery Guarantee" : "Teslim Garantisi"}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Animated Stats Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-5">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + i * 0.15,
                  type: "spring",
                  stiffness: 100,
                }}
                className={`relative group ${i === 0 ? "translate-y-6" : ""} ${i === 3 ? "-translate-y-6" : ""}`}
              >
                {/* Glow border on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/30 group-hover:via-accent-light/20 group-hover:to-accent/30 rounded-2xl blur-sm transition-all duration-700" />
                
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: stat.floatDelay,
                    ease: "easeInOut",
                  }}
                  className="relative glass rounded-2xl p-7 hover:bg-white/15 transition-all duration-500 cursor-default overflow-hidden"
                >
                  {/* Subtle rotating glow inside */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-10 -right-10 w-24 h-24 bg-accent/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  />



                  {/* Animated counter */}
                  <div className="relative">
                    <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                  </div>

                  <p className="text-white/50 text-sm mt-2 font-medium">{stat.label}</p>

                  {/* Bottom accent line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + i * 0.2, duration: 0.8 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent origin-left"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-accent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
