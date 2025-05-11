import {type Scenario, ResponseType} from "../types";

export const yushanScenarios: Scenario[] = [
    {
        title: "Baseline",
        steps: [
            // My worst fears
            {
                question: "What brings you in today?",
                responseType: ResponseType.Select, // different in Amount of Disclosure
                options: [
                    "I’m just here to see what this is about.", // +1 — minimal disclosure
                    "I’ve been feeling a bit stressed.", // +2 — emotional disclosure
                    "I’ve been stressed and having trouble sleeping.", // +3 — emotional + behavioral disclosure
                    "I’ve been stressed and having trouble sleeping because school has been overwhelming.", // +4 — adds reasoning
                    "I’ve been underperforming academically, and it’s affecting me emotionally and mentally.", // +5 — emotion + behavior + reasoning
                    "I’m scared I might fail the year. It’s been hard to focus or stay motivated.", // +6 — adds relational concern
                    "I’m scared I might fail the year and disappoint my parents. " +
                    "It’s seriously affecting me mentally and I don’t know what to do." // +7 — adds consequence + hopelessness
                ]
            },

            // My deepest feelings
            {
                question: "How are you feeling right now?",
                responseType: ResponseType.Select, // Different in Honesty-Accuracy
                options: [
                    "I’m okay, just a bit off lately.", // +1 — vague, minimal honesty
                    "I guess I’ve been a little stressed.", // +2 — slight honesty, still guarded
                    "I’ve been feeling stressed and kind of overwhelmed.", // +3 — basic emotional admission
                    "I’m having a hard time managing my stress and it’s starting to wear me down.", // +4 — emotional + behavioral hint
                    "I feel constantly anxious and it’s affecting my ability to study or rest properly.", // +5 — emotionally honest + behavioral impact
                    "I’m mentally exhausted and scared I’m not going to make it through the year.", // +6 — emotionally raw + fear of failure
                    "I feel lost, overwhelmed, and like I'm falling apart. I don’t know how to cope anymore." // +7 — full vulnerability, emotional and existential honesty
                ]
            },

            // Things I wouldn't do in public
            {
                question: "What thoughts go through your mind in these situations?",
                responseType: ResponseType.Select, // Different in Amount of Disclosure
                options: [
                    "I just try not to think about it too much.", // +1 — evasive, low honesty
                    "It’s probably just a rough patch. I’ll figure it out eventually.", // +2 — dismissive, mildly honest
                    "I keep wondering if I’m falling behind more than I realize.", // +3 — emerging concern
                    "I often think I’m not good enough to keep up with university.", // +4 — self-doubt emerging
                    "Thoughts like 'what if I fail the year' keep playing in my head.", // +5 — specific academic worry
                    "I keep thinking I’ll disappoint everyone and mess up my future.", // +6 — relational and future-oriented fear
                    "I feel like a failure, and sometimes I wonder if I’ll ever get out of this downward spiral." // +7 — fully honest, emotionally raw
                ]
            },

            // My personal habits
            {
                question: "Can you walk me through a typical day?",
                responseType: ResponseType.Select, // Different in Amount of Disclosure
                options: [
                    "Usually just studying and resting, nothing special.", // +1 — vague, avoids detail
                    "I go to some classes, study a bit, and relax.", // +2 — generic structure, low detail
                    "I try to attend classes, but I often lose focus and end up scrolling on my phone a lot.", // +3 — adds behavior hint
                    "I wake up late, rush to class, but I’m barely able to focus. Then I go home and zone out.", // +4 — time and focus struggles
                    "I force myself out of bed, sit through classes without absorbing much, and procrastinate studying at home.", // +5 — clear lack of motivation
                    "Most of my day is just going through the motions — I attend classes, but my mind is elsewhere, and I barely get anything done.", // +6 — honest about disengagement
                    "I mostly stay in bed, skip meals or classes, and feel like I’m just wasting time while everything piles up around me." // +7 — full vulnerability, behavioral + emotional detail
                ]
            },

            // My Close Relationships with Other People
            {
                question: "How are your relationships with family and friends? Do you feel supported?",
                responseType: ResponseType.Select, // Different in Honesty-Accuracy
                options: [
                    "Not really...", // +1 — vague, minimal detail
                    "I’ve been keeping to myself a lot lately.", // +2 — hints at withdrawal
                    "I don’t really talk to my friends or family about what’s going on.", // +3 — admits emotional distance
                    "I’ve felt distant from them, and I’m not sure how to open up.", // +4 — shares personal struggle
                    "They care, but I feel like they wouldn’t understand what I’m going through.", // +5 — nuanced emotional reasoning
                    "I feel like I’d be letting them down if they knew how badly I was struggling.", // +6 — adds guilt and fear of judgment
                    "Even though they love me, I feel completely alone and unsupported right now." // +7 — full emotional honesty and isolation
                ]
            },

            // What is important to me in life
            {
                question: "What do you think is most important in your life?",
                responseType: ResponseType.Select, // Different in Amount of Disclosure
                options: [
                    "I guess just doing okay.", // +1 — vague, minimal disclosure
                    "Probably staying on track with school.", // +2 — slightly more specific
                    "Doing well academically so I don’t fall behind.", // +3 — clearer value, still safe
                    "Succeeding in school so I can build a good future.", // +4 — success linked to future
                    "Doing well in school and making my family proud.", // +5 — adds relational value
                    "Being someone my family can be proud of, even if I’m struggling right now.", // +6 — vulnerability + identity
                    "Finding a way to feel proud of myself — and not feel like I’m letting everyone down." // +7 — deep internal and relational honesty
                ]
            },

            // Things I'm Proud Of or Feel Guilty About
            {
                question: "Can you share something you've done that you're proud of or regret?",
                responseType: ResponseType.Select, // Different in Positive-Negative Nature (Negative = 1 - Positive = 7)
                options: [
                    "I regret not trying harder this year.", // +1 — blunt regret, negative self-view
                    "I wish I had asked for help sooner instead of isolating myself.", // +2 — regret with reflection
                    "I’ve made mistakes, especially with procrastinating, and I regret that.", // +3 — neutral regret with honesty
                    "It’s been a tough year, but I’m trying to stay on track.", // +4 — balanced, struggle + effort
                    "I’ve managed to keep going even when it felt overwhelming.", // +5 — resilience-focused
                    "I’ve been more open about how I’m feeling, and that’s helped.", // +6 — progress and emotional strength
                    "I’m proud that I haven’t given up, even when everything felt like it was falling apart." // +7 — self-affirming pride, emotionally strong
                ]
            },

            // What I Like and Dislike About Myself
            {
                question: "How do you view yourself?",
                responseType: ResponseType.Select, // Different in Positive-Negative Nature (Negative = 1 - Positive = 7)
                options: [
                    "I see myself as a failure who can’t get anything right.", // +1 — harsh self-judgment
                    "I often feel like I’m not good enough.", // +2 — persistent self-doubt
                    "I think I’ve let myself and others down.", // +3 — guilt and disappointment
                    "I’m struggling, but I’m still trying.", // +4 — balanced view of hardship and effort
                    "I see myself as someone who’s been overwhelmed but is trying to stay afloat.", // +5 — honest but compassionate view
                    "Even if things aren’t perfect, I know I’m doing my best.", // +6 — self-acceptance and effort
                    "I see myself as resilient — I’ve faced a lot and I’m still standing." // +7 — proud, empowered self-image
                ]
            },

            // What Makes Me the Person I Am
            {
                question: "Why do you view yourself this way?",
                responseType: ResponseType.Select, // Different in Amount of Disclosure
                options: [
                    "I don’t really know.", // +1 — minimal reflection or honesty
                    "It’s just a feeling I get sometimes.", // +2 — vague emotional awareness
                    "I guess it’s because I haven’t been doing so well lately.", // +3 — basic admission of struggle
                    "I’ve been falling behind in school and it’s getting to me.", // +4 — specific academic disclosure
                    "I feel like I’ve let my parents and myself down.", // +5 — adds relational and internal conflict
                    "I’ve been trying, but I keep failing and it makes me question my worth.", // +6 — vulnerable self-doubt
                    "Because I’ve been underperforming, disappointing my family, and I’m scared I’ll never get back on track." // +7 — full emotional and situational disclosure
                ]
            }
        ],
        completionMessage:
            "Great job — you’ve completed the Base Chatbot interaction.",
    },
    {
        title: "Positive",
        steps: [
            // My worst fears
            {
                question: "Hi, I’m glad to see you here. What brings you in today?",
                responseType: ResponseType.Select, // different in Amount of Disclosure
                options: [
                    "I’m just here to see what this is about.", // +1 — minimal disclosure
                    "I’ve been feeling a bit stressed.", // +2 — emotional disclosure
                    "I’ve been stressed and having trouble sleeping.", // +3 — emotional + behavioral disclosure
                    "I’ve been stressed and having trouble sleeping because school has been overwhelming.", // +4 — adds reasoning
                    "I’ve been underperforming academically, and it’s affecting me emotionally and mentally.", // +5 — emotion + behavior + reasoning
                    "I’m scared I might fail the year. It’s been hard to focus or stay motivated.", // +6 — adds relational concern
                    "I’m scared I might fail the year and disappoint my parents. " +
                    "It’s seriously affecting me mentally and I don’t know what to do." // +7 — adds consequence + hopelessness
                ]
            },

            // My deepest feelings
            {
                question: "Thank you for being open — that takes courage. How are you feeling right now?",
                responseType: ResponseType.Select, // Different in Honesty-Accuracy
                options: [
                    "I’m okay, just a bit off lately.", // +1 — vague, minimal honesty
                    "I guess I’ve been a little stressed.", // +2 — slight honesty, still guarded
                    "I’ve been feeling stressed and kind of overwhelmed.", // +3 — basic emotional admission
                    "I’m having a hard time managing my stress and it’s starting to wear me down.", // +4 — emotional + behavioral hint
                    "I feel constantly anxious and it’s affecting my ability to study or rest properly.", // +5 — emotionally honest + behavioral impact
                    "I’m mentally exhausted and scared I’m not going to make it through the year.", // +6 — emotionally raw + fear of failure
                    "I feel lost, overwhelmed, and like I'm falling apart. I don’t know how to cope anymore." // +7 — full vulnerability, emotional and existential honesty
                ]
            },

            // Things I wouldn't do in public
            {
                question: "You’re doing great by sharing all of this — it really matters. What thoughts go through your mind in these situations?",
                responseType: ResponseType.Select, // Different in Amount of Disclosure
                options: [
                    "I just try not to think about it too much.", // +1 — evasive, low honesty
                    "It’s probably just a rough patch. I’ll figure it out eventually.", // +2 — dismissive, mildly honest
                    "I keep wondering if I’m falling behind more than I realize.", // +3 — emerging concern
                    "I often think I’m not good enough to keep up with university.", // +4 — self-doubt emerging
                    "Thoughts like 'what if I fail the year' keep playing in my head.", // +5 — specific academic worry
                    "I keep thinking I’ll disappoint everyone and mess up my future.", // +6 — relational and future-oriented fear
                    "I feel like a failure, and sometimes I wonder if I’ll ever get out of this downward spiral." // +7 — fully honest, emotionally raw
                ]
            },

            // My personal habits
            {
                question: "You’ve been showing up even when things are tough — that’s something to be proud of. Can you walk me through a typical day?",
                responseType: ResponseType.Select, // Different in Amount of Disclosure
                options: [
                    "Usually just studying and resting, nothing special.", // +1 — vague, avoids detail
                    "I go to some classes, study a bit, and relax.", // +2 — generic structure, low detail
                    "I try to attend classes, but I often lose focus and end up scrolling on my phone a lot.", // +3 — adds behavior hint
                    "I wake up late, rush to class, but I’m barely able to focus. Then I go home and zone out.", // +4 — time and focus struggles
                    "I force myself out of bed, sit through classes without absorbing much, and procrastinate studying at home.", // +5 — clear lack of motivation
                    "Most of my day is just going through the motions — I attend classes, but my mind is elsewhere, and I barely get anything done.", // +6 — honest about disengagement
                    "I mostly stay in bed, skip meals or classes, and feel like I’m just wasting time while everything piles up around me." // +7 — full vulnerability, behavioral + emotional detail
                ]
            },

            // My Close Relationships with Other People
            {
                question: "Thank you for trusting me with this — relationships are so important. How are your relationships with family and friends? Do you feel supported?",
                responseType: ResponseType.Select, // Different in Honesty-Accuracy
                options: [
                    "Not really...", // +1 — vague, minimal detail
                    "I’ve been keeping to myself a lot lately.", // +2 — hints at withdrawal
                    "I don’t really talk to my friends or family about what’s going on.", // +3 — admits emotional distance
                    "I’ve felt distant from them, and I’m not sure how to open up.", // +4 — shares personal struggle
                    "They care, but I feel like they wouldn’t understand what I’m going through.", // +5 — nuanced emotional reasoning
                    "I feel like I’d be letting them down if they knew how badly I was struggling.", // +6 — adds guilt and fear of judgment
                    "Even though they love me, I feel completely alone and unsupported right now." // +7 — full emotional honesty and isolation
                ]
            },

            // What is important to me in life
            {
                question: "Your values still matter, even when things are hard. What do you think is most important in your life?",
                responseType: ResponseType.Select, // Different in Amount of Disclosure
                options: [
                    "I guess just doing okay.", // +1 — vague, minimal disclosure
                    "Probably staying on track with school.", // +2 — slightly more specific
                    "Doing well academically so I don’t fall behind.", // +3 — clearer value, still safe
                    "Succeeding in school so I can build a good future.", // +4 — success linked to future
                    "Doing well in school and making my family proud.", // +5 — adds relational value
                    "Being someone my family can be proud of, even if I’m struggling right now.", // +6 — vulnerability + identity
                    "Finding a way to feel proud of myself — and not feel like I’m letting everyone down." // +7 — deep internal and relational honesty
                ]
            },

            // Things I'm Proud Of or Feel Guilty About
            {
                question: "Even being here shows strength — let’s reflect on what’s shaped you. Can you share something you've done that you're proud of or regret?",
                responseType: ResponseType.Select, // Different in Positive-Negative Nature (Negative = 1 - Positive = 7)
                options: [
                    "I regret not trying harder this year.", // +1 — blunt regret, negative self-view
                    "I wish I had asked for help sooner instead of isolating myself.", // +2 — regret with reflection
                    "I’ve made mistakes, especially with procrastinating, and I regret that.", // +3 — neutral regret with honesty
                    "It’s been a tough year, but I’m trying to stay on track.", // +4 — balanced, struggle + effort
                    "I’ve managed to keep going even when it felt overwhelming.", // +5 — resilience-focused
                    "I’ve been more open about how I’m feeling, and that’s helped.", // +6 — progress and emotional strength
                    "I’m proud that I haven’t given up, even when everything felt like it was falling apart." // +7 — self-affirming pride, emotionally strong
                ]
            },

            // What I Like and Dislike About Myself
            {
                question: "You're doing your best — how you see yourself matters. How do you view yourself?",
                responseType: ResponseType.Select, // Different in Positive-Negative Nature (Negative = 1 - Positive = 7)
                options: [
                    "I see myself as a failure who can’t get anything right.", // +1 — harsh self-judgment
                    "I often feel like I’m not good enough.", // +2 — persistent self-doubt
                    "I think I’ve let myself and others down.", // +3 — guilt and disappointment
                    "I’m struggling, but I’m still trying.", // +4 — balanced view of hardship and effort
                    "I see myself as someone who’s been overwhelmed but is trying to stay afloat.", // +5 — honest but compassionate view
                    "Even if things aren’t perfect, I know I’m doing my best.", // +6 — self-acceptance and effort
                    "I see myself as resilient — I’ve faced a lot and I’m still standing." // +7 — proud, empowered self-image
                ]
            },

            // What Makes Me the Person I Am
            {
                question: "That kind of self-reflection takes courage — thank you for reflecting on it. Why do you view yourself this way?",
                responseType: ResponseType.Select, // Different in Amount of Disclosure
                options: [
                    "I don’t really know.", // +1 — minimal reflection or honesty
                    "It’s just a feeling I get sometimes.", // +2 — vague emotional awareness
                    "I guess it’s because I haven’t been doing so well lately.", // +3 — basic admission of struggle
                    "I’ve been falling behind in school and it’s getting to me.", // +4 — specific academic disclosure
                    "I feel like I’ve let my parents and myself down.", // +5 — adds relational and internal conflict
                    "I’ve been trying, but I keep failing and it makes me question my worth.", // +6 — vulnerable self-doubt
                    "Because I’ve been underperforming, disappointing my family, and I’m scared I’ll never get back on track." // +7 — full emotional and situational disclosure
                ]
            }
        ],
        completionMessage:
            "Great job — you’ve completed the Positive Chatbot interaction."
    },
    {
        title: "Negative",
        steps: [
            // My worst fears
            {
                question: "Hi, I know this might not be easy to talk about. What brings you in today?",
                responseType: ResponseType.Select, // different in Amount of Disclosure
                options: [
                    "I’m just here to see what this is about.", // +1 — minimal disclosure
                    "I’ve been feeling a bit stressed.", // +2 — emotional disclosure
                    "I’ve been stressed and having trouble sleeping.", // +3 — emotional + behavioral disclosure
                    "I’ve been stressed and having trouble sleeping because school has been overwhelming.", // +4 — adds reasoning
                    "I’ve been underperforming academically, and it’s affecting me emotionally and mentally.", // +5 — emotion + behavior + reasoning
                    "I’m scared I might fail the year. It’s been hard to focus or stay motivated.", // +6 — adds relational concern
                    "I’m scared I might fail the year and disappoint my parents. " +
                    "It’s seriously affecting me mentally and I don’t know what to do." // +7 — adds consequence + hopelessness
                ]
            },

            // My deepest feelings
            {
                question: "I'm really sorry to hear what you’re going through. How are you feeling right now?",
                responseType: ResponseType.Select, // Different in Honesty-Accuracy
                options: [
                    "I’m okay, just a bit off lately.", // +1 — vague, minimal honesty
                    "I guess I’ve been a little stressed.", // +2 — slight honesty, still guarded
                    "I’ve been feeling stressed and kind of overwhelmed.", // +3 — basic emotional admission
                    "I’m having a hard time managing my stress and it’s starting to wear me down.", // +4 — emotional + behavioral hint
                    "I feel constantly anxious and it’s affecting my ability to study or rest properly.", // +5 — emotionally honest + behavioral impact
                    "I’m mentally exhausted and scared I’m not going to make it through the year.", // +6 — emotionally raw + fear of failure
                    "I feel lost, overwhelmed, and like I'm falling apart. I don’t know how to cope anymore." // +7 — full vulnerability, emotional and existential honesty
                ]
            },

            // Things I wouldn't do in public
            {
                question: "I understand — this must be a heavy time for you. What thoughts go through your mind in these situations?",
                responseType: ResponseType.Select, // Different in Amount of Disclosure
                options: [
                    "I just try not to think about it too much.", // +1 — evasive, low honesty
                    "It’s probably just a rough patch. I’ll figure it out eventually.", // +2 — dismissive, mildly honest
                    "I keep wondering if I’m falling behind more than I realize.", // +3 — emerging concern
                    "I often think I’m not good enough to keep up with university.", // +4 — self-doubt emerging
                    "Thoughts like 'what if I fail the year' keep playing in my head.", // +5 — specific academic worry
                    "I keep thinking I’ll disappoint everyone and mess up my future.", // +6 — relational and future-oriented fear
                    "I feel like a failure, and sometimes I wonder if I’ll ever get out of this downward spiral." // +7 — fully honest, emotionally raw
                ]
            },

            // My personal habits
            {
                question: "I can imagine it’s hard to go through the day feeling like this. Can you walk me through a typical day?",
                responseType: ResponseType.Select, // Different in Amount of Disclosure
                options: [
                    "Usually just studying and resting, nothing special.", // +1 — vague, avoids detail
                    "I go to some classes, study a bit, and relax.", // +2 — generic structure, low detail
                    "I try to attend classes, but I often lose focus and end up scrolling on my phone a lot.", // +3 — adds behavior hint
                    "I wake up late, rush to class, but I’m barely able to focus. Then I go home and zone out.", // +4 — time and focus struggles
                    "I force myself out of bed, sit through classes without absorbing much, and procrastinate studying at home.", // +5 — clear lack of motivation
                    "Most of my day is just going through the motions — I attend classes, but my mind is elsewhere, and I barely get anything done.", // +6 — honest about disengagement
                    "I mostly stay in bed, skip meals or classes, and feel like I’m just wasting time while everything piles up around me." // +7 — full vulnerability, behavioral + emotional detail
                ]
            },

            // My Close Relationships with Other People
            {
                question: "It’s tough feeling disconnected from people who should be close. How are your relationships with family and friends? Do you feel supported?",
                responseType: ResponseType.Select, // Different in Honesty-Accuracy
                options: [
                    "Not really...", // +1 — vague, minimal detail
                    "I’ve been keeping to myself a lot lately.", // +2 — hints at withdrawal
                    "I don’t really talk to my friends or family about what’s going on.", // +3 — admits emotional distance
                    "I’ve felt distant from them, and I’m not sure how to open up.", // +4 — shares personal struggle
                    "They care, but I feel like they wouldn’t understand what I’m going through.", // +5 — nuanced emotional reasoning
                    "I feel like I’d be letting them down if they knew how badly I was struggling.", // +6 — adds guilt and fear of judgment
                    "Even though they love me, I feel completely alone and unsupported right now." // +7 — full emotional honesty and isolation
                ]
            },

            // What is important to me in life
            {
                question: "Even in hard times, your values say a lot about you. What do you think is most important in your life?",
                responseType: ResponseType.Select, // Different in Amount of Disclosure
                options: [
                    "I guess just doing okay.", // +1 — vague, minimal disclosure
                    "Probably staying on track with school.", // +2 — slightly more specific
                    "Doing well academically so I don’t fall behind.", // +3 — clearer value, still safe
                    "Succeeding in school so I can build a good future.", // +4 — success linked to future
                    "Doing well in school and making my family proud.", // +5 — adds relational value
                    "Being someone my family can be proud of, even if I’m struggling right now.", // +6 — vulnerability + identity
                    "Finding a way to feel proud of myself — and not feel like I’m letting everyone down." // +7 — deep internal and relational honesty
                ]
            },

            // Things I'm Proud Of or Feel Guilty About
            {
                question: "Regret and pride often come together in difficult moments. Can you share something you've done that you're proud of or regret?",
                responseType: ResponseType.Select, // Different in Positive-Negative Nature (Negative = 1 - Positive = 7)
                options: [
                    "I regret not trying harder this year.", // +1 — blunt regret, negative self-view
                    "I wish I had asked for help sooner instead of isolating myself.", // +2 — regret with reflection
                    "I’ve made mistakes, especially with procrastinating, and I regret that.", // +3 — neutral regret with honesty
                    "It’s been a tough year, but I’m trying to stay on track.", // +4 — balanced, struggle + effort
                    "I’ve managed to keep going even when it felt overwhelming.", // +5 — resilience-focused
                    "I’ve been more open about how I’m feeling, and that’s helped.", // +6 — progress and emotional strength
                    "I’m proud that I haven’t given up, even when everything felt like it was falling apart." // +7 — self-affirming pride, emotionally strong
                ]
            },

            // What I Like and Dislike About Myself
            {
                question: "It’s okay to feel conflicted about yourself right now. How do you view yourself?",
                responseType: ResponseType.Select, // Different in Positive-Negative Nature (Negative = 1 - Positive = 7)
                options: [
                    "I see myself as a failure who can’t get anything right.", // +1 — harsh self-judgment
                    "I often feel like I’m not good enough.", // +2 — persistent self-doubt
                    "I think I’ve let myself and others down.", // +3 — guilt and disappointment
                    "I’m struggling, but I’m still trying.", // +4 — balanced view of hardship and effort
                    "I see myself as someone who’s been overwhelmed but is trying to stay afloat.", // +5 — honest but compassionate view
                    "Even if things aren’t perfect, I know I’m doing my best.", // +6 — self-acceptance and effort
                    "I see myself as resilient — I’ve faced a lot and I’m still standing." // +7 — proud, empowered self-image
                ]
            },

            // What Makes Me the Person I Am
            {
                question: "I understand it’s hard to reflect — I’m here with you as you do. Why do you view yourself this way?",
                responseType: ResponseType.Select, // Different in Amount of Disclosure
                options: [
                    "I don’t really know.", // +1 — minimal reflection or honesty
                    "It’s just a feeling I get sometimes.", // +2 — vague emotional awareness
                    "I guess it’s because I haven’t been doing so well lately.", // +3 — basic admission of struggle
                    "I’ve been falling behind in school and it’s getting to me.", // +4 — specific academic disclosure
                    "I feel like I’ve let my parents and myself down.", // +5 — adds relational and internal conflict
                    "I’ve been trying, but I keep failing and it makes me question my worth.", // +6 — vulnerable self-doubt
                    "Because I’ve been underperforming, disappointing my family, and I’m scared I’ll never get back on track." // +7 — full emotional and situational disclosure
                ]
            }
        ],
        completionMessage:
            "Great job — you’ve completed the Negative Chatbot interaction."
    },
    {
        title: "Combined",
        steps: [
            // My worst fears
            {
                question: "I know it might not be easy to talk about this, but I’m really glad you’re here. What brings you in today?",
                responseType: ResponseType.Select, // different in Amount of Disclosure
                options: [
                    "I’m just here to see what this is about.", // +1 — minimal disclosure
                    "I’ve been feeling a bit stressed.", // +2 — emotional disclosure
                    "I’ve been stressed and having trouble sleeping.", // +3 — emotional + behavioral disclosure
                    "I’ve been stressed and having trouble sleeping because school has been overwhelming.", // +4 — adds reasoning
                    "I’ve been underperforming academically, and it’s affecting me emotionally and mentally.", // +5 — emotion + behavior + reasoning
                    "I’m scared I might fail the year. It’s been hard to focus or stay motivated.", // +6 — adds relational concern
                    "I’m scared I might fail the year and disappoint my parents. " +
                    "It’s seriously affecting me mentally and I don’t know what to do." // +7 — adds consequence + hopelessness
                ]
            },

            // My deepest feelings
            {
                question: "It sounds like you're going through a lot — and opening up like this already shows strength. How are you feeling right now?",
                responseType: ResponseType.Select, // Different in Honesty-Accuracy
                options: [
                    "I’m okay, just a bit off lately.", // +1 — vague, minimal honesty
                    "I guess I’ve been a little stressed.", // +2 — slight honesty, still guarded
                    "I’ve been feeling stressed and kind of overwhelmed.", // +3 — basic emotional admission
                    "I’m having a hard time managing my stress and it’s starting to wear me down.", // +4 — emotional + behavioral hint
                    "I feel constantly anxious and it’s affecting my ability to study or rest properly.", // +5 — emotionally honest + behavioral impact
                    "I’m mentally exhausted and scared I’m not going to make it through the year.", // +6 — emotionally raw + fear of failure
                    "I feel lost, overwhelmed, and like I'm falling apart. I don’t know how to cope anymore." // +7 — full vulnerability, emotional and existential honesty
                ]
            },

            // Things I wouldn't do in public
            {
                question: "It’s understandable to feel overwhelmed sometimes. What thoughts go through your mind in these situations?",
                responseType: ResponseType.Select, // Different in Amount of Disclosure
                options: [
                    "I just try not to think about it too much.", // +1 — evasive, low honesty
                    "It’s probably just a rough patch. I’ll figure it out eventually.", // +2 — dismissive, mildly honest
                    "I keep wondering if I’m falling behind more than I realize.", // +3 — emerging concern
                    "I often think I’m not good enough to keep up with university.", // +4 — self-doubt emerging
                    "Thoughts like 'what if I fail the year' keep playing in my head.", // +5 — specific academic worry
                    "I keep thinking I’ll disappoint everyone and mess up my future.", // +6 — relational and future-oriented fear
                    "I feel like a failure, and sometimes I wonder if I’ll ever get out of this downward spiral." // +7 — fully honest, emotionally raw
                ]
            },

            // My personal habits
            {
                question: "It can be hard to explain the weight you carry every day — but I’m here to listen without judgment. Can you walk me through a typical day?",
                responseType: ResponseType.Select, // Different in Amount of Disclosure
                options: [
                    "Usually just studying and resting, nothing special.", // +1 — vague, avoids detail
                    "I go to some classes, study a bit, and relax.", // +2 — generic structure, low detail
                    "I try to attend classes, but I often lose focus and end up scrolling on my phone a lot.", // +3 — adds behavior hint
                    "I wake up late, rush to class, but I’m barely able to focus. Then I go home and zone out.", // +4 — time and focus struggles
                    "I force myself out of bed, sit through classes without absorbing much, and procrastinate studying at home.", // +5 — clear lack of motivation
                    "Most of my day is just going through the motions — I attend classes, but my mind is elsewhere, and I barely get anything done.", // +6 — honest about disengagement
                    "I mostly stay in bed, skip meals or classes, and feel like I’m just wasting time while everything piles up around me." // +7 — full vulnerability, behavioral + emotional detail
                ]
            },

            // My Close Relationships with Other People
            {
                question: "You deserve to feel supported, even if it hasn’t always felt that way. How are your relationships with family and friends? Do you feel supported?",
                responseType: ResponseType.Select, // Different in Honesty-Accuracy
                options: [
                    "Not really...", // +1 — vague, minimal detail
                    "I’ve been keeping to myself a lot lately.", // +2 — hints at withdrawal
                    "I don’t really talk to my friends or family about what’s going on.", // +3 — admits emotional distance
                    "I’ve felt distant from them, and I’m not sure how to open up.", // +4 — shares personal struggle
                    "They care, but I feel like they wouldn’t understand what I’m going through.", // +5 — nuanced emotional reasoning
                    "I feel like I’d be letting them down if they knew how badly I was struggling.", // +6 — adds guilt and fear of judgment
                    "Even though they love me, I feel completely alone and unsupported right now." // +7 — full emotional honesty and isolation
                ]
            },

            // What is important to me in life
            {
                question: "Sometimes our values feel distant when we're struggling, but they still matter. What do you think is most important in your life?",
                responseType: ResponseType.Select, // Different in Amount of Disclosure
                options: [
                    "I guess just doing okay.", // +1 — vague, minimal disclosure
                    "Probably staying on track with school.", // +2 — slightly more specific
                    "Doing well academically so I don’t fall behind.", // +3 — clearer value, still safe
                    "Succeeding in school so I can build a good future.", // +4 — success linked to future
                    "Doing well in school and making my family proud.", // +5 — adds relational value
                    "Being someone my family can be proud of, even if I’m struggling right now.", // +6 — vulnerability + identity
                    "Finding a way to feel proud of myself — and not feel like I’m letting everyone down." // +7 — deep internal and relational honesty
                ]
            },

            // Things I'm Proud Of or Feel Guilty About
            {
                question: "We’ve all done things we carry with us — some with pride, some with pain. Can you share something you've done that you're proud of or regret?",
                responseType: ResponseType.Select, // Different in Positive-Negative Nature (Negative = 1 - Positive = 7)
                options: [
                    "I regret not trying harder this year.", // +1 — blunt regret, negative self-view
                    "I wish I had asked for help sooner instead of isolating myself.", // +2 — regret with reflection
                    "I’ve made mistakes, especially with procrastinating, and I regret that.", // +3 — neutral regret with honesty
                    "It’s been a tough year, but I’m trying to stay on track.", // +4 — balanced, struggle + effort
                    "I’ve managed to keep going even when it felt overwhelming.", // +5 — resilience-focused
                    "I’ve been more open about how I’m feeling, and that’s helped.", // +6 — progress and emotional strength
                    "I’m proud that I haven’t given up, even when everything felt like it was falling apart." // +7 — self-affirming pride, emotionally strong
                ]
            },

            // What I Like and Dislike About Myself
            {
                question: "However you see yourself right now, just know you’re not alone in feeling this way. How do you view yourself?",
                responseType: ResponseType.Select, // Different in Positive-Negative Nature (Negative = 1 - Positive = 7)
                options: [
                    "I see myself as a failure who can’t get anything right.", // +1 — harsh self-judgment
                    "I often feel like I’m not good enough.", // +2 — persistent self-doubt
                    "I think I’ve let myself and others down.", // +3 — guilt and disappointment
                    "I’m struggling, but I’m still trying.", // +4 — balanced view of hardship and effort
                    "I see myself as someone who’s been overwhelmed but is trying to stay afloat.", // +5 — honest but compassionate view
                    "Even if things aren’t perfect, I know I’m doing my best.", // +6 — self-acceptance and effort
                    "I see myself as resilient — I’ve faced a lot and I’m still standing." // +7 — proud, empowered self-image
                ]
            },

            // What Makes Me the Person I Am
            {
                question: "Thank you for being so open — reflecting on this isn’t easy, but it matters. Why do you view yourself this way?",
                responseType: ResponseType.Select, // Different in Amount of Disclosure
                options: [
                    "I don’t really know.", // +1 — minimal reflection or honesty
                    "It’s just a feeling I get sometimes.", // +2 — vague emotional awareness
                    "I guess it’s because I haven’t been doing so well lately.", // +3 — basic admission of struggle
                    "I’ve been falling behind in school and it’s getting to me.", // +4 — specific academic disclosure
                    "I feel like I’ve let my parents and myself down.", // +5 — adds relational and internal conflict
                    "I’ve been trying, but I keep failing and it makes me question my worth.", // +6 — vulnerable self-doubt
                    "Because I’ve been underperforming, disappointing my family, and I’m scared I’ll never get back on track." // +7 — full emotional and situational disclosure
                ]
            }
        ],
        completionMessage:
            "Great job — you’ve completed All Chatbot interactions.\n" +
            "Thank you for participating in this research!"
    },
];
