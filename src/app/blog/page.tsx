import type { Metadata } from "next";
import BlogListPage from "./BlogListPage";

export const metadata: Metadata = {
  title: "Blog - İnşaat Dünyasından",
  description: "İnşaat sektörü, yatırım tavsiyeleri ve proje süreçleri hakkında faydalı içerikler. Nevo İnşaat blog.",
  alternates: { canonical: "https://nevoinsaat.com/blog" },
};

export default function Page() {
  return <BlogListPage />;
}
