import ExperienceCard from "@/components/ui/experienceCard";
import Airbnb from "@/assets/svg/airbnb.svg";
import Airtasker from "@/assets/svg/airtasker.svg";
import Slack from "@/assets/svg/slack.svg";

export default function Experience() {
  return (
    <section className="bg-neutral-950 text-white px-4 py-10 max-w-360 mx-auto">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 md:w-1/3">
            Experiences That{" "}
            <span className="text-secondary-100">Shaped Me</span>!
          </h2>
          <p className="text-xs font-semibold text-neutral-25 leading-loose mb-2 md:w-1/5">
            From startups to side projects, every step has been a chance to
            learn, build, and level up.
          </p>
        </div>

        <ExperienceCard
          period="2025 - Present"
          role="Frontend Developer"
          companyLogo={Airbnb}
          description="Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability."
        />
        <ExperienceCard
          period="2025 - Present"
          role="Frontend Developer"
          companyLogo={Airtasker}
          description="Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability."
        />
        <ExperienceCard
          period="2025 - Present"
          role="Frontend Developer"
          companyLogo={Slack}
          description="Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability."
        />
      </div>
    </section>
  );
}
