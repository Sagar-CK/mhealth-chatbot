"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { manuScenarios } from "@/lib/manu/manu-scenarios";
import { User } from "@/server/api/models/user";
import { AudioChatInterface } from "@/components/manu/manu-chatbot";
import seedrandom from "seedrandom";

interface ManuChatProps {
  user: User;
}
// Function to randomize the order of scenarios based on a seed
function randomise<T>(scenarios: T[], seed: string): T[] {
  const result = [...scenarios];
  const random = seedrandom(seed);
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

export function ManuChat({ user }: ManuChatProps) {

  const randomisedScenarios = randomise(manuScenarios, user.user_id);

  return (
    <div className="flex w-full items-center justify-center">
      <Card className="w-4/5 h-full bg-slate-50">
        <CardHeader className="w-full flex justify-between items-center">
          <CardTitle>Interact with your mHealth Chatbot!</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent>
          <AudioChatInterface scenarios={randomisedScenarios} user={user} />
        </CardContent>
      </Card>
    </div>
  );
}