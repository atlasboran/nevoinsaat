import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-primary">
      <div className="text-center px-4">
        <div className="text-gradient-gold font-heading text-8xl md:text-9xl font-bold mb-4">
          404
        </div>
        <h1 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
          Sayfa Bulunamadı
        </h1>
        <p className="text-white/50 text-lg max-w-md mx-auto mb-8">
          Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent to-accent-dark text-primary font-bold rounded-xl hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300"
        >
          Anasayfaya Dön
        </Link>
      </div>
    </section>
  );
}
