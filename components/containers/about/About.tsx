import Expertise from "@/components/ui/expertise";
import PaletteIcon from "@/assets/png/paletteIcon.png";

export default function About() {
  return (
    <section className="px-4 py-8 md:mb-20 max-w-360 mx-auto">
      {/* ABOUT TITLE */}
      <h1 className="font-medium text-2xl md:text-4xl leading-relaxed md:leading-normal text-center px-4 md:px-10 md:py-10 md:max-w-5xl mx-auto mb-18">
        As frontend developers , we bring designs to life with
        <span className="text-primary-300">
          {" "}
          clean<span className="text-black">,</span> responsive code
        </span>{" "}
        that blends creativity 🎨 with usability 🌟.
      </h1>
      <Expertise />
    </section>
  );
}
