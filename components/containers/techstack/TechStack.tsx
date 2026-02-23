import TechCard from "@/components/ui/techCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import JavascriptIcon from "@/assets/svg/javascriptIcon.svg";
import CSSIcon from "@/assets/svg/cssIcon.svg";
import HTMLIcon from "@/assets/svg/htmlIcon.svg";
import ReactIcon from "@/assets/svg/reactIcon.svg";

const techs = [
  {
    icon: HTMLIcon,
    title: "HTML",
    desc: "Crafting semantic, accessible HTML structures.",
  },
  {
    icon: CSSIcon,
    title: "CSS",
    desc: "Crafting semantic, accessible HTML structures.",
  },
  {
    icon: JavascriptIcon,
    title: "Javascript",
    desc: "Crafting semantic, accessible HTML structures.",
  },
  {
    icon: ReactIcon,
    title: "React",
    desc: "Crafting semantic, accessible HTML structures.",
  },
];

export default function TechStack() {
  return (
    <section className="bg-linear-to-t from-[#9E385E]/10 to-transparent px-4 py-4 mt-8 max-w-360 mx-auto">
      <div className="text-center">
        <h2 className="font-bold text-3xl md:text-4xl mb-4">
          Code, Design, and Everything in Between
        </h2>
        <p className="text-sm md:font-medium leading-7 mb-4 md:mb-10">
          These are the technologies that power my workflow and bring ideas to
          life.
        </p>
      </div>

      <Carousel className="flex flex-col gap-4 max-w-3xl mx-auto">
        <CarouselContent>
          {techs.map((tech, i) => (
            <CarouselItem key={tech.title} className="basis-1/2 md:basis-1/4">
              <TechCard
                icon={tech.icon}
                title={tech.title}
                desc={tech.desc}
                variant={i % 2 === 0 ? "primary" : "secondary"}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Controls */}
        <div className="flex justify-center mt-8">
          <CarouselPrevious className="relative w-[45.33px] h-[45.33px] bg-transparent border-neutral-300" />
          <CarouselNext className="relative w-[45.33px] h-[45.33px] bg-transparent border-neutral-300" />
        </div>
      </Carousel>
    </section>
  );
}
