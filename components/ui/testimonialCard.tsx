"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { StarIcon } from "lucide-react";
import { motion } from "motion/react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: StaticImageData;
};

type Props = {
  testimonials: Testimonial[];
};

export default function TestimonialCard({ testimonials }: Props) {
  const [index, setIndex] = useState(0);

  const getItem = (i: number) =>
    testimonials[(index + i) % testimonials.length];

  return (
    <div className="relative w-full h-119.5 mb-15">
      {[0, 1, 2].map((pos) => {
        const item = getItem(pos);

        return (
          <motion.div
            key={`${index}-${pos}`}
            initial={{ x: 0, opacity: 100 }}
            animate={{
              x: 0,
              opacity: 1,
              scale: pos === 0 ? 1 : pos === 1 ? 0.95 : 0.9,
              y: pos === 0 ? 0 : pos === 1 ? 14 : 28,
            }}
            exit={{ x: -80, opacity: 0 }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            className={`absolute inset-0 rounded-2xl md:h-85 px-4 mt-4 text-white max-w-6xl mx-auto transition-all duration-500
              ${
                pos === 0
                  ? "bg-primary-300 z-30 scale-100"
                  : pos === 1
                    ? "bg-[#D4A0B3] z-20 scale-95 translate-y-6"
                    : "bg-[#B76080]/20 z-10 scale-90 translate-y-12"
              }`}
          >
            <div className="flex justify-center gap-2 my-6 pt-2">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className="w-5 h-5 fill-secondary-100 text-secondary-100"
                />
              ))}
            </div>

            <p className="text-center text-lg font-semibold leading-relaxed mb-8">
              “{item.quote}”
            </p>

            <div className="flex flex-col items-center gap-2">
              <Image src={item.avatar} alt={item.name} width={64} height={64} />
              <div className="text-center">
                <p className="font-semibold text-lg">{item.name}</p>
                <p className="font-medium">{item.role}</p>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Controls */}
      <div className="flex absolute -bottom-25 md:bottom-2 left-1/2 -translate-x-1/2 gap-4">
        <button
          onClick={() =>
            setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
          }
          className="w-[45.33px] h-[45.33px] rounded-full border flex items-center justify-center"
        >
          <ArrowLeft />
        </button>

        <button
          onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
          className="w-[45.33px] h-[45.33px] rounded-full border flex items-center justify-center"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
