"use client";

import { controlScenarios } from "@/lib/sagar/control-scenarios";
import { anthroScenarios } from "@/lib/sagar/anthro-scenarios";
import { User } from "@/server/api/models/user";
import { SagarChatInterface } from "@/components/sagar/sagar-chatbot";
import seedrandom from 'seedrandom';

// Seeded shuffle function using seedrandom
function seededShuffle<T>(array: T[], seed: string): T[] {
  const rng = seedrandom(seed);
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

interface SagarChatProps {
  user: User;
}

export function SagarChat({ user }: SagarChatProps) {
  // Condition 1: Control, Condition 2: Anthro
  const baseScenarios = Number(user.condition) === 1 ? controlScenarios : anthroScenarios;
  const scenarios = seededShuffle(baseScenarios, user.user_id);

  return (
    <div className="flex w-full h-[calc(100vh-4rem)] items-center justify-center">
      <SagarChatInterface scenarios={scenarios} user={user} />
    </div>
  );
} 