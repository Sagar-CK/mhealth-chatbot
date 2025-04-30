import { AudioChatInterface } from "@/components/audio-chat-interface";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { manuChatConfig } from "@/lib/chat/manu-chat-config";

export default function Manu() {
  return (
    <div className="flex w-full items-center justify-center">
      <Card className="w-4/5 h-full bg-slate-50">
        <CardHeader className="w-full flex justify-between items-center">
          <CardTitle>Interact with your mHealth Voice Chatbot!</CardTitle>
          <p>Manu Condition</p>
        </CardHeader>
        <Separator />
        <CardContent>
          <AudioChatInterface config={manuChatConfig} />
        </CardContent>
      </Card>
    </div>
  );
}