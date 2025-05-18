"use client";

import { sagarScenarios } from "@/lib/sagar/sagar-scenarios";
import { User } from "@/server/api/models/user";
import { SagarChatInterface } from "@/components/sagar/sagar-chatbot";

interface SagarChatProps {
  user: User;
}

export function SagarChat({ user }: SagarChatProps) {

  return (
    <div className="flex w-full h-[calc(100vh-4rem)] items-center justify-center">
      <SagarChatInterface scenarios={sagarScenarios} user={user} />
    </div>
  );
} 