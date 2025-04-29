"use client"

import { CircleX } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from 'next/navigation';

export function RevokeConsentButton() {
  const router = useRouter()
  return (
    <Button onClick={() => router.push('/revoked-consent')} >
      Revoke Consent <CircleX /> 
    </Button>
  )

}
