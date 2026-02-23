"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <Accordion
      type="single"
      collapsible
      value={open || undefined}
      onValueChange={(val) => setOpen(val)}
      className="max-w-6xl mx-auto"
    >
      {items.map((item, index) => {
        const value = `item-${index}`;

        return (
          <AccordionItem
            key={value}
            value={value}
            className="border-b border-neutral-300"
          >
            <AccordionTrigger className="hover:no-underline">
              <div className="flex gap-4 md:gap-20">
                <div className="text-lg font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="font-semibold text-lg">{item.question}</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-neutral-700 text-sm pb-6 px-9 md:px-25">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
