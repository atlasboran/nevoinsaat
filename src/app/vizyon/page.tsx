import type { Metadata } from "next";
import VizyonPage from "./VizyonPage";

export const metadata: Metadata = {
  title: "Vizyon & Misyon | Nevo İnşaat - Geleceği Güvenle İnşa Ediyoruz",
  description:
    "Ankara'nın lider inşaat markası Nevo İnşaat'ın vizyon ve misyonu. Modern mimari, güvenilir yapı standartları ve kalite odaklı yaklaşımımızla fark yaratıyoruz.",
  alternates: { canonical: "https://nevoinsaat.com/vizyon" },
};

export default function Page() {
  return <VizyonPage />;
}
