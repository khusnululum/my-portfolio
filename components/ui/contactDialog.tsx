import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import SuccessImg from "@/assets/svg/contactSucceed.svg";
import ErrorImg from "@/assets/svg/contactFailed.svg";

type Status = "success" | "error";

type Props = {
  open: boolean;
  status: Status;
  onClose: () => void;
  onRetry?: () => void;
};

const content = {
  success: {
    image: SuccessImg,
    title: "Got Your Message!",
    desc: "Really appreciate you reaching out. I'll be in touch soon.",
    button: "Back to Home",
    bg: "bg-secondary-100",
  },
  error: {
    image: ErrorImg,
    title: "Message Failed to Send",
    desc: "Sorry about that. Please check your connection and try again.",
    button: "Try Again",
    bg: "bg-neutral-200",
  },
};

export default function ContactDialog({
  open,
  status,
  onClose,
  onRetry,
}: Props) {
  const data = content[status];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="rounded-2xl p-0">
        {/* ILLUSTRATION */}
        <div
          className={`${data.bg} rounded-t-2xl flex justify-center p-2 relative h-56.25`}
        >
          <Image
            alt={status}
            src={data.image}
            priority
            className="absolute -top-15"
          />
        </div>

        {/* TEXT */}
        <div>
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">
              {data.title}
            </DialogTitle>
            <DialogDescription className="font-medium text-center p-2">
              {data.desc}
            </DialogDescription>
          </DialogHeader>

          <div className="p-6">
            <Button
              onClick={status === "error" ? onRetry : onClose}
              className="w-full h-11 rounded-full bg-primary-300 mb-4"
            >
              {data.button}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
