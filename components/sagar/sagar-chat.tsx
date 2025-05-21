"use client";

import { controlScenarios } from "@/lib/sagar/control-scenarios";
import { anthroScenarios } from "@/lib/sagar/anthro-scenarios";
import { User } from "@/server/api/models/user";
import { SagarChatInterface } from "@/components/sagar/sagar-chatbot";

interface SagarChatProps {
  user: User;
}

export function SagarChat({ user }: SagarChatProps) {
  // Condition 1: Control, Condition 2: Anthro
  const scenarios = user.condition === 1 ? controlScenarios : anthroScenarios;

  return (
    <div className="flex w-full h-[calc(100vh-4rem)] items-center justify-center">
      <SagarChatInterface scenarios={scenarios} user={user} />
    </div>
  );
} 