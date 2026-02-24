import { Card, CardHeader, CardContent } from "./card";
import Image, { StaticImageData } from "next/image";

type TechCardProps = {
  icon: StaticImageData;
  title: string;
  desc: string;
  variant?: "primary" | "secondary";
};

export default function TechCard({
  icon,
  title,
  desc,
  variant = "secondary",
}: TechCardProps) {
  const isPrimary = variant === "primary";
  return (
    <Card
      className={`flex items-center justify-center text-center rounded-full w-[172.5px] h-70.25 ${isPrimary ? "bg-secondary-100" : "bg-neutral-25 border-neutral-300"}`}
    >
      <CardHeader
        className={`flex justify-center items-center bg-neutral-100 rounded-full w-15 h-15 ${isPrimary ? "bg-white" : "bg-neutral-100"}`}
      >
        <Image
          alt={title}
          src={icon}
          width={32}
          height={32}
          className="w-auto"
        />
      </CardHeader>
      <CardContent>
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm leading-loose">{desc}</p>
      </CardContent>
    </Card>
  );
}
