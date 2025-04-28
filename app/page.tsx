"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="h-full w-full flex items-center justify-center gap-x-6">
      <Button onClick={() => router.push("/sagar")}>Sagar's Condition</Button>
      <Button onClick={() => router.push("/manu")}>Manu's Condition</Button>
      <Button onClick={() => router.push("/yushan")}>Yushan's Condition</Button>
      <Button onClick={() => router.push("/lina")}>Lina's Condition</Button>
    </div>
  );
}
