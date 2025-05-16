"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { sagarScenarios } from "@/lib/sagar/sagar-scenarios";
import { User } from "@/server/api/models/user";
import { SagarChatInterface } from "@/components/sagar/sagar-chatbot";

interface SagarChatProps {
  user: User;
}

export function SagarChat({ user }: SagarChatProps) {

  return (
    <div className="flex w-full items-center justify-center">
      <Card className="w-4/5 h-full bg-slate-50">
        <CardHeader className="w-full flex justify-between items-center">
          <CardTitle>Interact with your mHealth Chatbot!</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent>
          <SagarChatInterface scenarios={sagarScenarios} user={user} />
        </CardContent>
      </Card>
    </div>
  );
} 