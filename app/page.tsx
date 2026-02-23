import Hero from "@/components/containers/hero/Hero";
import About from "@/components/containers/about/About";
import TechStack from "@/components/containers/techstack/TechStack";
import Comparison from "@/components/containers/comparison/Comparison";
import Portofolio from "@/components/containers/portofolio/Portfolio";
import Experience from "@/components/containers/experience/Experience";
import Testimonial from "@/components/containers/testimonial/Testimonial";
import Faq from "@/components/containers/FAQ/Faq";
import Contact from "@/components/containers/contact/Contact";

export default function Home() {
  return (
    <main>
      <section id="home" className="max-w-360 mx-auto">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="techstack">
        <TechStack />
      </section>

      <section id="skill">
        <Comparison />
      </section>

      <section id="projects">
        <Portofolio />
      </section>

      <section>
        <Experience />
      </section>

      <section>
        <Testimonial />
      </section>

      <section id="faq">
        <Faq />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
