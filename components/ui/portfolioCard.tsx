"use client";

import Image, { type StaticImageData } from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "./button";

type PortfolioCardProps = {
  preview: StaticImageData;
  title: string;
  category: string;
  featured?: boolean;
};

export default function PortfolioCard({
  preview,
  title,
  category,
  featured = false,
}: PortfolioCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="mb-6">
        <Card className="relative bg-neutral-100 rounded-4xl px-4 border-none">
          {/* IMAGE PREVIEW */}
          {featured && (
            <>
              <div className="absolute -left-3 top-6 w-6 h-12 bg-[#855400] [clip-path:polygon(0_0,50%_25%,50%_70%,0_45%)]"></div>
              <div className="absolute -left-3 top-6 w-24.25 h-5.25 bg-secondary-100 text-black text-xs flex items-center font-semibold px-1 rounded-r-full">
                Best Portfolio
              </div>
            </>
          )}

          <Image src={preview} alt={title} className="rounded-2xl" />
        </Card>
        <Card className="bg-neutral-100 rounded-4xl px-4 h-27.5 border-none">
          {/* INFO */}
          <CardContent className="relative flex items-center justify-between rounded-2xl ">
            <div className="absolute top-1/2 translate-y-0 w-full border border-neutral-300-300 z-0"></div>
            <div>
              <h3 className="font-bold mb-6">{title}</h3>
              <p className="text-neutral-600 text-xs mt-2">{category}</p>
            </div>
            <Button
              onClick={() => setOpen(true)}
              className="w-10 h-10 rounded-full bg-primary-300 text-white flex items-center justify-center z-10"
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>

        {/* POPUP */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="rounded-3xl max-w-sm mx-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl text-center font-bold">
                Project Under Development
              </DialogTitle>
              <DialogDescription className="text-sm text-center mt-2">
                This portfolio project is currently being built. Please check
                back soon for updates!
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
