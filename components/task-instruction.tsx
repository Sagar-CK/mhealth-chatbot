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
  linaCondition,
  manuCondition,
  sagarCondition,
  yushanCondition,
} from "@/lib/constants";
import SagarTaskInstructions from "./task-instructions/sagar-task-instructions";

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
            {pathname.includes(sagarCondition) ? (
              <SagarTaskInstructions />
            ) : pathname.includes(manuCondition) ? (
              <p>Manu Instructions</p>
            ) : pathname.includes(yushanCondition) ? (
              <p>Yushan Instructions</p>
            ) : pathname.includes(linaCondition) ? (
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
