"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const links = ["Home", "About", "Skill", "Projects", "FAQ", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <section className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl">
      {/* DESKTOP NAV */}
      <div className="hidden md:flex justify-center">
        <nav className="bg-black/20 backdrop-blur-lg text-white rounded-full px-8 py-3 flex gap-6 font-medium">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:opacity-80 transition"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>

      {/* MOBILE NAV */}
      <Collapsible className="md:hidden" open={open} onOpenChange={setOpen}>
        {/* SINGLE CONTAINER */}
        <div
          className={`
          bg-black/20 backdrop-blur-lg text-white ${open ? "rounded-4xl" : "rounded-4xl"}
        `}
        >
          {/* TOP BAR */}
          <div className="flex items-center justify-between px-5 py-3">
            <span className="text-xl font-bold">Ulum</span>

            <CollapsibleTrigger asChild>
              <Button size="icon" variant="ghost">
                {open ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <X />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Menu />
                  </motion.div>
                )}
              </Button>
            </CollapsibleTrigger>
          </div>

          {/* EXPAND AREA */}
          <CollapsibleContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up pb-8">
            <nav className="flex flex-col gap-6 px-5 pt-4 font-medium">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="hover:opacity-80 transition"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              ))}
            </nav>
          </CollapsibleContent>
        </div>
      </Collapsible>
    </section>
  );
}
