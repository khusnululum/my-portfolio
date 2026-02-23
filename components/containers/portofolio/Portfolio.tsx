import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import PortfolioCard from "@/components/ui/portfolioCard";

import Portfolio1 from "@/assets/png/portfolio1.png";
import Portfolio2 from "@/assets/png/portfolio2.png";
import Portfolio3 from "@/assets/png/portfolio3.png";

export default function Portofolio() {
  return (
    <section className="px-4 py-4 mt-4 max-w-360 mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between max-w-6xl mx-auto md:mb-8">
        <div className="space-y-3 md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Design to <span className="text-primary-300">Code Accuracy</span>
          </h2>
          <p className="leading-loose text-sm font-medium">
            We translated design mockups into pixel-perfect, responsive
            components, ensuring a smooth user experience across all devices.
          </p>
        </div>

        {/* BUTTON */}
        <Button
          variant={"outline"}
          className="flex justify-between items-center font-semibold rounded-full w-full hover:bg-black hover:text-white md:w-1/8 h-14 pl-4 my-6"
        >
          See All
          <span className="ml-auto flex items-center justify-center bg-black text-white rounded-full w-9 h-9">
            <ArrowRightIcon className="w-5 h-5" />
          </span>
        </Button>
      </div>

      {/* PORTOFOLIO CARD */}
      <div className="flex flex-col md:flex-row md:space-x-8 max-w-6xl mx-auto">
        <PortfolioCard
          preview={Portfolio1}
          title="Portfolio 1"
          category="Web Development"
          featured
        />
        <PortfolioCard
          preview={Portfolio2}
          title="Portfolio 2"
          category="Web Development"
          featured
        />
        <PortfolioCard
          preview={Portfolio3}
          title="Portfolio 3"
          category="Web Development"
          featured
        />
      </div>
    </section>
  );
}
