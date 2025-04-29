"use client"

import { Button } from "./ui/button";
import { useRouter } from 'next/navigation';

export function TaskInstructionButton() {
  const router = useRouter()
  return (
    <Button onClick={() => router.push('/revoked-consent')} >
      Task Instructions
    </Button>
  )

}
