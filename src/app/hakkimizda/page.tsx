import type { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Nevo İnşaat hakkında. Ankara ve Kahramankazan bölgesinde 10+ yıllık deneyimiyle güvenilir inşaat çözümleri sunan profesyonel firma.",
  alternates: {
    canonical: "https://nevoinsaat.com/hakkimizda",
  },
};

export default function Page() {
  return <AboutPage />;
}
