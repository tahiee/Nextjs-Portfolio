import Link from "next/link";
import ArrowIcon from "@/assets/icons/arrow-up-right.svg";

const FooterLinks = [
  {
    title: "Github",
    href: "https://github.com/tahiee",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/m-tahir-khan-10730a1b4/",
  },
];
export const Footer = () => {
  return (
    <footer className=" relative z-10 overflow-x-clip">
      <div className=" absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved.</div>

          <nav className="flex flex-col md:flex-row items-center gap-8">
            {FooterLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="inline-flex items-center gap-1.5"
                target="_blank" // Open in a new tab
                rel="noopener noreferrer" // Security best practice
              >
                <span className="font-semibold">{item.title}</span>
                <ArrowIcon className="size-4" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
