"use client";

import { ChatInterface } from "@/components/chat/sagar-chat-interface";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { linaScenarios } from "@/lib/chat/lina-scenarios";
import { BotIcon } from "lucide-react";
import { User } from "@/server/api/models/user";

interface LinaChatProps {
    user: User;
}

export function LinaChat({ user }: LinaChatProps) {

    return (
        <div className="flex w-full items-center justify-center">
            <Card className="w-4/5 h-full bg-slate-50">
                <CardHeader className="w-full flex justify-between items-center">
                    <CardTitle>Interact with your mHealth Chatbot!</CardTitle>
                    <BotIcon />
                </CardHeader>
                <Separator />
                <CardContent>
                    <ChatInterface scenarios={linaScenarios} user={user} />
                </CardContent>
            </Card>
        </div>
    );
}