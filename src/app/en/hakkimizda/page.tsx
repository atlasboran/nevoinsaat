import type { Metadata } from "next";
import AboutPage from "@/app/hakkimizda/AboutPage";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Nevo Insaat. A professional company offering reliable construction solutions with over 10 years of experience in Ankara and Kahramankazan region.",
  alternates: {
    canonical: "https://nevoinsaat.com/en/hakkimizda",
  },
};

export default function Page() {
  return <AboutPage isEn={true} />;
}
