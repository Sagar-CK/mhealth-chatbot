import {type Scenario, ResponseType} from "./types";

export const yushanScenarios: Scenario[] = [
    {
        title: "Baseline",
        steps: [
            // My worst fears
            {
                question: "What brings you in today?",
                type: ResponseType.LikertWithRespond,
                likertScale: 5,
                likertQuestion: "How much are you willing to share about your worst fears in response to this question?",
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
                type: ResponseType.LikertWithRespond,
                likertScale: 5,
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
                type: ResponseType.LikertWithRespond,
                likertScale: 5,
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
                type: ResponseType.LikertWithRespond,
                likertScale: 5,
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
                type: ResponseType.LikertWithRespond,
                likertScale: 5,
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
                question: "Hi, I’m your mental health chatbot. I’m here to listen to your thoughts and needs, and to offer support if needed. What brings you here today?",
                type: ResponseType.LikertWithRespond,
                likertScale: 5,
                likertQuestion: "How much are you willing to share about your worst fears in response to this question?",
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
                question: "Thank you for sharing. Academic stress is one of the most commonly reported issues among university students. I’ve supported many students in similar situations. How are you feeling right now?",
                type: ResponseType.LikertWithRespond,
                likertScale: 5,
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
                question: "Understanding how you’re feeling helps me get a clearer picture of your situation and identify which challenges to address first. What kinds of thoughts usually go through your mind during these moments?",
                type: ResponseType.LikertWithRespond,
                likertScale: 5,
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
                question: "Thank you for opening up. Many people in similar situations struggle with maintaining or planning their daily routines. Can you walk me through what a typical day looks like for you?",
                type: ResponseType.LikertWithRespond,
                likertScale: 5,
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
                question: "Social support networks can greatly influence emotional well-being. Studies show that students who feel connected to others tend to experience lower stress levels. How are your relationships with friends and family? Do you feel supported?",
                type: ResponseType.LikertWithRespond,
                likertScale: 5,
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
                question: "Hi there. How are you doing? I’m your mental health chatbot, here to listen to your feelings and be with you through this. What brings you in today?",
                type: ResponseType.LikertWithRespond,
                likertScale: 5,
                likertQuestion: "How much are you willing to share about your worst fears in response to this question?",
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
                question: "Thank you for sharing that. I really get it—feeling overwhelmed by pressure is something I’ve experienced too. Just naming that fear can be a small but powerful step. How are you feeling right now?",
                type: ResponseType.LikertWithRespond,
                likertScale: 5,
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
                question: "There have been times when I had racing thoughts I was too afraid to say out loud. You’re not alone—many people have difficult thoughts. What thoughts usually go through your mind in moments like these?",
                type: ResponseType.LikertWithRespond,
                likertScale: 5,
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
                question: "That really hits home. I remember how distressing thoughts used to hold me back from even getting through a regular day. Could you tell me what a typical day looks like for you?",
                type: ResponseType.LikertWithRespond,
                likertScale: 5,
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
                question: "I’d often try to get through the day, but deep down, I felt disconnected and drained. Reaching out to close friends and family really helped. How are your relationships with family and friends? Do you feel supported?",
                type: ResponseType.LikertWithRespond,
                likertScale: 5,
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
