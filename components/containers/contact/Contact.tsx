"use client";

import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import Portfolio1 from "@/assets/png/portfolio1.png";
import Portfolio2 from "@/assets/png/portfolio2.png";
import Portfolio3 from "@/assets/png/portfolio3.png";
import FormMan from "@/assets/svg/formMan.svg";
import ContactDialog from "@/components/ui/contactDialog";

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"success" | "error">("success");

  // const handleSubmit = async () => {
  //   try {
  //     setStatus("success"); // selalu sukses
  //   } catch {
  //     setStatus("error");
  //   } finally {
  //     setOpen(true);
  //   }
  // };

  const handleSubmit = async () => {
    try {
      const success = Math.random() > 0.5; // 50% gagal

      if (!success) {
        throw new Error("Failed to send");
      }

      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setOpen(true);
    }
  };

  return (
    <section className="px-4 py-12 max-w-360 mx-auto md:mb-10">
      <div className="flex flex-col md:flex-row space-y-2 md:space-x-20 max-w-6xl mx-auto">
        <div className="md:w-1/2 md:mt-18">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let's Work Together
          </h2>
          <p className="text-sm font-medium leading-loose mb-6">
            Have a project in mind or just want to say hi? Drop me a message —
            I'd love to hear from you.
          </p>
          <div className="flex w-full gap-4">
            <div className="relative flex-1 aspect-square">
              <Image
                alt="Portfolio3"
                src={Portfolio3}
                className="object-cover rounded-xl"
              />
            </div>

            <div className="relative flex-1 aspect-square">
              <Image
                alt="Portfolio1"
                src={Portfolio1}
                className="object-cover rounded-xl"
              />
            </div>

            <div className="relative flex-1 aspect-square">
              <Image
                alt="Portfolio2"
                src={Portfolio2}
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="relative md:w-1/2">
          <Image
            alt="A man looking up"
            src={FormMan}
            className="absolute top-5.5 md:-top-21.5 left-1/2 -translate-x-1/2"
          />
          <Card className="shadow-sm mt-45 md:mt-18">
            <CardContent className="px-4 space-y-6">
              <div className="space-y-2">
                <Label className="text-sm font-bold">Name</Label>
                <Input
                  placeholder="Enter your name"
                  className="text-sm font-medium py-6"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-bold">Email</Label>
                <Input
                  placeholder="Enter your email"
                  className="text-sm font-medium py-6"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-bold">Message</Label>
                <Textarea
                  placeholder="Enter your message"
                  className="min-h-35 resize-none text-sm font-medium py-2"
                />
              </div>
              <Button
                onClick={handleSubmit}
                className="w-full rounded-full bg-primary-300 h-11 text-sm font-bold"
              >
                Let's Talk
              </Button>
            </CardContent>
          </Card>
          <ContactDialog
            open={open}
            status={status}
            onClose={() => setOpen(false)}
            onRetry={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
}
