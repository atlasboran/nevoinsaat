import type { Metadata } from "next";
import HizmetlerPage from "@/app/hizmetler/HizmetlerPage";

export const metadata: Metadata = {
  title: "Services",
  description: "Nevo Insaat services. We offer turnkey construction, villa construction, project development, and custom design homes.",
  alternates: {
    canonical: "https://nevoinsaat.com/en/hizmetler",
  },
};

export default function Page() {
  return <HizmetlerPage isEn={true} />;
}
