import { StaticImageData } from "next/image";
import { Card, CardContent } from "./card";
import Image from "next/image";

type ExperienceCardProps = {
  period: string;
  role: string;
  companyLogo: StaticImageData;
  description: string;
};

export default function ExperienceCard({
  period,
  role,
  companyLogo,
  description,
}: ExperienceCardProps) {
  return (
    <Card className="bg-transparent border-none text-white py-3">
      <CardContent className="flex flex-col md:flex-row md:justify-between border-t border-t-neutral-800 pt-6">
        <div className="md:w-1/10">
          <p className="text-sm font-medium text-neutral-400 mb-4">{period}</p>
          <h3 className="text-neutral-25 font-bold mb-4">{role}</h3>
        </div>
        <div className="p-1 w-30.5 border border-neutral-800 rounded-3xl mb-4 md:mb-11">
          <div className="p-6 w-28 border border-neutral-800 rounded-2xl">
            <Image
              alt="Company Logo"
              src={companyLogo}
              className="object-contain"
            />
          </div>
        </div>

        <p className="text-sm text-neutral-400 leading-loose md:w-1/2">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
