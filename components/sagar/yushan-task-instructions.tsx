import {BotIcon} from "lucide-react";

export default function YushanTaskInstructions() {
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2">
                <BotIcon/> <p className="font-bold text-lg">Task Instructions</p>
            </div>
            <hr/>

            <p>
                You will interact with <strong>three different versions</strong> of a mental health support chatbot.
                During each interaction, please imagine that <strong>you are the person described in the role-play
                scenario below</strong>.
            </p>

            <hr/>
            <p className="font-bold">Role-Play Scenario</p>
            <hr/>

            <p>
                Imagine you are a <b>bachelor student</b> at risk of expulsion because you haven’t earned enough credits
                this academic year. This has become a major source of <b>stress</b>, seriously affecting your mental
                well-being and making it hard to concentrate on daily activities, including your studies.
            </p>

            <p>
                You feel <b>guilty toward your parents</b>, believing that you could have performed better. You've <b>considered
                dropping out</b>, but you're unsure what you would do afterward. You're <b>feeling lost—confused,
                uncertain about your future, and unable to see a clear path forward.</b>
            </p>
        </div>
    );
}