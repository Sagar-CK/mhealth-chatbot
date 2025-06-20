import React from "react";
import { BotIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";

export default function LinaTaskInstructions() {
    return (
        <div className="w-full h-full flex flex-col items-start justify-start gap-y-4 px-4 py-6 text-left text-base leading-relaxed max-w-xl max-h-[80vh] overflow-y-auto">
            <div className="flex items-center gap-x-2 text-lg font-semibold">
                <BotIcon/>
                <span>Chatbot Task Instructions</span>
            </div>

            <p>
                In this part of the study, you will interact with a <strong>mental health chatbot</strong> that will ask you a series
                of questions.
            </p>

            <p>
                All questions will offer <strong>selectable response options, you will not need to
                type anything</strong>. Some questions will only have a single selectable option, while others will ask you
                to <strong>rate your willingness to share</strong> on a scale of 5.
            </p>

            <p>
                For each question, select the option that <strong>best reflects how willing you are to share</strong>.
                Please answer as <strong>honestly</strong> as you can.
            </p>

            <p>
                The interaction should take about <strong>5–8 minutes</strong>.
            </p>

            <p>
                You can <strong>revoke your consent at any time</strong> by clicking the <em>"Revoke
                Consent"</em> button at the top of the screen.
            </p>

            <div className="w-full flex justify-center mt-4 pt-4 border-t">
                <DialogClose asChild>
                    <Button
                        className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
                    >
                        I understand
                    </Button>
                </DialogClose>
            </div>
        </div>
    );
}