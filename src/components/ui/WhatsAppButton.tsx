"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/905433648742?text=Merhaba%2C%20Nevo%20%C4%B0n%C5%9Faat%20ile%20ilgili%20bilgi%20almak%20istiyorum."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.4, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/30 hover:scale-110 hover:shadow-[#25D366]/50 transition-all duration-300 group"
      aria-label="WhatsApp ile iletişime geçin"
    >
      <MessageCircle className="w-6 h-6 text-white" />
      <div className="absolute right-full mr-3 px-3 py-1.5 bg-white text-gray-800 text-xs font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        WhatsApp ile yazın
      </div>
    </motion.a>
  );
}
