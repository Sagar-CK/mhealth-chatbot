"use client";

import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  linaStudy,
  manuStudy,
  sagarStudy,
  yushanStudy,
} from "@/lib/constants";

import SagarTaskInstructions from "./sagar/sagar-task-instructions";
import LinaTaskInstructions from "./lina/lina-task-instructions";

export function TaskInstructionButton() {
  const pathname = usePathname().toString();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Task Instructions</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Task Instructions</DialogTitle>
          <div className="text-muted-foreground text-sm">
            {pathname.includes(sagarStudy) ? (
              <SagarTaskInstructions />
            ) : pathname.includes(manuStudy) ? (
              <p>Manu Instructions</p>
            ) : pathname.includes(yushanStudy) ? (
              <p>Yushan Instructions</p>
            ) : pathname.includes(linaStudy) ? (
              < LinaTaskInstructions />
            ) : (
              <p>
                For a specific path (one of our studies) we provide our own task
                instructions.
              </p>
            )}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
