'use client';
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import BookCover from "@/assets/images/book.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/html5.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import CromeIcon from "@/assets/icons/chrome.svg";
import TailwindIcon from "@/assets/icons/tailwind-css.svg";
import MapImg from "@/assets/images/karachi-map.png";
import SimilIcon from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItem from "@/components/ToolboxItem";
import { motion } from "framer-motion";
import { useRef } from "react";
const toolboxitems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HtmlIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Tailwind",
    iconType: TailwindIcon,
  },
  {
    title: "Chrome",
    iconType: CromeIcon,
  },
];

const Hobbies = [
  {
    title: "Circket",
    emoji: "🏏",
    left: "5%",
    top: "5%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "9%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎧",
    left: "70%",
    top: "45%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "35%",
    top: "40%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = ({aboutSectionRef}:any) => {
  const constrainRef = useRef(null);
  return (
    <div className="py-20 lg:py-28" ref={aboutSectionRef}>
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Who I am, What I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description=" Explore the books shaping my perspectives."
              />
              <div className="w-48 mx-auto mt-2 md:mt-0">
                <Image src={BookCover} alt="book cover" className="" />
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My ToolBox"
                description="Explore the Technologies tools I use to craft exceptional
                digitial experiences."
                className=""
              />

              <ToolboxItem
                toolItems={toolboxitems}
                className=""
                itemsWrapperClassName=" animate-move-left [animation-duration:30s]"
              />
              <ToolboxItem
                toolItems={toolboxitems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my intereste and the hobbies beyond the digital realm."
                className="px-6 py-6"
              />

              <div className=" relative flex-1" ref={constrainRef}>
                {Hobbies.map((item) => (
                  <motion.div
                    key={item.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: item.left,
                      top: item.top,
                    }}
                    drag
                    dragConstraints={constrainRef}
                  >
                    <span className="font-medium text-gray-950">
                      {item.title}
                    </span>
                    <span>{item.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                alt="map"
                src={MapImg}
                className="h-full w-full object-cover"
              />
              <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className=" absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className=" absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image alt="Smile" src={SimilIcon} className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
