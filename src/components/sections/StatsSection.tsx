"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface CounterProps {
  target: number;
  suffix?: string;
  label: string;
}

function Counter({ target, suffix = "", label }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

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
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center">
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-gradient-gold font-heading text-5xl md:text-6xl font-bold"
      >
        {count}
        {suffix}
      </motion.span>
      <p className="text-white/50 text-sm md:text-base mt-3 font-medium">
        {label}
      </p>
    </div>
  );
}

export default function StatsSection({ isEn = false }: { isEn?: boolean }) {
  return (
    <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(200,169,97,0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-heading text-3xl md:text-4xl font-bold text-white mb-16"
        >
          {isEn ? "Nevo İnşaat in " : "Rakamlarla "}
          <span className="text-gradient-gold">{isEn ? "Numbers" : "Nevo İnşaat"}</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <Counter target={7} suffix="+" label={isEn ? "Completed Projects" : "Tamamlanan Proje"} />
          <Counter target={500} suffix="+" label={isEn ? "Happy Families" : "Mutlu Aile"} />
          <Counter target={10} suffix="+" label={isEn ? "Years in Business" : "Yıllık Firma"} />
          <Counter target={50} suffix="+" label={isEn ? "Expert Staff" : "Uzman Kadro"} />
        </div>

      </div>
    </section>
  );
}
