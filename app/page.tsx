"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-y-4 sm:flex-row sm:gap-x-6">
      <Button onClick={() => router.push("/sagar")}>Sagar Condition</Button>
      <Button onClick={() => router.push("/manu")}>Manu Condition</Button>
      <Button onClick={() => router.push("/yushan")}>Yushan Condition</Button>
      <Button onClick={() => router.push("/lina")}>Lina Condition</Button>
    </div>
  );
}
