import { RefObject } from "react";
import ArrowIcon from "@/assets/icons/arrow-up-right.svg";
import ArrowIcon2 from "@/assets/icons/arrow-down.svg";
import GrainImg from "@/assets/images/grain.jpg";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const ContactSection = ({
  contactSectionRef,
}: {
  contactSectionRef: RefObject<HTMLDivElement>;
}) => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20" ref={contactSectionRef}>
      <div className="container">
        <SectionHeader
          eyebrow="Contact Me"
          title="Get in touch"
          description=""
        />
        <div className=" bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-9 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-50 mt-8">
          <div
            className=" absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${GrainImg.src})`,
              pointerEvents: "none",
            }}
          ></div>
          <div className=" flex flex-col items-center gap-8 md:gap-18 md:flex-row">
            <div className="">
              <h2 className="font-serif text-2xl md:text-3xl">
                Let’s Create Something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your Next Project to life? Let’s connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div className="lg:flex lg:flex-col items-center justify-center">
              <button className="text-white bg-gray-900 rounded-xl gap-2 px-6 h-12 inline-flex items-center w-max border border-gray-900">
                <Link
                  href="mailto:tahirkhanji007@gmail.com"
                  className="font-semibold"
                  target="_blank" // Open in a new tab
                  rel="noopener noreferrer" // Security best practice
                >
                  Email
                </Link>
                <ArrowIcon className="size-4" />
              </button>
              <button className="w-max text-white bg-gray-900 rounded-xl gap-2 mt-4 px-6 py-2 h-12 inline-flex items-center border border-gray-900">
                <Link
                  href="https://wa.me/03052095951"
                  className="font-semibold"
                  target="_blank" // Open in a new tab
                  rel="noopener noreferrer" // Security best practice
                >
                  WhatsApp
                </Link>
                <ArrowIcon2 className="size-4 font-extrabold" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
