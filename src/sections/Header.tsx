"use client";
import { useState, useEffect, RefObject } from "react";

interface HeaderProps {
  homeSectionRef: RefObject<HTMLDivElement>;
  projectSectionRef: RefObject<HTMLDivElement>;
  aboutSectionRef: RefObject<HTMLDivElement>;
  contactSectionRef: RefObject<HTMLDivElement>;
}

export const Header = ({
  homeSectionRef,
  projectSectionRef,
  aboutSectionRef,
  contactSectionRef,
}: HeaderProps) => {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sections = [
      { ref: homeSectionRef, name: "home" },
      { ref: projectSectionRef, name: "projects" },
      { ref: aboutSectionRef, name: "about" },
      { ref: contactSectionRef, name: "contact" },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Adjust for the middle of the viewport

      for (const section of sections) {
        if (section.ref.current) {
          const sectionTop = section.ref.current.offsetTop;
          const sectionBottom = sectionTop + section.ref.current.offsetHeight;

          // Check if the scroll position is within the section's bounds
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(section.name);
            break; // Exit loop after finding the active section
          }
        }
      }
    };

    // Attach the event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Call the function initially to set the active section based on the current scroll position
    handleScroll();

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [homeSectionRef, projectSectionRef, aboutSectionRef, contactSectionRef]);
  const scrollToSection = (section: string) => {
    // Scroll to the appropriate section and update active section immediately
    if (section === "home" && homeSectionRef.current) {
      homeSectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "projects" && projectSectionRef.current) {
      projectSectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "about" && aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "contact" && contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    // Update the active section immediately after scrolling
    setActiveSection(section);
  };
  return (
    <div className="flex justify-center items-center w-full top-3 fixed left-1/2 -translate-x-1/2 z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          onClick={() => scrollToSection("home")}
          className={`nav-item cursor-pointer ${
            activeSection === "home"
              ? "bg-white text-gray-900"
              : "hover:bg-white/70 hover:text-gray-900"
          }`}
        >
          Home
        </a>
        <a
          onClick={() => scrollToSection("projects")}
          className={`nav-item cursor-pointer ${
            activeSection === "projects"
              ? "bg-white text-gray-900"
              : "hover:bg-white/70 hover:text-gray-900"
          }`}
        >
          Projects
        </a>
        <a
          onClick={() => scrollToSection("about")}
          className={`nav-item cursor-pointer ${
            activeSection === "about"
              ? "bg-white text-gray-900"
              : "hover:bg-white/70 hover:text-gray-900"
          }`}
        >
          About
        </a>
        <a
          onClick={() => scrollToSection("contact")}
          className={`nav-item cursor-pointer ${
            activeSection === "contact"
              ? "bg-white text-gray-900"
              : "hover:bg-white/70 hover:text-gray-900"
          }`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
