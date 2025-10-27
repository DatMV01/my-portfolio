import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ScrollSpyNav from "@/components/nav/ScrollSpyNav";
import AboutSection from "@/components/sections/about/AboutSection";
import ContactSection from "@/components/sections/contact/ContactSection";
import HomeSection from "@/components/sections/home/HomeSection";
import ProjectSection from "@/components/sections/project/ProjectSection";
import Container from "@/components/ui/Container";
import navLinks from "@/data/navLinks";
 
export default function Home() {
  return (
    <Container>
      <Header />

      <main>
        <HomeSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </main>

      <Footer />

      <ScrollSpyNav items={navLinks} offset={70} />
    </Container>
  );
}
