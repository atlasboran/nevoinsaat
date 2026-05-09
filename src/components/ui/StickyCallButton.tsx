"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function StickyCallButton() {
  return (
    <motion.a
      href="tel:05433648742"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.4 }}
      className="fixed bottom-6 left-6 z-50 lg:hidden flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-accent to-accent-dark text-primary font-semibold text-sm rounded-full shadow-2xl shadow-accent/30 hover:shadow-accent/50 hover:scale-105 transition-all duration-300"
      aria-label="Hemen arayın"
    >
      <Phone className="w-4 h-4" />
      <span>Hemen Ara</span>
    </motion.a>
  );
}
