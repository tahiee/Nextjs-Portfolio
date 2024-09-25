/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import HeroImg from "../assets/images/memoji-computer.png";
import ArrowDown from "../assets/icons/arrow-down.svg";
import GrainImg from "../assets/images/grain.jpg";
import HeroOrbit from "@/components/HeroOrbit";
import StarImg from "../assets/icons/star.svg";
import SparkalIcon from "../assets/icons/sparkle.svg";
import Link from "next/link";

export const HeroSection = ({ homeSectionRef }: any) => {
  
  return (
    <div
      className=" py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
      ref={homeSectionRef}
    >
      <div className="inset-0 absolute [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_65%,transparent)] ">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${GrainImg.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <div className="size-[1430px] hero-ring"></div>
        
        <HeroOrbit
          size={1030}
          routation={-32}
          shouldOrbit
          orbitDurition="50s"
          shouldSpin
          spinDurition="6s"
        >
          <StarImg className="size-32 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          routation={-72}
          shouldOrbit
          orbitDurition="48s"
          shouldSpin
          spinDurition="6s"
        >
          <StarImg className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          routation={20}
          shouldOrbit
          orbitDurition="38s"
          shouldSpin
          spinDurition="6s"
        >
          <StarImg className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          routation={98}
          shouldOrbit
          orbitDurition="40s"
          shouldSpin
          spinDurition="6s"
        >
          <StarImg className="size-8 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit
          size={430}
          routation={-14}
          shouldOrbit
          orbitDurition="30s"
          shouldSpin
          spinDurition="4s"
        >
          <SparkalIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={440}
          routation={79}
          shouldOrbit
          orbitDurition="32s"
          shouldSpin
          spinDurition="4s"
        >
          <SparkalIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={530}
          routation={170}
          shouldOrbit
          orbitDurition="36s"
          shouldSpin
          spinDurition="4s"
        >
          <SparkalIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={710}
          routation={144}
          shouldOrbit
          orbitDurition="44s"
          shouldSpin
          spinDurition="4s"
        >
          <SparkalIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} routation={85} shouldOrbit orbitDurition="46s">
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} routation={-41} shouldOrbit orbitDurition="34s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={650} routation={-5} shouldOrbit orbitDurition="42s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={HeroImg}
            alt="Hero Image Computer"
            className="size-[100px]"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className=" bg-green-300 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
            </div>
            <div className="text-sm font-medium font-sans">
              Hey, I'm Tahir Khan
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl">
            Building Exceptional User Experience
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional,
            high-performing web applications, particularly using React.js and
            Next.js. Let’s discuss your new project!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="z-50 cursor-pointer inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl  after:pointer-events-none">
            <span className="font-semibold">Explore my Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="z-50 cursor-pointer inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
            <span>👋</span>
            <Link href='mailto:tahirkhanji007@gmail.com' className="font-semibold">Let's Connect</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
