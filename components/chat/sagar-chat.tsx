"use client";

import { ChatInterface } from "@/components/chat/sagar-chat-interface";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { sagarScenarios } from "@/lib/chat/sagar-scenarios";
import { BotIcon } from "lucide-react";
import { api } from "@/trpc/react";
import { useEffect, useState } from "react";

interface SagarChatProps {
  uid: string;
  condition: number;
}

export function SagarChat({ uid, condition }: SagarChatProps) {
  const [isLoading, setIsLoading] = useState(true);
  const createUser = api.users.createUser.useMutation({
    onSuccess: () => {
      setIsLoading(false);
    }
  });

  useEffect(() => {
    createUser.mutate({ userId: uid });
  }, []);

  if (isLoading) {
    return (
      <div className="flex w-full items-center justify-center">
        <Card className="w-4/5 h-full bg-slate-50">
          <CardContent className="flex items-center justify-center p-6">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex w-full items-center justify-center">
      <Card className="w-4/5 h-full bg-slate-50">
        <CardHeader className="w-full flex justify-between items-center">
          <CardTitle>Interact with your mHealth Chatbot! Condition: {condition}</CardTitle>
          <BotIcon />
        </CardHeader>
        <Separator />
        <CardContent>
          <ChatInterface scenarios={sagarScenarios} userId={uid} condition={condition} />
        </CardContent>
      </Card>
    </div>
  );
} 