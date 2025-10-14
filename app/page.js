import AboutSection from "@/components/sections/about/AboutSection";
import ContactSection from "@/components/sections/contact/ContactSection";
import HomeSection from "@/components/sections/home/HomeSection";
import ProjectSection from "@/components/sections/project/ProjectSection";
 
export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}
