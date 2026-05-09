import type { Metadata } from "next";
import ProjectsPage from "@/app/projeler/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects",
  description: "Discover Nevo Insaat's completed and ongoing projects.",
  alternates: {
    canonical: "https://nevoinsaat.com/en/projeler",
  },
};

export default function Page() {
  return <ProjectsPage isEn={true} />;
}
