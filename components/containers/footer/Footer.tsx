import { Button } from "@/components/ui/button";

import Image from "next/image";
import Facebook from "@/assets/svg/facebook.svg";
import Ig from "@/assets/svg/ig.svg";
import LinkedIn from "@/assets/svg/linkedIn.svg";
import Tiktok from "@/assets/svg/tiktok.svg";

const socials = [
  { href: "https://facebook.com/theulum", icon: Facebook, alt: "Facebook" },
  { href: "https://instagram.com/theulum", icon: Ig, alt: "Instagram" },
  {
    href: "https://linkedin.com/in/khusnul-ulum",
    icon: LinkedIn,
    alt: "LinkedIn",
  },
  { href: "https://tiktok.com/@theulum", icon: Tiktok, alt: "TikTok" },
];

export default function Footer() {
  return (
    <section className="bg-[#0A0D12] text-neutral-25 px-4 py-12 md:py-4 max-w-360 mx-auto">
      <div className="flex flex-col md:flex-row-reverse md:justify-between md:items-center max-w-6xl mx-auto">
        <div className="flex gap-4 ">
          {socials.map((item) => (
            <a
              key={item.alt}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                <Image alt={item.alt} src={item.icon} />
              </Button>
            </a>
          ))}
        </div>

        <p className="text-xs mt-8 md:mt-0">
          &copy; 2025 Edwin Anderson. All rights reserved.
        </p>
      </div>
    </section>
  );
}
