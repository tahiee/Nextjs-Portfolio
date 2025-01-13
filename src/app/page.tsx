"use client";
import { TestimonialsSection } from "@/sections/Testimonials";
import { ProjectsSection } from "@/sections/Projects";
import { ContactSection } from "@/sections/Contact";
import { AboutSection } from "@/sections/About";
import { HeroSection } from "@/sections/Hero";
import { TapeSection } from "@/sections/Tape";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { useRef } from "react";

export default function Home() {
  const homeSectionRef = useRef<HTMLDivElement>(null);
  const projectSectionRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div>
        <Header
          projectSectionRef={projectSectionRef}
          aboutSectionRef={aboutSectionRef}
          contactSectionRef={contactSectionRef}
          homeSectionRef={homeSectionRef}
        />
        <HeroSection homeSectionRef={homeSectionRef} />
        <ProjectsSection projectSectionRef={projectSectionRef} />
        <TapeSection />
        <TestimonialsSection />
        <AboutSection aboutSectionRef={aboutSectionRef} />
        <ContactSection contactSectionRef={contactSectionRef} />
        <Footer />
      </div>
    </>
  );
}
