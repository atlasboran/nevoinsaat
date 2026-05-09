import type { Metadata } from "next";
import CompletedPage from "./CompletedPage";

export const metadata: Metadata = {
  title: "Tamamlanan Projeler - Referanslarımız",
  description: "Nevo İnşaat tarafından başarıyla tamamlanan konut, villa ve ticari inşaat projeleri. Güvenimizi kanıtlayan referanslarımız.",
  alternates: { canonical: "https://nevoinsaat.com/tamamlanan-projeler" },
};

export default function Page() {
  return <CompletedPage />;
}
