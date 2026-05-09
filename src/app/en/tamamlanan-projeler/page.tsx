import type { Metadata } from "next";
import CompletedPage from "@/app/tamamlanan-projeler/CompletedPage";

export const metadata: Metadata = {
  title: "Completed Projects",
  description: "Discover the projects successfully completed and delivered by Nevo Insaat.",
  alternates: {
    canonical: "https://nevoinsaat.com/en/tamamlanan-projeler",
  },
};

export default function Page() {
  return <CompletedPage isEn={true} />;
}
