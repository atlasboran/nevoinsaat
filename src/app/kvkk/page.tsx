import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: "Nevo İnşaat KVKK Aydınlatma Metni ve kişisel verilerin korunması hakkında bilgilendirme.",
  robots: { index: false, follow: false },
};

export default function KVKKPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-white">KVKK Aydınlatma Metni</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <p className="text-muted leading-relaxed">
            Nevo İnşaat olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) kapsamında kişisel verilerinizin korunmasına büyük önem vermekteyiz.
          </p>
          <h2 className="font-heading text-xl font-bold text-dark mt-8 mb-4">Veri Sorumlusu</h2>
          <p className="text-muted leading-relaxed">
            Nevo İnşaat - Dağyaka Mah. 2007 Cad. No: 4, Kahramankazan / Ankara
          </p>
          <h2 className="font-heading text-xl font-bold text-dark mt-8 mb-4">Toplanan Kişisel Veriler</h2>
          <p className="text-muted leading-relaxed">
            Web sitemiz üzerinden iletişim formu aracılığıyla gönderilen ad soyad, telefon numarası, e-posta adresi ve mesaj içeriği bilgileri toplanmaktadır.
          </p>
          <h2 className="font-heading text-xl font-bold text-dark mt-8 mb-4">Verilerin İşlenme Amacı</h2>
          <p className="text-muted leading-relaxed">
            Toplanan kişisel veriler, iletişim taleplerinize yanıt vermek, teklif hazırlamak ve hizmet kalitemizi artırmak amacıyla işlenmektedir.
          </p>
          <h2 className="font-heading text-xl font-bold text-dark mt-8 mb-4">İletişim</h2>
          <p className="text-muted leading-relaxed">
            KVKK kapsamındaki haklarınız için <a href="mailto:info@nevoinsaat.com" className="text-accent hover:underline">info@nevoinsaat.com</a> adresine başvurabilirsiniz.
          </p>
        </div>
      </section>
    </>
  );
}
