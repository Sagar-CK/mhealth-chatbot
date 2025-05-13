import { BotIcon } from "lucide-react";

export default function LinaTaskInstructions() {
    return (
        <div className="w-full h-full flex flex-col items-start justify-center gap-y-4 px-4 py-6 text-left text-base leading-relaxed max-w-xl">
            <div className="flex items-center gap-x-2 text-lg font-semibold">
                <BotIcon />
                <span>Chatbot Task Instructions</span>
            </div>

            <p>
                In the next part of the study, you will interact with a chatbot named <strong>Echo</strong>.
            </p>

            <p>
                Echo will present a few short scenarios and ask how willing you would be to share certain types of information.
            </p>

            <p>
                Some questions will have only one response option, while others will use a scale.
            </p>

            <p>
                There are <strong>no right or wrong answers</strong> — please respond as honestly as you can.
            </p>

            <p>
                The interaction should take about <strong>5–10 minutes</strong>.
            </p>

            <p>
                You can <strong>revoke your consent at any time</strong> by clicking the <em>"Revoke Consent"</em> button at the top of the screen.
            </p>
        </div>
    );
}
