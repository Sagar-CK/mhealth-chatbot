import { ChatInterface } from "@/components/chat-interface";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { sagarScenarios } from "@/lib/chat/sagar-scenarios";
import { BotIcon } from "lucide-react";

export default function Sagar() {
  return (
    <div className="flex w-full items-center justify-center">
      <Card className="w-4/5 h-full bg-slate-50">
        <CardHeader className="w-full flex justify-between items-center">
          <CardTitle>Interact with your mHealth Chatbot!</CardTitle>
          <BotIcon />
        </CardHeader>
        <Separator />
        <CardContent>
          <ChatInterface scenarios={sagarScenarios} />
        </CardContent>
      </Card>
    </div>
  );
}
