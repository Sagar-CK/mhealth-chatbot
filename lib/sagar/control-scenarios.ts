import { type Scenario, ResponseType } from "@/lib/sagar/types";
import { Severity } from "@/lib/sagar/types";

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
        severity: Severity.Low,
        likertScale: 5,
        responses: [
          // LOW SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Low],
            },
            message:
              "It is acceptable if you are not prepared to explore social settings at this time. We can proceed at your preferred pace.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Low],
            },
            message:
              "Thank you for considering the question. Reflection on social preferences can be beneficial.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Low],
            },
            message:
              "Your openness to reflect on social energizing factors is noted. Such insights can be valuable.",
          },

          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Medium],
            },
            message:
              "This topic may require vulnerability. There is no obligation to engage with it at this time.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Medium],
            },
            message:
              "Thank you for considering your social environment preferences. This reflection is meaningful.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Medium],
            },
            message:
              "Your willingness to reflect on social comfort is noted. This awareness is valuable.",
          },

          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.High],
            },
            message:
              "This is a personal topic. There is no obligation to share information at this time.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.High],
            },
            message:
              "Your consideration of this question is acknowledged. Reflection on social safety can be significant.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.High],
            },
            message:
              "Thank you for engaging with this personal reflection. Understanding social safety factors can be beneficial.",
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
        severity: Severity.High,
        likertScale: 5,
        responses: [
          // LOW SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Low],
            },
            message:
              "If this topic causes discomfort, that is understandable. We can proceed at your preferred pace.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Low],
            },
            message:
              "Thank you for considering this question. Social disagreements can have various impacts.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Low],
            },
            message:
              "Your openness is acknowledged. Social tensions can have emotional implications.",
          },

          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Medium],
            },
            message:
              "This topic may be challenging. There is no requirement to engage with it at this time.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Medium],
            },
            message:
              "Thank you for considering this question. Emotional responses to disagreement are common.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Medium],
            },
            message:
              "Your reflection on emotionally triggering social conflict demonstrates self-awareness.",
          },

          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.High],
            },
            message:
              "This question may evoke significant emotions. There is no obligation to engage with it now.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.High],
            },
            message:
              "Your consideration of this question is acknowledged. Reflection on emotional triggers is meaningful.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.High],
            },
            message:
              "Thank you for engaging with this topic. Reflection on emotional triggers can be significant.",
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
        severity: Severity.Medium,
        likertScale: 5,
        responses: [
          // LOW SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Low],
            },
            message:
              "There is no requirement to reflect on this topic at this time.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Low],
            },
            message:
              "Thank you for considering this question. Media content can have various emotional impacts.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Low],
            },
            message:
              "Your openness to consider media's emotional impact is noted. This awareness is valuable.",
          },

          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Medium],
            },
            message:
              "This topic may evoke various emotions. There is no requirement to engage with it now.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Medium],
            },
            message:
              "Thank you for considering how content affects your emotional state. This reflection is meaningful.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Medium],
            },
            message:
              "Your engagement with this question is noted. Awareness of emotional triggers in media is significant.",
          },

          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.High],
            },
            message:
              "This topic may evoke personal memories. There is no obligation to engage with it at this time.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.High],
            },
            message:
              "Thank you for considering this question. Content avoidance can be a form of emotional protection.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.High],
            },
            message:
              "Your reflection on media's emotional impact demonstrates insight. Thank you for your engagement.",
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
        severity: Severity.Low,
        likertScale: 5,
        responses: [
          // LOW SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Low],
            },
            message:
              "There is no requirement to explore feelings of loss at this time.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Low],
            },
            message:
              "Thank you for considering these emotions. Such reflections can be meaningful.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Low],
            },
            message:
              "Your openness to reflect on feelings of longing is noted. This awareness is valuable.",
          },

          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Medium],
            },
            message:
              "Reflection on loss can be challenging. There is no requirement to engage with it now.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Medium],
            },
            message:
              "Thank you for considering this complex topic. Your engagement is meaningful.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Medium],
            },
            message:
              "Your reflection on feelings of loss demonstrates emotional awareness. This is significant.",
          },

          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.High],
            },
            message:
              "This is a personal topic. There is no obligation to engage with it at this time.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.High],
            },
            message:
              "Thank you for considering this question. Reflection on loss requires emotional awareness.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.High],
            },
            message:
              "Your engagement with this personal topic is acknowledged. Such reflection can be meaningful.",
          },
        ],
      },
      {
        type: ResponseType.Question,
        question:
          "Have past experiences in relationships ever left you feeling emotionally hurt or let down?",
        severity: Severity.High,
        likertScale: 5,
        responses: [
          // LOW SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Low],
            },
            message:
              "There is no requirement to reflect on relationship experiences at this time.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Low],
            },
            message:
              "Thank you for considering this question. Reflection on past relationships can be meaningful.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Low],
            },
            message:
              "Your openness to explore past experiences is noted. This awareness can support growth.",
          },

          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Medium],
            },
            message:
              "This topic may be sensitive. There is no requirement to engage with it now.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Medium],
            },
            message:
              "Thank you for considering this question. Reflection on emotional experiences is meaningful.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Medium],
            },
            message:
              "Your reflection on difficult experiences demonstrates resilience. This is significant.",
          },

          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.High],
            },
            message:
              "This question may evoke strong emotions. There is no obligation to engage with it now.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.High],
            },
            message:
              "Thank you for considering this question. Reflection on emotional hurt requires courage.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.High],
            },
            message:
              "Your engagement with this topic is acknowledged. Reflection on past emotional experiences can be significant.",
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
        severity: Severity.Medium,
        likertScale: 5,
        responses: [
          // LOW SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Low],
            },
            message:
              "There is no requirement to reflect on this topic at this time.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Low],
            },
            message:
              "Thank you for considering this question. Even small achievements can be meaningful.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Low],
            },
            message:
              "Your openness to reflect on achievements is noted. This awareness is valuable.",
          },

          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Medium],
            },
            message:
              "Reflection on achievements can be challenging. There is no requirement to engage with it now.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Medium],
            },
            message:
              "Thank you for considering this question. Moments of fulfillment deserve attention.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Medium],
            },
            message:
              "Your reflection on meaningful experiences is noted. This awareness is significant.",
          },

          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.High],
            },
            message:
              "This question may be challenging. There is no obligation to engage with it at this time.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.High],
            },
            message:
              "Thank you for considering this question. Reflection on fulfillment can be meaningful.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.High],
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
        text: "Let's take a small pivot and talk about another part of your life - Work and Studies",
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
        severity: Severity.Low,
        likertScale: 5,
        responses: [
          // LOW SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Low],
            },
            message:
              "There is no requirement to reflect on your strengths at this time.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Low],
            },
            message:
              "Thank you for considering this question. Reflection on personal resources can be meaningful.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Low],
            },
            message:
              "Your openness to recognize personal strengths is noted. This awareness is valuable.",
          },

          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Medium],
            },
            message:
              "This reflection may require vulnerability. There is no requirement to engage with it now.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Medium],
            },
            message:
              "Thank you for considering this question. Identifying personal resources is meaningful.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Medium],
            },
            message:
              "Your reflection on inner resources is noted. This awareness can support development.",
          },

          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.High],
            },
            message:
              "This topic may be personal. There is no obligation to engage with it at this time.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.High],
            },
            message:
              "Thank you for considering this question. Reflection on mental stability is meaningful.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.High],
            },
            message:
              "Your engagement with this topic is acknowledged. Understanding personal strengths is significant.",
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
        severity: Severity.Medium,
        likertScale: 5,
        responses: [
          // LOW SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Low],
            },
            message:
              "There is no requirement to discuss current stress levels at this time.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Low],
            },
            message:
              "Thank you for considering this question. Reflection on work or academic impact is meaningful.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Low],
            },
            message:
              "Your openness to recognize work or academic effects is noted. This awareness is valuable.",
          },

          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Medium],
            },
            message:
              "This topic may be sensitive. There is no requirement to engage with it now.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Medium],
            },
            message:
              "Thank you for considering this question. Reflection on work or academic impact is meaningful.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Medium],
            },
            message:
              "Your recognition of work or academic stress is noted. This awareness is significant.",
          },

          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.High],
            },
            message:
              "This topic may be personal. There is no obligation to engage with it at this time.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.High],
            },
            message:
              "Thank you for considering this question. Reflection on work or academic stress is meaningful.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.High],
            },
            message:
              "Your engagement with this topic is acknowledged. Understanding work or academic stress is significant.",
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
        severity: Severity.High,
        likertScale: 5,
        responses: [
          // LOW SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Low],
            },
            message:
              "There is no requirement to reflect on this topic at this time.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Low],
            },
            message:
              "Thank you for considering this question. Reflection on your path can be meaningful.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Low],
            },
            message:
              "Your openness to consider your professional direction is noted. This awareness is valuable.",
          },

          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Medium],
            },
            message:
              "This topic may be challenging. There is no requirement to engage with it now.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Medium],
            },
            message:
              "Thank you for considering this question. Reflection on uncertainty is meaningful.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Medium],
            },
            message:
              "Your reflection on these challenges is noted. This awareness can support clarity.",
          },

          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.High],
            },
            message:
              "This topic may be personal. There is no obligation to engage with it at this time.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.High],
            },
            message:
              "Thank you for considering this question. Reflection on professional challenges is meaningful.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.High],
            },
            message:
              "Your engagement with this topic is acknowledged. Understanding these challenges is significant.",
          },
        ],
      },
    ],
    completionMessage:
      "Thank you for sharing your thoughts and experiences. Your responses help us better understand how to support mental well-being.",
  },
];
