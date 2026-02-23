import Image from "next/image";
import GearIcon from "@/assets/png/gearIcon.png";
import PaletteIcon from "@/assets/png/paletteIcon.png";
import SmartphoneIcon from "@/assets/png/smartphoneIcon.png";

const expertiseList = [
  {
    icon: GearIcon,
    alt: "Gear Icon",
    title: "COMPONENT-BASED DEVELOPMENT",
    desc: "Reusable, scalable code built with modern frameworks like React or Vue.",
  },
  {
    icon: PaletteIcon,
    alt: "Palette Icon",
    title: "PIXEL-PERFECT UI IMPLEMENTATION",
    desc: "Translating design into high-fidelity user interfaces with attention to detail.",
  },
  {
    icon: SmartphoneIcon,
    alt: "Smartphone Icon",
    title: "RESPONSIVE & ACCESSIBLE DESIGN",
    desc: "Optimized layouts that work seamlessly across all screen sizes and devices.",
  },
];

export default function Expertise() {
  return (
    <div className="flex flex-col md:flex-row gap-4 max-w-6xl mx-auto">
      {expertiseList.map((item, i) => (
        <div key={i} className="flex flex-col md:flex-row md:px-2 gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex justify-center items-center border border-neutral-300 rounded-full w-12 h-12">
              <Image alt={item.alt} src={item.icon} width={24} />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg md:text-2xl font-bold">{item.title}</h3>
              <p className="text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>

          <div>
            {i !== expertiseList.length && (
              <div className="block md:hidden h-px bg-neutral-300" />
            )}

            {i !== expertiseList.length - 1 && (
              <div className="hidden md:block w-px h-full bg-neutral-300" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
