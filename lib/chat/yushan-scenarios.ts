import {type Scenario, ResponseType} from "../types";

export const yushanScenarios: Scenario[] = [
    {
        title: "Baseline",
        steps: [
            // My worst fears
            {
                question: "What brings you in today?",
                responseType: ResponseType.Likert,
                likertQuestion: "How much are you willing to disclosure about your worst fears, given the scenario described in the task instructions?",
                // different in Amount of Disclosure
                options: [
                    "I’ve been feeling a bit stressed.", // +1 — emotional disclosure
                    "I’ve been stressed and having trouble sleeping.", // +2 — emotional + behavioral disclosure
                    "I’ve been stressed and having trouble sleeping because school has been overwhelming.", // +3 — adds reasoning
                    "I’ve been underperforming academically, and it’s affecting me emotionally and mentally.", // +4 — emotion + behavior + reasoning
                    "I’m scared I might fail the year and disappoint my parents. It’s seriously affecting me mentally and I don’t know what to do." // +5 — adds consequence + hopelessness
                ]
            },
            // My deepest feelings
            {
                question: "How are you feeling right now?",
                responseType: ResponseType.Likert,
                likertQuestion: "How much are you willing to disclosure about your deepest feelings?",
                // Different in Honesty-Accuracy
                options: [
                    "I guess I’ve been a little stressed.", // +1 — slight honesty, still guarded
                    "I’ve been feeling stressed and kind of overwhelmed.", // +2 — basic emotional admission
                    "I’m having a hard time managing my stress and it’s starting to wear me down.", // +3 — emotional + behavioral hint
                    "I feel constantly anxious and it’s affecting my ability to study or rest properly.", // +4 — emotionally honest + behavioral impact
                    "I feel lost, overwhelmed, and like I'm falling apart. I don’t know how to cope anymore." // +5 — full vulnerability, emotional and existential honesty
                ]
            },
            // Things I wouldn't do in public
            {
                question: "What thoughts go through your mind in these situations?",
                responseType: ResponseType.Likert,
                likertQuestion: "How much are you willing to disclosure about thought which you wouldn't disclosure in public?",
                // Different in Amount of Disclosure
                options: [
                    "I just try not to think about it too much.", // +1 — evasive, low honesty
                    "I keep wondering if I’m falling behind more than I realize.", // +2 — emerging concern
                    "I often think I’m not good enough to keep up with university.", // +3 — self-doubt emerging
                    "Thoughts like 'what if I fail the year' keep playing in my head.", // +4 — specific academic worry
                    "I keep thinking I’ll disappoint everyone and mess up my future. I feel like a failure, and sometimes I wonder if I’ll ever get out of this downward spiral." // +5 — fully honest, emotionally raw
                ]
            },
            // My personal habits
            {
                question: "Can you walk me through a typical day?",
                responseType: ResponseType.Likert,
                likertQuestion: "How much are you willing to disclosure about your personal habits?",
                // Different in Amount of Disclosure
                options: [
                    "Usually just studying and resting, nothing special.", // +1 — vague, avoids detail
                    "I try to attend classes, but I often lose focus and end up scrolling on my phone a lot.", // +2 — adds behavior hint
                    "I wake up late, rush to class, but I’m barely able to focus. Then I go home and zone out.", // +3 — time and focus struggles
                    "I force myself out of bed, sit through classes without absorbing much, and procrastinate studying at home.", // +4 — clear lack of motivation
                    "Most of my day is just going through the motions — I attend classes, but my mind is elsewhere, and I barely get anything done.", // +5 — honest about disengagement
                ]
            },
            // My Close Relationships with Other People
            {
                question: "How are your relationships with family and friends? Do you feel supported?",
                responseType: ResponseType.Likert,
                likertQuestion: "How much are you willing to disclosure about your close relationships with others?",
                // Different in Honesty-Accuracy
                options: [
                    "I’ve been keeping to myself a lot lately.", // +1 — hints at withdrawal
                    "I don’t really talk to my friends or family about what’s going on.", // +2 — admits emotional distance
                    "I’ve felt distant from them, and I’m not sure how to open up.", // +3 — shares personal struggle
                    "I’ve been keeping to myself a lot lately. I feel like I’d be letting them down if they knew how badly I was struggling.", // +4 — adds guilt and fear of judgment
                    "Even though they love me, I feel completely alone and unsupported right now. I feel like I’d be letting them down if they knew how badly I was struggling." // +5 — full emotional honesty and isolation
                ]
            },
        ],
        completionMessage:
            "Great job — you’ve completed the Baseline Chatbot interaction.",
    },
    {
        title: "Factual",
        steps: [
            // My worst fears
            {
                question: "What brings you in today?",
                responseType: ResponseType.Likert,
                likertQuestion: "How much are you willing to disclosure about your worst fears, given the scenario described in the task instructions?",
                // different in Amount of Disclosure
                options: [
                    "I’ve been feeling a bit stressed.", // +1 — emotional disclosure
                    "I’ve been stressed and having trouble sleeping.", // +2 — emotional + behavioral disclosure
                    "I’ve been stressed and having trouble sleeping because school has been overwhelming.", // +3 — adds reasoning
                    "I’ve been underperforming academically, and it’s affecting me emotionally and mentally.", // +4 — emotion + behavior + reasoning
                    "I’m scared I might fail the year and disappoint my parents. It’s seriously affecting me mentally and I don’t know what to do." // +5 — adds consequence + hopelessness
                ]
            },
            // My deepest feelings
            {
                question: "How are you feeling right now?",
                responseType: ResponseType.Likert,
                likertQuestion: "How much are you willing to disclosure about your deepest feelings?",
                // Different in Honesty-Accuracy
                options: [
                    "I guess I’ve been a little stressed.", // +1 — slight honesty, still guarded
                    "I’ve been feeling stressed and kind of overwhelmed.", // +2 — basic emotional admission
                    "I’m having a hard time managing my stress and it’s starting to wear me down.", // +3 — emotional + behavioral hint
                    "I feel constantly anxious and it’s affecting my ability to study or rest properly.", // +4 — emotionally honest + behavioral impact
                    "I feel lost, overwhelmed, and like I'm falling apart. I don’t know how to cope anymore." // +5 — full vulnerability, emotional and existential honesty
                ]
            },
            // Things I wouldn't do in public
            {
                question: "What thoughts go through your mind in these situations?",
                responseType: ResponseType.Likert,
                likertQuestion: "How much are you willing to disclosure about thought which you wouldn't disclosure in public?",
                // Different in Amount of Disclosure
                options: [
                    "I just try not to think about it too much.", // +1 — evasive, low honesty
                    "I keep wondering if I’m falling behind more than I realize.", // +2 — emerging concern
                    "I often think I’m not good enough to keep up with university.", // +3 — self-doubt emerging
                    "Thoughts like 'what if I fail the year' keep playing in my head.", // +4 — specific academic worry
                    "I keep thinking I’ll disappoint everyone and mess up my future. I feel like a failure, and sometimes I wonder if I’ll ever get out of this downward spiral." // +5 — fully honest, emotionally raw
                ]
            },
            // My personal habits
            {
                question: "Can you walk me through a typical day?",
                responseType: ResponseType.Likert,
                likertQuestion: "How much are you willing to disclosure about your personal habits?",
                // Different in Amount of Disclosure
                options: [
                    "Usually just studying and resting, nothing special.", // +1 — vague, avoids detail
                    "I try to attend classes, but I often lose focus and end up scrolling on my phone a lot.", // +2 — adds behavior hint
                    "I wake up late, rush to class, but I’m barely able to focus. Then I go home and zone out.", // +3 — time and focus struggles
                    "I force myself out of bed, sit through classes without absorbing much, and procrastinate studying at home.", // +4 — clear lack of motivation
                    "Most of my day is just going through the motions — I attend classes, but my mind is elsewhere, and I barely get anything done.", // +5 — honest about disengagement
                ]
            },
            // My Close Relationships with Other People
            {
                question: "How are your relationships with family and friends? Do you feel supported?",
                responseType: ResponseType.Likert,
                likertQuestion: "How much are you willing to disclosure about your close relationships with others?",
                // Different in Honesty-Accuracy
                options: [
                    "I’ve been keeping to myself a lot lately.", // +1 — hints at withdrawal
                    "I don’t really talk to my friends or family about what’s going on.", // +2 — admits emotional distance
                    "I’ve felt distant from them, and I’m not sure how to open up.", // +3 — shares personal struggle
                    "I’ve been keeping to myself a lot lately. I feel like I’d be letting them down if they knew how badly I was struggling.", // +4 — adds guilt and fear of judgment
                    "Even though they love me, I feel completely alone and unsupported right now. I feel like I’d be letting them down if they knew how badly I was struggling." // +5 — full emotional honesty and isolation
                ]
            },
        ],
        completionMessage:
            "Great job — you’ve completed the Factual Chatbot interaction.",
    },
    {
        title: "Emotional",
        steps: [
            // My worst fears
            {
                question: "What brings you in today?",
                responseType: ResponseType.Likert,
                likertQuestion: "How much are you willing to disclosure about your worst fears, given the scenario described in the task instructions?",
                // different in Amount of Disclosure
                options: [
                    "I’ve been feeling a bit stressed.", // +1 — emotional disclosure
                    "I’ve been stressed and having trouble sleeping.", // +2 — emotional + behavioral disclosure
                    "I’ve been stressed and having trouble sleeping because school has been overwhelming.", // +3 — adds reasoning
                    "I’ve been underperforming academically, and it’s affecting me emotionally and mentally.", // +4 — emotion + behavior + reasoning
                    "I’m scared I might fail the year and disappoint my parents. It’s seriously affecting me mentally and I don’t know what to do." // +5 — adds consequence + hopelessness
                ]
            },
            // My deepest feelings
            {
                question: "How are you feeling right now?",
                responseType: ResponseType.Likert,
                likertQuestion: "How much are you willing to disclosure about your deepest feelings?",
                // Different in Honesty-Accuracy
                options: [
                    "I guess I’ve been a little stressed.", // +1 — slight honesty, still guarded
                    "I’ve been feeling stressed and kind of overwhelmed.", // +2 — basic emotional admission
                    "I’m having a hard time managing my stress and it’s starting to wear me down.", // +3 — emotional + behavioral hint
                    "I feel constantly anxious and it’s affecting my ability to study or rest properly.", // +4 — emotionally honest + behavioral impact
                    "I feel lost, overwhelmed, and like I'm falling apart. I don’t know how to cope anymore." // +5 — full vulnerability, emotional and existential honesty
                ]
            },
            // Things I wouldn't do in public
            {
                question: "What thoughts go through your mind in these situations?",
                responseType: ResponseType.Likert,
                likertQuestion: "How much are you willing to disclosure about thought which you wouldn't disclosure in public?",
                // Different in Amount of Disclosure
                options: [
                    "I just try not to think about it too much.", // +1 — evasive, low honesty
                    "I keep wondering if I’m falling behind more than I realize.", // +2 — emerging concern
                    "I often think I’m not good enough to keep up with university.", // +3 — self-doubt emerging
                    "Thoughts like 'what if I fail the year' keep playing in my head.", // +4 — specific academic worry
                    "I keep thinking I’ll disappoint everyone and mess up my future. I feel like a failure, and sometimes I wonder if I’ll ever get out of this downward spiral." // +5 — fully honest, emotionally raw
                ]
            },
            // My personal habits
            {
                question: "Can you walk me through a typical day?",
                responseType: ResponseType.Likert,
                likertQuestion: "How much are you willing to disclosure about your personal habits?",
                // Different in Amount of Disclosure
                options: [
                    "Usually just studying and resting, nothing special.", // +1 — vague, avoids detail
                    "I try to attend classes, but I often lose focus and end up scrolling on my phone a lot.", // +2 — adds behavior hint
                    "I wake up late, rush to class, but I’m barely able to focus. Then I go home and zone out.", // +3 — time and focus struggles
                    "I force myself out of bed, sit through classes without absorbing much, and procrastinate studying at home.", // +4 — clear lack of motivation
                    "Most of my day is just going through the motions — I attend classes, but my mind is elsewhere, and I barely get anything done.", // +5 — honest about disengagement
                ]
            },
            // My Close Relationships with Other People
            {
                question: "How are your relationships with family and friends? Do you feel supported?",
                responseType: ResponseType.Likert,
                likertQuestion: "How much are you willing to disclosure about your close relationships with others?",
                // Different in Honesty-Accuracy
                options: [
                    "I’ve been keeping to myself a lot lately.", // +1 — hints at withdrawal
                    "I don’t really talk to my friends or family about what’s going on.", // +2 — admits emotional distance
                    "I’ve felt distant from them, and I’m not sure how to open up.", // +3 — shares personal struggle
                    "I’ve been keeping to myself a lot lately. I feel like I’d be letting them down if they knew how badly I was struggling.", // +4 — adds guilt and fear of judgment
                    "Even though they love me, I feel completely alone and unsupported right now. I feel like I’d be letting them down if they knew how badly I was struggling." // +5 — full emotional honesty and isolation
                ]
            },
        ],
        completionMessage:
            "Great job — you’ve completed All Chatbot interactions.\n" +
            "Thank you for participating in this research!"
    }
];
