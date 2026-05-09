import type { Metadata } from "next";
import BlogListPage from "@/app/blog/BlogListPage";

export const metadata: Metadata = {
  title: "Blog",
  description: "Useful articles about the construction sector, investment advice, and construction processes.",
  alternates: {
    canonical: "https://nevoinsaat.com/en/blog",
  },
};

export default function Page() {
  return <BlogListPage isEn={true} />;
}
