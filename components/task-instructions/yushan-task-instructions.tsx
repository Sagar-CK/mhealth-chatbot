import {BotIcon} from "lucide-react";

export default function YushanTaskInstructions() {
    return (
        <div>
            <BotIcon/>
            <hr/>
            <p><strong>Scenario</strong></p>
            <hr/>
            <p>
                Imagine you are a bachelor student at risk of expulsion because you haven’t earned enough credits this
                academic year. This has become a major source of stress, seriously affecting your mental well-being and
                making it difficult to concentrate on daily activities, including your studies.

                You feel guilty toward your parents, believing that you could have performed better. You've thought
                about dropping out, but you're unsure what you would do afterward. You're feeling lost—confused,
                uncertain about your future, and unable to see a clear path forward.

                Wanting to take care of your mental health, you decided to talk to a therapist. However, the waiting
                list is two months long. As an alternative, you turned to an online mental health chatbot, hoping it
                might offer some support in the meantime.
            </p>
            <hr/>
            <p><strong>Task</strong></p>
            <hr/>
            <p>
                You will interact with <strong>four different versions</strong> of a mental health support chatbot.
                Please respond to each chatbot as if you were the student described in the scenario.
            </p>

            <ul>
                <li><i>1. Baseline Version</i></li>
                <li><i>2. Positive Version</i></li>
                <li><i>3. Negative Version</i></li>
                <li><i>4. Combined Version</i></li>
            </ul>
        </div>
    )
}