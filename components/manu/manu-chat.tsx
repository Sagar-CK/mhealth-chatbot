"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { manuScenarios } from "@/lib/manu/manu-scenarios";
import { User } from "@/server/api/models/user";
import { AudioChatInterface } from "@/components/manu/manu-chatbot";

interface ManuChatProps {
  user: User;
}

export function ManuChat({ user }: ManuChatProps) {

  return (
    <div className="flex w-full items-center justify-center">
      <Card className="w-4/5 h-full bg-slate-50">
        <CardHeader className="w-full flex justify-between items-center">
          <CardTitle>Interact with your mHealth Chatbot!</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent>
          <AudioChatInterface scenarios={manuScenarios} user={user} />
        </CardContent>
      </Card>
    </div>
  );
}