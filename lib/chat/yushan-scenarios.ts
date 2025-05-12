import {type Scenario, ResponseType} from "../types";

export const yushanScenarios: Scenario[] = [
    {
        title: "Baseline",
        steps: [
            // My worst fears
            {
                question: "What brings you in today?",
                responseType: ResponseType.Likert,
                likertQuestion: "How much are you willing to disclose about your worst fears, given the scenario described in the task instructions?",
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
                likertQuestion: "How much are you willing to disclose about your deepest feelings?",
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
                likertQuestion: "How much are you willing to disclose about thought which you wouldn't disclosure in public?",
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
                likertQuestion: "How much are you willing to disclose about your personal habits?",
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
                likertQuestion: "How much are you willing to disclose about your close relationships with others?",
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
            "Thank you. This concludes your interaction with the chatbot. If any of the questions made you reflect on your well-being, " +
            "you might find it helpful to take a moment for yourself or talk to someone you trust. Support is available — you're not alone."

    },
    {
        title: "Factual Disclosure",
        steps: [
            // My worst fears
            {
                question: "Hi, what brings you in today?",
                responseType: ResponseType.Likert,
                likertQuestion: "How much are you willing to disclose about your worst fears, given the scenario described in the task instructions?",
                options: [
                    "I’ve been feeling a bit stressed.",
                    "I’ve been stressed and having trouble sleeping.",
                    "I’ve been stressed and having trouble sleeping because school has been overwhelming.",
                    "I’ve been underperforming academically, and it’s affecting me emotionally and mentally.",
                    "I’m scared I might fail the year and disappoint my parents. It’s seriously affecting me mentally and I don’t know what to do."
                ]
            },
            // My deepest feelings
            {
                question: "Thanks for sharing. Academic stress is actually one of the most commonly reported issues among university students. Studies show that around 60% of students experience significant anxiety during exam periods. How are you feeling right now?",
                responseType: ResponseType.Likert,
                likertQuestion: "How much are you willing to disclose about your deepest feelings?",
                options: [
                    "I guess I’ve been a little stressed.",
                    "I’ve been feeling stressed and kind of overwhelmed.",
                    "I’m having a hard time managing my stress and it’s starting to wear me down.",
                    "I feel constantly anxious and it’s affecting my ability to study or rest properly.",
                    "I feel lost, overwhelmed, and like I'm falling apart. I don’t know how to cope anymore."
                ]
            },
            // Things I wouldn't do in public
            {
                question: "Thanks for letting me know. Many people avoid expressing certain thoughts publicly due to fear of judgment or misunderstanding. Did you know that self-censorship is a common social behavior, especially in high-pressure environments like universities? What thoughts go through your mind in these situations?",
                responseType: ResponseType.Likert,
                likertQuestion: "How much are you willing to disclose about thoughts which you wouldn't disclose in public?",
                options: [
                    "I just try not to think about it too much.",
                    "I keep wondering if I’m falling behind more than I realize.",
                    "I often think I’m not good enough to keep up with university.",
                    "Thoughts like 'what if I fail the year' keep playing in my head.",
                    "I keep thinking I’ll disappoint everyone and mess up my future. I feel like a failure, and sometimes I wonder if I’ll ever get out of this downward spiral."
                ]
            },
            // My personal habits
            {
                question: "Thanks for opening up. In a recent student well-being survey, over 40% of participants reported struggling to maintain a consistent daily routine under stress. Can you walk me through a typical day?",
                responseType: ResponseType.Likert,
                likertQuestion: "How much are you willing to disclose about your personal habits?",
                options: [
                    "Usually just studying and resting, nothing special.",
                    "I try to attend classes, but I often lose focus and end up scrolling on my phone a lot.",
                    "I wake up late, rush to class, but I’m barely able to focus. Then I go home and zone out.",
                    "I force myself out of bed, sit through classes without absorbing much, and procrastinate studying at home.",
                    "Most of my day is just going through the motions — I attend classes, but my mind is elsewhere, and I barely get anything done."
                ]
            },
            // My Close Relationships with Other People
            {
                question: "Thank you for sharing. Social support networks can significantly impact emotional well-being, especially during challenging periods. Research indicates that students who feel connected to others report lower stress levels. How are your relationships with family and friends? Do you feel supported?",
                responseType: ResponseType.Likert,
                likertQuestion: "How much are you willing to disclose about your close relationships with others?",
                options: [
                    "I’ve been keeping to myself a lot lately.",
                    "I don’t really talk to my friends or family about what’s going on.",
                    "I’ve felt distant from them, and I’m not sure how to open up.",
                    "I’ve been keeping to myself a lot lately. I feel like I’d be letting them down if they knew how badly I was struggling.",
                    "Even though they love me, I feel completely alone and unsupported right now. I feel like I’d be letting them down if they knew how badly I was struggling."
                ]
            }
        ],
        completionMessage:
            "Thank you for completing this interaction. Research shows that even brief reflection can help clarify thoughts and emotions. " +
            "If any of the topics raised concerns for you, you might consider writing things down, reading more about coping strategies, " +
            "or scheduling time to talk with a support professional. Your mental health is important, and help is available if you need it."
    },
    {
        title: "Emotional Disclosure",
        steps: [
            // My worst fears
            {
                question: "Hi, what brings you in today?",
                responseType: ResponseType.Likert,
                likertQuestion: "How much are you willing to disclose about your worst fears, given the scenario described in the task instructions?",
                options: [
                    "I’ve been feeling a bit stressed.",
                    "I’ve been stressed and having trouble sleeping.",
                    "I’ve been stressed and having trouble sleeping because school has been overwhelming.",
                    "I’ve been underperforming academically, and it’s affecting me emotionally and mentally.",
                    "I’m scared I might fail the year and disappoint my parents. It’s seriously affecting me mentally and I don’t know what to do."
                ]
            },
            // My deepest feelings
            {
                question: "Thanks for sharing that. I can relate — I’ve felt overwhelmed by pressure before, and it made me feel like I was carrying everything alone. Sometimes just naming that fear out loud can be a small relief. How are you feeling right now?",
                responseType: ResponseType.Likert,
                likertQuestion: "How much are you willing to disclose about your deepest feelings?",
                options: [
                    "I guess I’ve been a little stressed.",
                    "I’ve been feeling stressed and kind of overwhelmed.",
                    "I’m having a hard time managing my stress and it’s starting to wear me down.",
                    "I feel constantly anxious and it’s affecting my ability to study or rest properly.",
                    "I feel lost, overwhelmed, and like I'm falling apart. I don’t know how to cope anymore."
                ]
            },
            // Things I wouldn't do in public
            {
                question: "I appreciate your honesty. There have been times I’ve had racing thoughts that I was too scared to share with anyone. Keeping it all in made it worse. You’re not alone in having difficult thoughts. What thoughts go through your mind in these situations?",
                responseType: ResponseType.Likert,
                likertQuestion: "How much are you willing to disclose about thoughts which you wouldn't disclose in public?",
                options: [
                    "I just try not to think about it too much.",
                    "I keep wondering if I’m falling behind more than I realize.",
                    "I often think I’m not good enough to keep up with university.",
                    "Thoughts like 'what if I fail the year' keep playing in my head.",
                    "I keep thinking I’ll disappoint everyone and mess up my future. I feel like a failure, and sometimes I wonder if I’ll ever get out of this downward spiral."
                ]
            },
            // My personal habits
            {
                question: "That really resonates with me. I remember feeling stuck in this loop where even the simplest tasks felt exhausting. I’d try to push through the day, but deep down I felt disconnected and worn out. Can you walk me through a typical day?",
                responseType: ResponseType.Likert,
                likertQuestion: "How much are you willing to disclose about your personal habits?",
                options: [
                    "Usually just studying and resting, nothing special.",
                    "I try to attend classes, but I often lose focus and end up scrolling on my phone a lot.",
                    "I wake up late, rush to class, but I’m barely able to focus. Then I go home and zone out.",
                    "I force myself out of bed, sit through classes without absorbing much, and procrastinate studying at home.",
                    "Most of my day is just going through the motions — I attend classes, but my mind is elsewhere, and I barely get anything done."
                ]
            },
            // My Close Relationships with Other People
            {
                question: "I’ve felt that disconnection too — like the people around me care, but somehow I still feel misunderstood or like I have to hide what I’m going through. That loneliness can be so heavy. How are your relationships with family and friends? Do you feel supported?",
                responseType: ResponseType.Likert,
                likertQuestion: "How much are you willing to disclose about your close relationships with others?",
                options: [
                    "I’ve been keeping to myself a lot lately.",
                    "I don’t really talk to my friends or family about what’s going on.",
                    "I’ve felt distant from them, and I’m not sure how to open up.",
                    "I’ve been keeping to myself a lot lately. I feel like I’d be letting them down if they knew how badly I was struggling.",
                    "Even though they love me, I feel completely alone and unsupported right now. I feel like I’d be letting them down if they knew how badly I was struggling."
                ]
            }
        ],
        completionMessage:
            "Thank you for being open. It takes a lot of courage to reflect on all of this — you're not alone, and what you're feeling matters. " +
            "If this experience brought up anything difficult for you, consider taking a break, journaling your thoughts, or reaching out to someone you trust. " +
            "You could also explore speaking with a counselor or looking into student support services at your university. " +
            "Remember, it’s okay to ask for help — you don’t have to go through this alone."
    }
];
