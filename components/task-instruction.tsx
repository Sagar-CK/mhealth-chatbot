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
import SagarTaskInstructions from "./task-instructions/sagar-task-instructions";
import YushanTaskInstructions from "./task-instructions/yushan-task-instructions";

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
                <YushanTaskInstructions />
            ) : pathname.includes(linaStudy) ? (
              <p>Lina Instructions</p>
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
