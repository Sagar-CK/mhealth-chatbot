"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getRandomizedScenarios } from "@/lib/lina/lina-scenarios";
import { User } from "@/server/api/models/user";
import { LinaChatInterface } from "@/components/lina/lina-chatbot";
import { getRandomizedEmpathethicScenarios } from "@/lib/lina/lina-scenario-empathetic";

interface LinaChatProps {
    user: User;
}

export function LinaChat({ user }: LinaChatProps) {
    // Use randomization function based on user condition
    const scenariosToUse =
        Number(user.condition) === 2
            ? getRandomizedEmpathethicScenarios(user.user_id)
            : getRandomizedScenarios(user.user_id);

    const titleText =
        Number(user.condition) === 2
            ? "Time for a quick mental check-in with Echo? 💬"
            : "Time for a quick mental check-in?";

    return (
        <div className="flex w-full items-center justify-center">
            <Card className="w-4/5 h-full bg-slate-50">
                <CardHeader className="w-full flex justify-between items-center">
                    <CardTitle>{titleText}</CardTitle>
                </CardHeader>
                <Separator />
                <CardContent>
                    <LinaChatInterface scenarios={scenariosToUse} user={user} />
                </CardContent>
            </Card>
        </div>
    );
}
