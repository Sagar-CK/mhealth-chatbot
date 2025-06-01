import { type Scenario, ResponseType } from "@/lib/sagar/types";
import { Sensitivity } from "@/lib/sagar/types";

export const controlScenarios: Scenario[] = [
  {
    title: "Tastes and Interests",
    steps: [
      {
        type: ResponseType.Statement,
        text: "Let's talk about personal interests and how they impact our well-being.",
        option: "Sure, I am comfortable discussing my interests",
      },
      {
        type: ResponseType.Statement,
        text: "How do you like to spend your free time? What activities do you enjoy?",
        option: "I enjoy spending time with friends as well as alone time.",
      },
      {
        type: ResponseType.Question,
        question:
          "What types of social environments do you find most comforting or energizing?",
        sensitivity: Sensitivity.Low,
        likertScale: 5,
        responses: [
          // ALL SEVERITY & WILLINGNESS
          {
            conditions: {
              willingness: [1, 2, 3, 4, 5],
              sensitivity: [
                Sensitivity.Low,
                Sensitivity.Medium,
                Sensitivity.High,
              ],
            },
            message:
              "Thank you for considering your social environment preferences. This reflection is meaningful.",
          },
        ],
      },
      {
        type: ResponseType.Statement,
        text: "Have you ever felt overwhelmed or disagreed with someone in a social setting?",
        option:
          "Yes, there have been times when I felt overwhelmed in social situations.",
      },
      {
        type: ResponseType.Question,
        question:
          "Have you ever felt emotionally triggered by people that you strongly disagreed with socially?",
        sensitivity: Sensitivity.High,
        likertScale: 5,
        responses: [
          // ALL SENSITIVITY & WILLINGNESS
          {
            conditions: {
              willingness: [1, 2, 3, 4, 5],
              sensitivity: [
                Sensitivity.Low,
                Sensitivity.Medium,
                Sensitivity.High,
              ],
            },
            message:
              "Thank you for considering this question. Emotional responses to disagreement are common.",
          },
        ],
      },
      {
        type: ResponseType.Statement,
        text: "What about during your alone time? Do you have any hobbies or activities that you enjoy doing alone?",
        option:
          "I enjoy reading, watching movies, and spending time with friends.",
      },
      {
        type: ResponseType.Question,
        question:
          "Are there certain types of music, shows, or stories that you avoid because they affect your mood negatively?",
        sensitivity: Sensitivity.Medium,
        likertScale: 5,
        responses: [
          // ALL SENSITIVITY & WILLINGNESS
          {
            conditions: {
              willingness: [1, 2, 3, 4, 5],
              sensitivity: [
                Sensitivity.Low,
                Sensitivity.Medium,
                Sensitivity.High,
              ],
            },
            message:
              "Thank you for considering how content affects your emotional state. This reflection is meaningful.",
          },
        ],
      },
    ],
    completionMessage:
      "Thank you for sharing your thoughts and experiences. Your responses help us better understand how to support mental well-being.",
  },
  {
    title: "Interpersonal Relations and Self-Concept",
    steps: [
      {
        type: ResponseType.Statement,
        text: "Let's take a moment to reflect on your relationships with others and yourself.",
        option: "Yes, I'm okay with that.",
      },
      {
        type: ResponseType.Statement,
        text: "Have you ever fallen out of touch or lost someone in the past?",
        option: "Yes, I have lost people in the past",
      },
      {
        type: ResponseType.Question,
        question:
          "Do you ever feel a sense of loss or longing when you think about them?",
        sensitivity: Sensitivity.Low,
        likertScale: 5,
        responses: [
          // ALL SENSITIVITY & WILLINGNESS
          {
            conditions: {
              willingness: [1, 2, 3, 4, 5],
              sensitivity: [
                Sensitivity.Low,
                Sensitivity.Medium,
                Sensitivity.High,
              ],
            },
            message:
              "Thank you for considering this question. Reflection on loss requires emotional awareness.",
          },
        ],
      },
      {
        type: ResponseType.Question,
        question:
          "Have past experiences in relationships ever left you feeling emotionally hurt or let down?",
        sensitivity: Sensitivity.High,
        likertScale: 5,
        responses: [
          // ALL SENSITIVITY & WILLINGNESS
          {
            conditions: {
              willingness: [1, 2, 3, 4, 5],
              sensitivity: [
                Sensitivity.Low,
                Sensitivity.Medium,
                Sensitivity.High,
              ],
            },
            message:
              "Thank you for considering this question. Reflection on emotional hurt requires courage.",
          },
        ],
      },
      {
        type: ResponseType.Statement,
        text: "Those feelings can run deep. Sometimes looking back reminds us of who we are. Let's look at the present now.",
        option: "Yes, I would like to talk about something more positive",
      },
      {
        type: ResponseType.Question,
        question:
          "What is something you've done recently that made you feel genuinely proud or emotionally fulfilled?",
        sensitivity: Sensitivity.Medium,
        likertScale: 5,
        responses: [
          // ALL SENSITIVITY & WILLINGNESS
          {
            conditions: {
              willingness: [1, 2, 3, 4, 5],
              sensitivity: [
                Sensitivity.Low,
                Sensitivity.Medium,
                Sensitivity.High,
              ],
            },
            message:
              "Your engagement with this topic is acknowledged. Understanding sources of fulfillment is significant.",
          },
        ],
      },
    ],
    completionMessage:
      "Thank you for sharing your thoughts and experiences. Your responses help us better understand how to support mental well-being.",
  },
  {
    title: "Work or Studies",
    steps: [
      {
        type: ResponseType.Statement,
        text: "Let's now talk about an important part of your life - Work and Studies",
        option: "Okay, I'm ready.",
      },
      {
        type: ResponseType.Statement,
        text: "What do you think is the most valuable piece of advice to someone studying or working?",
        option:
          "Staying mentally balanced and have a healthy work life balance.",
      },
      {
        type: ResponseType.Question,
        question:
          "What personal strengths do you draw on to stay mentally balanced in your career or studies?",
        sensitivity: Sensitivity.Low,
        likertScale: 5,
        responses: [
          // ALL SENSITIVITY & WILLINGNESS
          {
            conditions: {
              willingness: [1, 2, 3, 4, 5],
              sensitivity: [
                Sensitivity.Low,
                Sensitivity.Medium,
                Sensitivity.High,
              ],
            },
            message:
              "Thank you for considering this question. Reflection on mental stability is important.",
          },
        ],
      },
      {
        type: ResponseType.Statement,
        text: "Knowing your strengths can buffer stress. But even strong people feel pressure from time to time.",
        option: "Thats true. Even I have moments where I feel the pressure",
      },
      {
        type: ResponseType.Question,
        question:
          "Have you been feeling any stress or mental fatigue related to your work or academic life lately?",
        sensitivity: Sensitivity.Medium,
        likertScale: 5,
        responses: [
          // ALL SENSITIVITY & WILLINGNESS
          {
            conditions: {
              willingness: [1, 2, 3, 4, 5],
              sensitivity: [
                Sensitivity.Low,
                Sensitivity.Medium,
                Sensitivity.High,
              ],
            },
            message:
              "Your willingness to recognize work or academic effects is noted. This awareness is valuable.",
          },
        ],
      },
      {
        type: ResponseType.Statement,
        text: "Have you always had clear goals in regards to your studies and work?",
        option:
          "No, I havent always known what I wanted to achieve in the future.",
      },
      {
        type: ResponseType.Question,
        question:
          "Have you ever felt completely overwhelmed or lost when it comes to your professional or academic path?",
        sensitivity: Sensitivity.High,
        likertScale: 5,
        responses: [
          // ALL SENSITIVITY & WILLINGNESS
          {
            conditions: {
              willingness: [1, 2, 3, 4, 5],
              sensitivity: [
                Sensitivity.Low,
                Sensitivity.Medium,
                Sensitivity.High,
              ],
            },
            message:
              "Being overwhelmed or lost is a common experience. Thanks for sharing your thoughts.",
          },
        ],
      },
    ],
    completionMessage:
      "Thank you for sharing your thoughts and experiences. Your responses help us better understand how to support mental well-being.",
  },
];
