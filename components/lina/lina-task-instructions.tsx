import { BotIcon } from "lucide-react";

export default function LinaTaskInstructions() {
    return (
        <div
            className="w-full h-full flex flex-col items-start justify-center gap-y-4 px-4 py-6 text-left text-base leading-relaxed max-w-xl">
            <div className="flex items-center gap-x-2 text-lg font-semibold">
                <BotIcon/>
                <span>Chatbot Task Instructions</span>
            </div>

            <p>
                In the next part of the study, you will interact with a chatbot that will ask you a series of questions.
            </p>
            <p>
                Some questions will have a single response option, while others will ask you to rate your
                willingness to share on a scale.
                For each question, please select the option that <strong>best reflects how willing you are to share</strong>.
            </p>

            <p>
                There are no right or wrong answers, please respond as <strong>honestly</strong> as you
                can.
            </p>

            <p>
                The interaction should take about <strong>5–10 minutes</strong>.
            </p>

            <p>
                You can <strong>revoke your consent at any time</strong> by clicking the <em>"Revoke
                Consent"</em> button at the top of the screen.
            </p>
        </div>
    );
}
