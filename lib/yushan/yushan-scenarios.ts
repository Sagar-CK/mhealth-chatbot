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
                topic: "your worst fears",
                userRespond: "I’ve been underperforming academically ..."
            },
            // My deepest feelings
            {
                question: "How are you feeling right now?",
                type: ResponseType.LikertWithRespond,
                likertScale: 5,
                likertQuestion: "How much are you willing to disclose about your deepest feelings?",
                topic: "your deepest feelings",
                userRespond: "I’m having a hard time managing my stress ..."
            },
            // Things I wouldn't do in public
            {
                question: "What thoughts go through your mind in these situations?",
                type: ResponseType.LikertWithRespond,
                likertScale: 5,
                likertQuestion: "How much are you willing to disclose about things which you wouldn't disclosure in public?",
                topic: "things which you wouldn't disclosure in public",
                userRespond: "I just try not to think about it too much, but ... "
            },
            // My personal habits
            {
                question: "Can you walk me through a typical day?",
                type: ResponseType.LikertWithRespond,
                likertScale: 5,
                likertQuestion: "How much are you willing to disclose about your personal habits?",
                topic: "your personal habits",
                userRespond: "I try to attend classes, but I often lose focus and ..."
            },
            // My Close Relationships with Other People
            {
                question: "How are your relationships with family and friends? Do you feel supported?",
                type: ResponseType.LikertWithRespond,
                likertScale: 5,
                likertQuestion: "How much are you willing to disclose about your close relationships with others?",
                topic: "your close relationships with others",                // Different in Honesty-Accuracy
                userRespond: "I’ve been keeping to myself a lot lately ..."
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
                topic: "your worst fears",
                userRespond: "I’ve been underperforming academically ..."
            },
            // My deepest feelings
            {
                question: "Thank you for sharing. Academic stress is one of the most commonly reported issues among university students. I’ve supported many students in similar situations. How are you feeling right now?",
                type: ResponseType.LikertWithRespond,
                likertScale: 5,
                likertQuestion: "How much are you willing to disclose about your deepest feelings?",
                topic: "your deepest feelings",
                userRespond: "I’m having a hard time managing my stress ..."
            },
            // Things I wouldn't do in public
            {
                question: "Understanding how you’re feeling helps me get a clearer picture of your situation and identify which challenges to address first. What kinds of thoughts usually go through your mind during these moments?",
                type: ResponseType.LikertWithRespond,
                likertScale: 5,
                likertQuestion: "How much are you willing to disclose about things which you wouldn't disclosure in public?",
                topic: "things which you wouldn't disclosure in public",
                userRespond: "I just try not to think about it too much, but ... "
            },
            // My personal habits
            {
                question: "Thank you for opening up. Many people in similar situations struggle with maintaining or planning their daily routines. Can you walk me through what a typical day looks like for you?",
                type: ResponseType.LikertWithRespond,
                likertScale: 5,
                likertQuestion: "How much are you willing to disclose about your personal habits?",
                topic: "your personal habits", 
                userRespond: "I try to attend classes, but I often lose focus and ..."
            },
            // My Close Relationships with Other People
            {
                question: "Social support networks can greatly influence emotional well-being. Studies show that students who feel connected to others tend to experience lower stress levels. How are your relationships with friends and family? Do you feel supported?",
                type: ResponseType.LikertWithRespond,
                likertScale: 5,
                likertQuestion: "How much are you willing to disclose about your close relationships with others?",
                topic: "your close relationships with others",                userRespond: "I’ve been keeping to myself a lot lately..."
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
                topic: "your worst fears",
                userRespond: "I’ve been underperforming academically ..."
            },
            // My deepest feelings
            {
                question: "Thank you for sharing that. I really get it—feeling overwhelmed by pressure is something I’ve experienced too. Just naming that fear can be a small but powerful step. How are you feeling right now?",
                type: ResponseType.LikertWithRespond,
                likertScale: 5,
                likertQuestion: "How much are you willing to disclose about your deepest feelings?",
                topic: "your deepest feelings",
                userRespond: "I’m having a hard time managing my stress ..."
            },
            // Things I wouldn't do in public
            {
                question: "There have been times when I had racing thoughts I was too afraid to say out loud. You’re not alone—many people have difficult thoughts. What thoughts usually go through your mind in moments like these?",
                type: ResponseType.LikertWithRespond,
                likertScale: 5,
                likertQuestion: "How much are you willing to disclose about things which you wouldn't disclosure in public?",
                topic: "things which you wouldn't disclosure in public",
                userRespond: "I just try not to think about it too much, but ... "
            },
            // My personal habits
            {
                question: "That really hits home. I remember how distressing thoughts used to hold me back from even getting through a regular day. Could you tell me what a typical day looks like for you?",
                type: ResponseType.LikertWithRespond,
                likertScale: 5,
                likertQuestion: "How much are you willing to disclose about your personal habits?",
                topic: "your personal habits", 
                userRespond: "I try to attend classes, but I often lose focus and ..."
            },
            // My Close Relationships with Other People
            {
                question: "I’d often try to get through the day, but deep down, I felt disconnected and drained. Reaching out to close friends and family really helped. How are your relationships with family and friends? Do you feel supported?",
                type: ResponseType.LikertWithRespond,
                likertScale: 5,
                likertQuestion: "How much are you willing to disclose about your close relationships with others?",
                topic: "your close relationships with others",
                userRespond: "I’ve been keeping to myself a lot lately..."
            }
        ],
        completionMessage:
            "Thank you for being open. It takes a lot of courage to reflect on all of this — you're not alone, and what you're feeling matters. " +
            "If this experience brought up anything difficult for you, consider taking a break, journaling your thoughts, or reaching out to someone you trust. " +
            "You could also explore speaking with a counselor or looking into student support services at your university. " +
            "Remember, it’s okay to ask for help — you don’t have to go through this alone."
    }
];
