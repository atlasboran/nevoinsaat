import HeroSection from "@/components/sections/HeroSection";
import AboutPreview from "@/components/sections/AboutPreview";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import CompletedProjectsPreview from "@/components/sections/CompletedProjectsPreview";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import BlogPreview from "@/components/sections/BlogPreview";
import CTASection from "@/components/sections/CTASection";

export default function HomeEN() {
  return (
    <>
      <HeroSection isEn={true} />
      <AboutPreview isEn={true} />
      <ProjectsPreview isEn={true} />
      <StatsSection isEn={true} />
      <ServicesSection isEn={true} />
      <WhyUsSection isEn={true} />
      <BlogPreview isEn={true} />
      <CTASection isEn={true} />
    </>
  );
}
