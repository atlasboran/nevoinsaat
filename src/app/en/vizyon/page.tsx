import type { Metadata } from "next";
import VizyonPage from "@/app/vizyon/VizyonPage";

export const metadata: Metadata = {
  title: "Vision & Mission",
  description:
    "Nevo Insaat's vision and mission. Discover our future-oriented perspective, values, and quality standards.",
  alternates: {
    canonical: "https://nevoinsaat.com/en/vizyon",
  },
};

export default function Page() {
  return <VizyonPage isEn={true} />;
}
