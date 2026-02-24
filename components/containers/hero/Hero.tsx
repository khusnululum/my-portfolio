"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import TechStack from "@/components/ui/techStackHero";
import Link from "next/link";
import { motion, stagger } from "motion/react";

import Image from "next/image";
import MicrophoneIcon from "@/assets/svg/microphoneIcon.svg";
import Avatar from "@/assets/png/avatar1.png";
import BackgroundTexture from "@/assets/png/backgroundTexture.png";
import ShurikenIcon from "@/assets/svg/shurikenIcon.svg";

import { ArrowRightIcon, CircleIcon, MouseIcon } from "lucide-react";

export default function Hero() {
  const MotionImage = motion.create(Image);
  const MotionBadge = motion.create(Badge);
  const MotionButton = motion.create(Button);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
        staggerDirection: -1,
      },
    },
  };

  const statItem = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main className="relative bg-primary-500 text-white px-4 py-4 md:py-10 md:h-225 overflow-hidden pt-25 max-w-360 mx-auto">
      {/* BACKGROUND TEXTURE */}
      <Image
        alt="Background"
        src={BackgroundTexture}
        className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity"
      />

      {/* COLOR OVERLAY */}
      <div className="absolute inset-0 bg-primary-500/94" />

      {/* SURIKEN */}
      <Image
        alt="Shuriken Icon"
        src={ShurikenIcon}
        className="absolute bottom-55 -left-5 md:bottom-100 md:left-80 md:w-30 -rotate-20"
      />
      <Image
        alt="Shuriken Icon"
        src={ShurikenIcon}
        className="absolute bottom-20 right-0 md:bottom-20 md:right-110 rotate-45 md:w-30"
      />

      <div className="relative md:flex md:flex-row md:justify-between md:items-center max-w-6xl mx-auto">
        {/* INTRO */}
        <div className="md:flex md:flex-col md:gap-30 md:mt-20">
          <TechStack />

          <div className="flex flex-col gap-4 mb-4">
            <Button
              variant={"outline"}
              className="h-12 w-12 bg-transparent hover:pointer-events-none border border-primary-300 rounded-full"
            >
              <Image alt="Microphon Icon" src={MicrophoneIcon} />
            </Button>
            <h1 className="text-md font-bold">Hi, I'm Khusnul Ulum</h1>
            <p className="text-sm max-w-xs">
              a frontend developer passionate about creating seamless digital
              experiences that are fast, responsive, and user-friendly.
            </p>
          </div>
        </div>

        {/* STATS & BUTTON */}
        <motion.div variants={staggerContainer} initial="hidden" animate="show">
          {/* STATS */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 gap-4 mt-6 mb-6 md:flex md:flex-col md:justify-center md:space-y-6 md:mt-40"
          >
            <motion.div
              variants={statItem}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-r md:border-r-0 md:border-b md:pb-6 border-primary-300"
            >
              <h3 className="text-3xl font-bold">2+</h3>
              <p className="text-white/70 text-sm">Years Experience</p>
            </motion.div>

            <motion.div
              variants={statItem}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="px-5 md:px-0 md:border-b md:pb-6 border-primary-300"
            >
              <h3 className="text-3xl font-bold">99%</h3>
              <p className="text-white/70 text-sm">Client Satisfaction</p>
            </motion.div>

            <motion.div
              variants={statItem}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-r md:border-r-0 md:border-b md:pb-6 border-primary-300"
            >
              <h3 className="text-3xl font-bold">3</h3>
              <p className="text-white/70 text-sm">Project Delivered</p>
            </motion.div>

            <motion.div
              variants={statItem}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="px-5 md:px-0"
            >
              <h3 className="text-3xl font-bold">50</h3>
              <p className="text-white/70 text-sm">Clients Worldwide</p>
            </motion.div>
          </motion.div>

          {/* BUTTON */}
          <Link href="#contact">
            <Button className="flex justify-between items-center bg-secondary-100 text-black hover:bg-black hover:text-white font-semibold rounded-full w-full h-12 pl-4">
              Contact Me
              <span className="ml-auto flex items-center justify-center bg-black text-white rounded-full w-9 h-9">
                <ArrowRightIcon className="w-5 h-5" />
              </span>
            </Button>
          </Link>
        </motion.div>

        {/* HERO MAIN */}
        <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:top-30">
          {/* BADGE */}
          <div className="md:relative flex justify-center mt-10 md:mt-0">
            <MotionBadge
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.2 }}
              className="md:absolute md:top-10 flex items-center justify-center gap-2 text-xm font-semibold bg-primary-400 border border-primary-300 w-38 h-8 px-2"
            >
              <span>
                <CircleIcon className="w-2 h-2 bg-[#E26190] text-[#E26190] rounded-full" />
              </span>
              Available for Hire
            </MotionBadge>
          </div>

          {/* IMAGE */}
          <div className="relative h-85">
            <MotionImage
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6, ease: "easeOut" }}
              alt="Avatar"
              src={Avatar}
              className="absolute -top-15 md:top-10 md:left-1/2 md:-translate-x-1/2 md:w-152.5 "
            />

            {/* HERO TEXT */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="mt-20 text-secondary-100"
            >
              <h1 className="font-anton text-[clamp(90px,18vw,188px)] leading-none">
                FRONTEND
              </h1>
              <h1 className="font-anton text-[clamp(80px,18vw,169px)] leading-none">
                DEVELOPER
              </h1>
            </motion.div>

            {/* STROKE */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="absolute top-0 md:top-0"
            >
              <h1 className="font-anton text-transparent text-[clamp(90px,18vw,188px)] leading-none">
                FRONTEND
              </h1>
              <h1 className="font-anton text-[clamp(80px,18vw,169px)] leading-none text-transparent [-webkit-text-stroke:1px_#f3b64c]">
                DEVELOPER
              </h1>
            </motion.div>
            
            {/* JUNIOR */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <motion.h2
                variants={fadeUp}
                className="absolute font-bonheur_royal text-[64.59px] -top-10 -rotate-14"
              >
                Junior
              </motion.h2>
            </motion.div>

            {/* SCROLL DOWN */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-2 md:-bottom-70">
              <Link href="#techstack">
                <MotionButton
                  animate={{
                    y: [0, -12, 0],
                    opacity: [1, 0.85, 1],
                  }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: 0,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent hover:bg-black/20"
                >
                  Scroll Down
                  <span>
                    <MouseIcon />
                  </span>
                </MotionButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
