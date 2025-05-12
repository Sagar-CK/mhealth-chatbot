"use client";

import { CircleX } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function RevokeConsentButtonContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const uid = searchParams.get("uid");
  const pathname = usePathname();
  const study = pathname.split("/")[1];

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="destructive"
          className="w-fit h-fit flex items-center justify-center"
        >
          Revoke Consent
          <CircleX />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure that you would like to revoke consent?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. We will proceed to delete all of your
            collected data so far and not use it in our research.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => {
            if (uid) {
              router.push(`/revoked-consent?uid=${uid}&study=${study}`);
            } else {
              alert("No UID found, contact the researcher for support!");
            }
          }}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function RevokeConsentButton() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RevokeConsentButtonContent />
    </Suspense>
  );
}
