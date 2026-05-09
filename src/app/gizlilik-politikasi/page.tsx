import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Nevo İnşaat Gizlilik Politikası.",
  robots: { index: false, follow: false },
};

export default function GizlilikPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-white">Gizlilik Politikası</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <p className="text-muted leading-relaxed">
            Nevo İnşaat olarak, web sitemizi ziyaret eden kullanıcılarımızın gizliliğine saygı duyuyor ve kişisel verilerinin korunmasını sağlıyoruz.
          </p>
          <h2 className="font-heading text-xl font-bold text-dark mt-8 mb-4">Çerezler</h2>
          <p className="text-muted leading-relaxed">
            Web sitemiz, kullanıcı deneyimini iyileştirmek amacıyla çerezler kullanmaktadır. Tarayıcı ayarlarınızdan çerez tercihlerinizi yönetebilirsiniz.
          </p>
          <h2 className="font-heading text-xl font-bold text-dark mt-8 mb-4">Üçüncü Taraf Hizmetler</h2>
          <p className="text-muted leading-relaxed">
            Web sitemizde Google Analytics ve Google Maps gibi üçüncü taraf hizmetler kullanılmaktadır. Bu hizmetlerin kendi gizlilik politikaları geçerlidir.
          </p>
          <h2 className="font-heading text-xl font-bold text-dark mt-8 mb-4">İletişim</h2>
          <p className="text-muted leading-relaxed">
            Gizlilik politikamız hakkında sorularınız için <a href="mailto:info@nevoinsaat.com" className="text-accent hover:underline">info@nevoinsaat.com</a> adresine ulaşabilirsiniz.
          </p>
        </div>
      </section>
    </>
  );
}
