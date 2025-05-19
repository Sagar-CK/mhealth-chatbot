import { type Scenario, ResponseType } from "@/lib/manu/types";
import { Severity } from "@/lib/manu/types";

export const manuScenarios: Scenario[] = [
  {
    title: "Tastes and Interests",
  //   steps: [
  //     {
  //       type: ResponseType.Statement,
  //       text: "Let's talk about mental health and well-being. How would you like to proceed?",
  //       textAudio: "/audioFilesManu/welcome.mp3",
  //       options: [
  //         "I'm comfortable discussing my mental health",
  //       ]
  //     },
  //     {
  //       type: ResponseType.Question,
  //       question: "How often do you experience feelings of anxiety or sadness?",
  //       questionAudio: "",
  //       severity: Severity.Medium,
  //       likertScale: 5,
  //       responses: [
  //         {
  //           conditions: {
  //             willingness: [1, 2],
  //             severity: [Severity.Low],
  //           },
  //           message: "I understand this might be difficult to discuss. Would you like to talk about general stress management instead?"
  //         },
  //         {
  //           conditions: {
  //             willingness: [2, 3],
  //             severity: [Severity.Medium],
  //           },
  //           message: "Thank you for sharing. How do you typically cope with these feelings?"
  //         },
  //         {
  //           conditions: {
  //             willingness: [3, 4, 5],
  //             severity: [Severity.High],
  //           },
  //           message: "I appreciate your openness. Have you considered speaking with a mental health professional about this?"
  //         }
  //       ]
  //     },
  //     {
  //       type: ResponseType.Statement,
  //       textAudio: "What activities do you find most helpful for managing stress?",
  //       text: "",
  //       options: [
  //         "Exercise and physical activity",
  //       ]
  //     }
  //   ],
  //   completionMessage: "Thank you for sharing your thoughts and experiences. Your responses help us better understand how to support mental well-being."
  // }
  steps: [
  {
    type: ResponseType.Statement,
    text: "Let’s talk about personal interests and how they impact our well-being.",
    textAudio: "",
    options: ["Sure, I am comfortable discussing my interests"]
  },
  {
    type: ResponseType.Statement,
    text: "How do you like to spend your free time? What activities do you enjoy?",
    textAudio: "",
    options: ["I enjoy spending time with friends as well as alone time."]
  },
  {
    type: ResponseType.Question,
    question: "What types of social environments do you find most comforting or energizing?",
    questionAudio: "",
    severity: Severity.Low,
    likertScale: 5,
    responses: [
      {
            conditions: {
              willingness: [1, 2],
              severity: [Severity.Low],
            },
            message: "I understand this might be difficult to discuss but talking about it could help."
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Medium],
            },
            message: "Thank you for sharing something personal"
          },
          {
            conditions: {
              willingness: [3, 4, 5],
              severity: [Severity.High],
            },
            message: "I appreciate your openness despite such a sensitive question"
          }
        ]
  },
  {
    type: ResponseType.Statement,
    text: "Have you ever felt overwhelmed or disagreed with someone in a social setting?",
    textAudio: "",
    options: ["Yes, there have been times when I felt overwhelmed in social situations."]

  },
  {
    type: ResponseType.Question,
    question: "Have you ever felt emotionally triggered by people that you strongly disagreed with socially?",
    questionAudio: "",
    severity: Severity.High,
    likertScale: 5,
    responses: []
  },
  {
    type: ResponseType.Statement,
    text: "What about during your alone time? Do you have any hobbies or activities that you enjoy doing alone?",
    textAudio: "",
    options: ["I enjoy reading, watching movies, and spending time with friends."]
  },
  {
    type: ResponseType.Question,
    question: "Are there certain types of music, shows, or stories that you avoid because they affect your mood negatively?",
    questionAudio: "",
    severity: Severity.Medium,
    likertScale: 5,
    responses: []
  },
],
  completionMessage: "Thank you for sharing your thoughts and experiences. Your responses help us better understand how to support mental well-being."
  },
  {
    title: "Interpersonal Relations and Self-Concept",
    steps: [
      {
    type: ResponseType.Statement,
    text: "Let’s now take a moment to reflect on your relationships with others and yourself.",
    textAudio: "",
    options: ["Yes, I'm okay with that."]
  },
  {
    type: ResponseType.Statement,
    text: "Have you ever fallen out of touch or lost someone in the past?",
    textAudio: "",
    options: ["Yes, I have lost people in the past"]
  },
  {
    type: ResponseType.Question,
    question: "Do you ever feel a sense of loss or longing when you think about them?",
    questionAudio: "",
    severity: Severity.Low,
    likertScale: 5,
    responses: []
  },
  {
    type: ResponseType.Question,
    question: "Have past experiences in relationships ever left you feeling emotionally hurt or let down?",
    questionAudio: "",
    severity: Severity.High,
    likertScale: 5,
    responses: []
  },
  {
    type: ResponseType.Statement,
    text: "Those feelings can run deep. Sometimes looking back reminds us of who we are. Let’s look at the present now.",
    textAudio: "",
    options: ["Yes, I would like to talk about something more positive"]
  },
  {
    type: ResponseType.Question,
    question: "What is something you’ve done recently that made you feel genuinely proud or emotionally fulfilled?",
    questionAudio: "",
    severity: Severity.Medium,
    likertScale: 5,
    responses: []
  },

    ],
    completionMessage: "Thank you for sharing your thoughts and experiences. Your responses help us better understand how to support mental well-being."
  },

  {
    title: "Work or Studies",
    steps: [
      {
        type: ResponseType.Statement,
        text: "Let’s now take a small pivot and talk about another part of your life - Work and Studies",
        textAudio: "",
        options: ["Okay, I’m ready."]
      },
      {
        type: ResponseType.Statement,
        text: "What do you think is the most valuable piece of advice to someone studying or working?",
        textAudio: "",
        options: ["Staying mentally balanced and have a healthy work life balance."]
      },
      {
        type: ResponseType.Question,
        question: "What personal strengths do you draw on to stay mentally balanced in your career or studies?",
        questionAudio: "",
        severity: Severity.Low,
        likertScale: 5,
        responses: []
      },
      {
        type: ResponseType.Statement,
        text: "Knowing your strengths can buffer stress. But even strong people feel pressure from time to time.",
        textAudio: "",
        options: ["Thats true. Even I have moments where I feel the pressure"]
      },
      {
        type: ResponseType.Question,
        question: "Have you been feeling any stress or mental fatigue related to your work or academic life lately?",
        questionAudio: "",
        severity: Severity.Medium,
        likertScale: 5,
        responses: []
      },
      {
        type: ResponseType.Statement,
        text: "Have you always had clear goals in regards to your studies and work?",
        textAudio: "",
        options: ["No, I havent always known what I wanted to achieve in the future."]
      },
      {
        type: ResponseType.Question,
        question: "Have you ever felt completely overwhelmed or lost when it comes to your professional or academic path?",
        questionAudio: "",
        severity: Severity.High,
        likertScale: 5,
        responses: []
      }
    ],
    completionMessage: "Thank you for sharing your thoughts and experiences. Your responses help us better understand how to support mental well-being."

  }



];
