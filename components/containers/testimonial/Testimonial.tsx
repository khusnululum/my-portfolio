import TestimonialCard from "@/components/ui/testimonialCard";
import SarahTan from "@/assets/png/sarahTan.png";

const testimonials = [
  {
    quote:
      "Working with Edwin Anderson was a smooth experience from start to finish. He translated our design into clean, responsive code and even suggested improvements we hadn't thought of. Highly recommended!",
    name: "Sarah Tan",
    role: "Product Manager at Finovate",
    avatar: SarahTan,
  },
  {
    quote:
      "Working with Edwin Anderson was a smooth experience from start to finish. He translated our design into clean, responsive code and even suggested improvements we hadn't thought of. Highly recommended!",
    name: "Coach Henry",
    role: "Product Manager at Finovate",
    avatar: SarahTan,
  },
  {
    quote:
      "Working with Edwin Anderson was a smooth experience from start to finish. He translated our design into clean, responsive code and even suggested improvements we hadn't thought of. Highly recommended!",
    name: "Coach Audy",
    role: "Product Manager at Finovate",
    avatar: SarahTan,
  },
];

export default function Testimonial() {
  return (
    <section className="px-4 py-12 md:pb-0 max-w-360 mx-auto">
      <div className="text-center max-w-6xl mx-auto md:mb-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          What They Say About Working With Me
        </h2>
        <p className="text-sm font-medium leading-loose">
          Real words from clients, teammates, and mentors I've collaborated with
          on various projects.
        </p>
      </div>

      <TestimonialCard testimonials={testimonials} />
    </section>
  );
}
