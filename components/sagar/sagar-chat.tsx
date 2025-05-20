"use client";

import { controlScenarios } from "@/lib/sagar/control-scenarios";
import { User } from "@/server/api/models/user";
import { SagarChatInterface } from "@/components/sagar/sagar-chatbot";

interface SagarChatProps {
  user: User;
}

export function SagarChat({ user }: SagarChatProps) {

  return (
    <div className="flex w-full h-[calc(100vh-4rem)] items-center justify-center">
      <SagarChatInterface scenarios={controlScenarios} user={user} />
    </div>
  );
} 