import { Card, CardHeader, CardContent } from "./card";
import Image, { StaticImageData } from "next/image";
import { Check, X } from "lucide-react";

type Item = {
  text: string;
  type: "good" | "bad";
};

type ComparisonCardProps = {
  title: string;
  items: readonly Item[];
  avatar: StaticImageData;
  highlight?: boolean;
};

export default function ComparisonCard({
  title,
  items,
  avatar,
  highlight = false,
}: ComparisonCardProps) {
  return (
    <Card
      className={`rounded-2xl mb-4 ${highlight ? "bg-secondary-100" : "border-neutral-300"}`}
    >
      <CardHeader>
        <h3 className="text-lg font-bold mt-4 mb-4">{title}</h3>
        <div className="relative flex justify-center">
          <div
            className={`w-20 h-20 ${highlight ? "bg-primary-300 flex justify-end items-baseline" : "bg-neutral-300 flex justify-center items-center"}  overflow-hidden rounded-full `}
          >
            <Image
              alt="Avatar"
              src={avatar}
              width={highlight ? 65 : 45.4}
              height={highlight ? 65 : 45.4}
              className={`${highlight ? "w-auto relative left-2 top-1" : "w-auto"}`}
            />
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li key={i} className="flex gap-3 justify-center">
              {item.type === "good" ? (
                <Check />
              ) : (
                <X className="text-red-700" />
              )}

              <span className="font-semibold">{item.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
