"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  
  const generateRandomUid = () => {
    return Math.random().toString(36).substring(2, 15);
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-y-4 sm:flex-row sm:gap-x-6">
      <Button onClick={() => router.push(`/6ec5bacc-e8dc-4f6f-b512-9692d5a708b8?uid=${generateRandomUid()}`)}>Sagar Condition</Button>
      <Button onClick={() => router.push(`/7a793cf6-19f8-4066-afe0-a009ce48e996?uid=${generateRandomUid()}`)}>Manu Condition</Button>
      <Button onClick={() => router.push(`/cdb16174-c026-4f93-aa82-55c98c745558?uid=${generateRandomUid()}`)}>Yushan Condition</Button>
      <Button onClick={() => router.push(`/bb24e39e-ddd5-4fd1-87ba-07e0520ec91a?uid=${generateRandomUid()}`)}>Lina Condition</Button>
    </div>
  );
}
