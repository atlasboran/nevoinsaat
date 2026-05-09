import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK Text",
  description: "Nevo Insaat PDPL (KVKK) Information Text and Personal Data Protection.",
  robots: { index: false, follow: false },
};

export default function KVKKPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-white">PDPL (KVKK) Information Text</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <p className="text-muted leading-relaxed">
            As Nevo Insaat, we attach great importance to the protection of your personal data within the scope of the Personal Data Protection Law No. 6698 (&quot;KVKK&quot;).
          </p>
          <h2 className="font-heading text-xl font-bold text-dark mt-8 mb-4">Data Controller</h2>
          <p className="text-muted leading-relaxed">
            Nevo Insaat - Dagyaka Mah. 2007 Cad. No: 4, Kahramankazan / Ankara
          </p>
          <h2 className="font-heading text-xl font-bold text-dark mt-8 mb-4">Collected Personal Data</h2>
          <p className="text-muted leading-relaxed">
            Name, surname, phone number, e-mail address, and message content sent through the contact form on our website are collected.
          </p>
          <h2 className="font-heading text-xl font-bold text-dark mt-8 mb-4">Purpose of Processing Data</h2>
          <p className="text-muted leading-relaxed">
            The collected personal data is processed to respond to your contact requests, prepare proposals, and increase our service quality.
          </p>
          <h2 className="font-heading text-xl font-bold text-dark mt-8 mb-4">Contact</h2>
          <p className="text-muted leading-relaxed">
            You can contact <a href="mailto:info@nevoinsaat.com" className="text-accent hover:underline">info@nevoinsaat.com</a> for your rights under PDPL.
          </p>
        </div>
      </section>
    </>
  );
}
