import type { Metadata } from "next";
import ProjectsPage from "./ProjectsPage";

export const metadata: Metadata = {
  title: "Tüm Projeler | Nevo İnşaat",
  description:
    "Nevo İnşaat'ın özenle tasarlayıp hayata geçirdiği tüm inşaat ve özel tasarım projelerini keşfedin.",
  alternates: { canonical: "https://nevoinsaat.com/projeler" },
};

export default function Page() {
  return <ProjectsPage />;
}
