import type { Metadata } from "next";
import HizmetlerPage from "./HizmetlerPage";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description: "Nevo İnşaat hizmetleri: Anahtar teslim inşaat, konut projeleri, villa inşaatı, ticari yapı, taahhüt ve proje geliştirme.",
  alternates: { canonical: "https://nevoinsaat.com/hizmetler" },
};

export default function Page() {
  return <HizmetlerPage />;
}
