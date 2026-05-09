import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Nevo Insaat Privacy Policy.",
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-white">Privacy Policy</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <p className="text-muted leading-relaxed">
            As Nevo Insaat, we respect the privacy of our website visitors and ensure the protection of their personal data.
          </p>
          <h2 className="font-heading text-xl font-bold text-dark mt-8 mb-4">Cookies</h2>
          <p className="text-muted leading-relaxed">
            Our website uses cookies to improve user experience. You can manage your cookie preferences through your browser settings.
          </p>
          <h2 className="font-heading text-xl font-bold text-dark mt-8 mb-4">Third-Party Services</h2>
          <p className="text-muted leading-relaxed">
            Third-party services such as Google Analytics and Google Maps are handled on our website. The privacy policies of these particular services apply.
          </p>
          <h2 className="font-heading text-xl font-bold text-dark mt-8 mb-4">Contact</h2>
          <p className="text-muted leading-relaxed">
            For questions regarding our privacy policy, you can reach out to <a href="mailto:info@nevoinsaat.com" className="text-accent hover:underline">info@nevoinsaat.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}
