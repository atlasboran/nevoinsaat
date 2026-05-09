"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle } from "lucide-react";

export default function IletisimPage({ isEn = false }: { isEn?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      await fetch("https://formsubmit.co/ajax/nevoprojeinsaat@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          _subject: `Yeni Teklif/İletişim Talebi: ${data.name}`,
          _template: "table"
        }),
      });
      
      setSubmitted(true);
      e.currentTarget.reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error(error);
      alert("Bir hata oluştu. Lütfen bizi doğrudan iletişim numaramızdan arayın.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-[0.2em] rounded-full mb-6">
              {isEn ? "CONTACT" : "İletişim"}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {isEn ? "Get In " : "Bizimle "}
              <span className="text-gradient-gold">{isEn ? "Touch" : "İletişime Geçin"}</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              {isEn 
                ? "Contact us to get information about your project, request a quote, or for any questions." 
                : "Projeniz hakkında bilgi almak, teklif istemek veya herhangi bir sorunuz için bize ulaşın."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="font-heading text-2xl font-bold text-dark mb-6">
                  {isEn ? "Contact Information" : "İletişim Bilgileri"}
                </h2>
                <p className="text-muted leading-relaxed">
                  {isEn 
                    ? "You can reach us through the channels below for a free evaluation, project consulting, or to get a quote."
                    : "Ücretsiz keşif görüşmesi, proje danışmanlığı veya teklif almak için aşağıdaki kanallardan bize ulaşabilirsiniz."}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-accent shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-dark mb-1">{isEn ? "Address" : "Adres"}</h3>
                    <p className="text-muted text-sm leading-relaxed">
                      Dağyaka Mah. 2007 Cad. No: 4<br />
                      Kahramankazan / ANKARA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-accent shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-dark mb-1">{isEn ? "Phone" : "Telefon"}</h3>
                    <a href="tel:03124371212" className="block text-muted text-sm hover:text-accent transition-colors">
                      0312 437 12 12
                    </a>
                    <a href="tel:05433648742" className="block text-muted text-sm hover:text-accent transition-colors">
                      0543 364 87 42
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-accent shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-dark mb-1">{isEn ? "Email" : "E-Posta"}</h3>
                    <a href="mailto:info@nevoinsaat.com" className="block text-muted text-sm hover:text-accent transition-colors">
                      info@nevoinsaat.com
                    </a>
                    <a href="mailto:nevoprojeinsaat@gmail.com" className="block text-muted text-sm hover:text-accent transition-colors">
                      nevoprojeinsaat@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-accent shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-dark mb-1">{isEn ? "Working Hours" : "Çalışma Saatleri"}</h3>
                    <p className="text-muted text-sm">{isEn ? "Monday - Saturday: 08:00 - 18:00" : "Pazartesi - Cumartesi: 08:00 - 18:00"}</p>
                    <p className="text-muted text-sm">{isEn ? "Sunday: Closed" : "Pazar: Kapalı"}</p>
                  </div>
                </div>

                <a
                  href="https://wa.me/905433648742"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#20BD5C] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  {isEn ? "Message via WhatsApp" : "WhatsApp ile Yazın"}
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm">
                <h2 className="font-heading text-2xl font-bold text-dark mb-2">
                  {isEn ? "Quote & Contact Form" : "Teklif & İletişim Formu"}
                </h2>
                <p className="text-muted text-sm mb-8">
                  {isEn ? "Fill out the form, and we'll get back to you as soon as possible." : "Formu doldurun, en kısa sürede size dönüş yapalım."}
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-dark mb-2">
                      {isEn ? "Message Received!" : "Mesajınız Alındı!"}
                    </h3>
                    <p className="text-muted">
                      {isEn ? "We will contact you shortly." : "En kısa sürede sizinle iletişime geçeceğiz."}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
                          {isEn ? "Full Name *" : "Ad Soyad *"}
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          className="w-full px-4 py-3 bg-surface border border-surface-dark rounded-xl text-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                          placeholder={isEn ? "Your Full Name" : "Adınız Soyadınız"}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">
                          {isEn ? "Phone *" : "Telefon *"}
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          className="w-full px-4 py-3 bg-surface border border-surface-dark rounded-xl text-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                          placeholder="05XX XXX XX XX"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
                        {isEn ? "Email" : "E-Posta"}
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="w-full px-4 py-3 bg-surface border border-surface-dark rounded-xl text-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        placeholder="ornek@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-dark mb-2">
                        {isEn ? "Subject *" : "Konu *"}
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 bg-surface border border-surface-dark rounded-xl text-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      >
                        <option value="">{isEn ? "Select Subject" : "Konu Seçiniz"}</option>
                        <option value="teklif">{isEn ? "I Want to Get a Quote" : "Teklif Almak İstiyorum"}</option>
                        <option value="proje">{isEn ? "Information Regarding a Project" : "Proje Hakkında Bilgi"}</option>
                        <option value="arsa">{isEn ? "Land Evaluation" : "Arsa Değerlendirmesi"}</option>
                        <option value="isbirligi">{isEn ? "Cooperation" : "İş Birliği"}</option>
                        <option value="diger">{isEn ? "Other" : "Diğer"}</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
                        {isEn ? "Your Message *" : "Mesajınız *"}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-surface border border-surface-dark rounded-xl text-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                        placeholder={isEn ? "Give us details about your project..." : "Projeniz hakkında bize bilgi verin..."}
                      />
                    </div>
                    
                    {/* Security & Spam Prevention */}
                    <input type="text" name="_honey" style={{ display: 'none' }} />
                    <input type="hidden" name="_captcha" value="false" />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-accent to-accent-dark text-primary font-bold rounded-xl hover:shadow-xl hover:shadow-accent/20 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                      {isSubmitting 
                        ? (isEn ? "Sending..." : "Gönderiliyor...") 
                        : (isEn ? "Send Message" : "Mesaj Gönder")}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 rounded-2xl overflow-hidden h-[400px] bg-surface"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.8!2d32.68!3d40.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDAzJzM2LjAiTiAzMsKwNDAnNDguMCJF!5e0!3m2!1str!2str!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nevo İnşaat Konum"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
