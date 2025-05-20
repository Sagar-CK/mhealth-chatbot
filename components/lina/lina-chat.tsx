"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { linaScenarios } from "@/lib/lina/lina-scenarios";
import { User } from "@/server/api/models/user";
import { LinaChatInterface } from "@/components/lina/lina-chatbot";
import {linaScenarioEmpathetic} from "@/lib/lina/lina-scenario-empathetic";

interface LinaChatProps {
    user: User;
}

export function LinaChat({ user }: LinaChatProps) {
    const scenariosToUse = user.condition === '2' ? linaScenarioEmpathetic : linaScenarios;

    return (
        <div className="flex w-full items-center justify-center">
            <Card className="w-4/5 h-full bg-slate-50">
                <CardHeader className="w-full flex justify-between items-center">
                    <CardTitle>Time for a quick mental check-in with Echo? 💬</CardTitle>
                </CardHeader>
                <Separator />
                <CardContent>
                    <LinaChatInterface scenarios={scenariosToUse} user={user} />
                </CardContent>
            </Card>
        </div>
    );
}