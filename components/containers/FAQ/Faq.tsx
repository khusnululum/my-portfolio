import FaqAccordion from "@/components/ui/faqAccordion";

const faqItems = [
  {
    question: "What technologies do you work with?",
    answer:
      "I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
  },
  {
    question: "Do you work on freelance or remote projects?",
    answer:
      "Yes, I'm available for both freelance and remote work. I've collaborated with clients and teams across different locations, ensuring clear communication, timely delivery, and high-quality results.",
  },
  {
    question: "Can you convert Figma or Sketch designs into code?",
    answer:
      "Absolutely. I specialize in translating Figma and Sketch designs into clean, responsive, and pixel-perfect code using modern frameworks like React and Next.js, while maintaining performance and accessibility.",
  },
  {
    question: "Do you collaborate with backend developers or teams?",
    answer:
      "Yes. I regularly work alongside backend developers and cross-functional teams, integrating APIs, managing data flows, and ensuring seamless frontend-backend communication for scalable applications.",
  },
  {
    question: "Are you available for full-time roles?",
    answer:
      "I'm open to full-time opportunities that align with my skills and goals, especially roles focused on building high-quality user experiences and modern web applications.",
  },
];

export default function Faq() {
  return (
    <section className="mt-10 bg-neutral-100 px-4 py-12 max-w-360 mx-auto">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Let's Clear Things Up
        </h2>
        <p className="text-sm leading-loose text-center mb-4 md:mb-10">
          I've answered a few questions that usually come up when working with a
          frontend developer like me.
        </p>
      </div>

      <FaqAccordion items={faqItems} />
    </section>
  );
}
