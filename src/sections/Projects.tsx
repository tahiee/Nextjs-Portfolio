// import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import darkSaasLandingPage from "@/assets/images/sm3.png";
// import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/sm2.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import ArrowDownIcon from "@/assets/icons/arrow-down.svg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "EventMe",
    year: "2024",
    title: "Event Managemnet Platform",
    results: [
      { title: "Next.js: For server-side rendering." },
      { title: "MongoDB: For storing event details." },
      { title: "Clerk: For authentication." },
      { title: "UploadThing: For handling file uploads." },
    ],
    link: "https://eventme-flame.vercel.app/",
    link2: "https://github.com/tahiee/eventMe_Plaform",
    image: darkSaasLandingPage,
  },
  {
    company: "Nest Mart",
    year: "2023",
    title: "Nest Mart Grocery Store",
    results: [
      { title: "React.js: A frontend library for building user interfaces" },
      { title: "Tailwind CSS: A utility-first CSS framework for designing." },
      { title: "MongoDB: Used for storing grocery store product data." },
    ],
    link: "https://nestmartgrocery.vercel.app/",
    link2: "https://github.com/tahiee/Nest-Mart-Grocery-Reast.js-",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://github.com/tahiee/eventMe_Plaform",
    link2: "https://github.com/tahiee/eventMe_Plaform",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = ({
  projectSectionRef,
}: {
  projectSectionRef: React.RefObject<HTMLElement>;
}) => {
  return (
    <section className="pb-16 lg:py-22" ref={projectSectionRef}>
      <div className="container">
        <SectionHeader
          eyebrow="Real-World Results"
          title="Featured Projects"
          description="See how i transformed concepts into engaging digital experience"
        />

        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, indexOff) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md
              :pt-12 md:px-10 lg:px-20 lg:pt-16 sticky"
              style={{ top: `calc(64px + ${indexOff * 50}px)` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-10">
                <div className=" lg:pb-16 md:mt-8 sm:mt-8">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 text-transparent bg-clip-text font-bold uppercase tracking-widest text-sm">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((res) => (
                      <li
                        key={res.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span> {res.title}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={project.link}
                    target="_blank" // Open in a new tab
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white text-gray-950 rounded-xl h-12 w-full mt-8 md:w-auto px-6 font-semibold inline-flex items-center justify-center gap-2 md:mb-4">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                  <a
                    href={project.link2}
                    target="_blank" // Open in a new tab
                    rel="noopener noreferrer" // Security best practice
                  >
                    <button className="bg-white text-gray-950 rounded-xl h-12 w-full mt-2 md:w-auto px-6 font-semibold inline-flex items-center justify-center gap-2 md:ml-2 md:mb-4">
                      <span>Sorce</span>
                      <ArrowDownIcon className="size-4 md:size-6 font-semibold" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt="Project-Img"
                    className="mt-8 -mb-4 md:-m-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
