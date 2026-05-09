import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import StickyCallButton from "@/components/ui/StickyCallButton";
import LeadPopup from "@/components/ui/LeadPopup";
import PwaRegister from "@/components/layout/PwaRegister";
import type { Viewport } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B0F19",
};

export const metadata: Metadata = {
  title: {
    default: "Nevo İnşaat | Ankara İnşaat Firması - Güvenle İnşa Ediyoruz",
    template: "%s | Nevo İnşaat",
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Nevo İnşaat",
  },
  description:
    "Ankara ve Kahramankazan bölgesinde profesyonel inşaat, proje geliştirme ve anahtar teslim yapı çözümleri sunan Nevo İnşaat. Güvenilir, kaliteli ve zamanında teslim.",
  keywords: [
    "nevo inşaat",
    "ankara inşaat firması",
    "kahramankazan inşaat",
    "ankara müteahhit",
    "anahtar teslim inşaat",
    "villa inşaatı ankara",
    "konut projesi ankara",
  ],
  metadataBase: new URL("https://nevoinsaat.com"),
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://nevoinsaat.com",
    siteName: "Nevo İnşaat",
    title: "Nevo İnşaat | Ankara İnşaat Firması",
    description:
      "Ankara ve Kahramankazan bölgesinde profesyonel inşaat, proje geliştirme ve anahtar teslim yapı çözümleri.",
    images: [{
      url: "https://nevoinsaat.com/opengraph-image.jpg",
      width: 1200,
      height: 630,
      alt: "Nevo İnşaat Kurumsal",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nevo İnşaat | Ankara İnşaat Firması",
    description:
      "Ankara ve Kahramankazan bölgesinde profesyonel inşaat, proje geliştirme ve anahtar teslim yapı çözümleri.",
    images: ["https://nevoinsaat.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nevoinsaat.com",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  verification: {
    google: "0BykO8v2wy9ZcAXWGDqGHVJ5i1BD2UPg2koH9pV3_sE",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ConstructionCompany",
  name: "Nevo İnşaat",
  url: "https://nevoinsaat.com",
  logo: "https://nevoinsaat.com/images/logo.png",
  telephone: ["0312 437 12 12", "0543 364 87 42"],
  email: ["info@nevoinsaat.com", "nevoprojeinsaat@gmail.com"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dağyaka Mah. 2007 Cad. No: 4",
    addressLocality: "Kahramankazan",
    addressRegion: "Ankara",
    postalCode: "06980",
    addressCountry: "TR",
  },
  areaServed: {
    "@type": "City",
    name: "Ankara",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `<!--
=========================================================
█▀▄▀█ █▀▀ █▄▄ █░█
█░▀░█ ██▄ █▄█ █▄█
=========================================================

 Kendime Yettim.

 "Kimse gelmedi, ben kendim geldim kendime.!
  ve yettim."

 Melih Bilge
 +90 541 584 19 38
=========================================================
-->`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="antialiased">
        <PwaRegister />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <StickyCallButton />
        <LeadPopup />
      </body>
    </html>
  );
}
