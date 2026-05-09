import type { Metadata } from "next";
import IletisimPage from "@/app/iletisim/IletisimPage";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Nevo Insaat. Get a quote, learn more about your projects. Ankara Kahramankazan.",
  alternates: { canonical: "https://nevoinsaat.com/en/iletisim" },
};

export default function Page() {
  return <IletisimPage isEn={true} />;
}
