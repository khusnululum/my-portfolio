import Image from "next/image";
import JavascriptIcon from "@/assets/svg/javascriptIcon.svg";
import CSSIcon from "@/assets/svg/cssIcon.svg";
import HTMLIcon from "@/assets/svg/htmlIcon.svg";
import ReactIcon from "@/assets/svg/reactIcon.svg";

const stacks = [
  { src: JavascriptIcon, alt: "JavaScript" },
  { src: CSSIcon, alt: "CSS" },
  { src: HTMLIcon, alt: "HTML" },
  { src: ReactIcon, alt: "React" },
];

export default function TechStackHero() {
  return (
    <div className="hidden md:flex">
      <div className="border border-white/20 rounded-full px-4 py-6 flex flex-col gap-6">
        {stacks.map((item) => (
          <div
            key={item.alt}
            className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:scale-110 transition"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={34}
              height={34}
              className="px-1"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
