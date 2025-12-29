import AboutSection from "@/components/AboutSection";
import OurApproachSection from "@/components/ApproachSection";
import ClientSection from "@/components/ClientSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        {/* <Container maxWidth='xl'> */}
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <OurApproachSection />
        <ProjectSection/>
        {/* <TeamSection /> */}
        {/* <ClientSection/> */}
        <ContactSection />
        <Footer />
        {/* </Container> */}
      </div>
    </>
  );
}
