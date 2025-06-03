import { type Scenario, ResponseType } from "@/lib/manu/types";
import { Sensitivity } from "@/lib/manu/types";

export const manuScenarios: Scenario[] = [
  {
    title: "Tastes and Interests",
  steps: [
  {
    type: ResponseType.Statement,
    text: "In this scenario, lets talk about personal interests and how they impact our well-being.",
    textAudio: "audioFilesManu/Scenario1/Scenario1-Step1.mp3",
    option: "Sure, I am comfortable discussing my interests"
  },
  {
    type: ResponseType.Statement,
    text: "How do you like to spend your free time? What activities do you enjoy?",
    textAudio: "audioFilesManu/Scenario1/Scenario1-Step2.mp3",
    option: "I enjoy spending time with friends as well as alone time."
  },
  {
    type: ResponseType.Question,
    question: "What types of social environments do you find most comforting or energizing?",
    questionAudio: "audioFilesManu/Scenario1/Scenario1-Step3.mp3",
    sensitivity: Sensitivity.Low,
    likertScale: 5,
    responses: [
          {
            conditions: {
              willingness: [1,2,3,4,5],
              sensitivity: [Sensitivity.Low, Sensitivity.Medium, Sensitivity.High],
            },
            message:
              "Thank you for considering the question. Reflection on social preferences can be beneficial.",
            audioUrl: "audioFilesManu/Scenario1/Scenario1-Step3-Response.mp3",
          },
    ]
  },
  {
    type: ResponseType.Statement,
    text: "Have you ever felt overwhelmed or disagreed with someone in a social setting?",
    textAudio: "audioFilesManu/Scenario1/Scenario1-Step4.mp3",
    option: "Yes, there have been times when I felt overwhelmed in social situations."

  },
  {
    type: ResponseType.Question,
    question: "Have you ever felt emotionally triggered by people that you strongly disagreed with socially?",
    questionAudio: "audioFilesManu/Scenario1/Scenario1-Step5.mp3",
    sensitivity: Sensitivity.High,
    likertScale: 5,
    responses: [
          {
            conditions: {
              willingness: [1,2,3,4,5],
              sensitivity: [Sensitivity.Low, Sensitivity.Medium, Sensitivity.High],
            },
            message:
              "Thank you for considering this question. Emotional responses to disagreement are common.",
            audioUrl: "audioFilesManu/Scenario1/Scenario1-Step5-Response.mp3",
          },
        ],
  },
  {
    type: ResponseType.Statement,
    text: "What about during your alone time? Do you have any hobbies or activities that you enjoy doing alone?",
    textAudio: "audioFilesManu/Scenario1/Scenario1-Step6.mp3",
    option: "I enjoy reading, watching movies, and spending time with friends."
  },
  {
    type: ResponseType.Question,
    question: "Are there certain types of music, shows, or stories that you avoid because they affect your mood negatively?",
    questionAudio: "audioFilesManu/Scenario1/Scenario1-Step7.mp3",
    sensitivity: Sensitivity.Medium,
    likertScale: 5,
    responses: [
          {
            conditions: {
              willingness: [1,2,3,4,5],
              sensitivity: [Sensitivity.Low, Sensitivity.Medium, Sensitivity.High],
            },
            message:
              "Thank you for considering how content affects your emotional state. This reflection is meaningful.",
            audioUrl: "audioFilesManu/Scenario1/Scenario1-Step7-Response.mp3",
          },
        ],
  },
],
  completionMessage: "Thank you for sharing your thoughts and experiences. Your responses help us better understand how to support mental well-being.",
  completionAudio: "audioFilesManu/ScenarioCompletion.mp3"
  },
  {
    title: "Interpersonal Relations and Self-Concept",
    steps: [
      {
    type: ResponseType.Statement,
    text: "In this scenario, lets take a moment to reflect on your relationships with others and yourself.",
    textAudio: "audioFilesManu/Scenario2/Scenario2-Step1.mp3",
    option: "Yes, Im okay with that."
  },
  {
    type: ResponseType.Statement,
    text: "Have you ever fallen out of touch or lost someone in the past?",
    textAudio: "audioFilesManu/Scenario2/Scenario2-Step2.mp3",
    option: "Yes, I have lost people in the past"
  },
  {
    type: ResponseType.Question,
    question: "Do you ever feel a sense of loss or longing when you think about them?",
    questionAudio: "audioFilesManu/Scenario2/Scenario2-Step3.mp3",
    sensitivity: Sensitivity.Low,
    likertScale: 5,
    responses: [
          {
            conditions: {
              willingness: [1,2, 3,4,5],
              sensitivity: [Sensitivity.Low],
            },
            message:
              "Thank you for considering these emotions. Such reflections can be meaningful.",
            audioUrl: "audioFilesManu/Scenario2/Scenario2-Step3-Response.mp3",
          },
        ],
  },
  {
    type: ResponseType.Question,
    question: "Have past experiences in relationships ever left you feeling emotionally hurt or let down?",
    questionAudio: "audioFilesManu/Scenario2/Scenario2-Step4.mp3",
    sensitivity: Sensitivity.High,
    likertScale: 5,
    responses: [
          {
            conditions: {
              willingness: [1,2,3,4,5],
              sensitivity: [Sensitivity.Low, Sensitivity.Medium, Sensitivity.High],
            },
            message:
              "Thank you for considering this question. Reflection on emotional hurt requires courage.",
            audioUrl: "audioFilesManu/Scenario2/Scenario2-Step4-Response.mp3",
          },
        ],
  },
  {
    type: ResponseType.Statement,
    text: "Those feelings can run deep. Sometimes looking back reminds us of who we are. Let’s look at the present now.",
    textAudio: "audioFilesManu/Scenario2/Scenario2-Step5.mp3",
    option: "Yes, I would like to talk about something more positive."
  },
  {
    type: ResponseType.Question,
    question: "What is something you’ve done recently that made you feel genuinely proud or emotionally fulfilled?",
    questionAudio: "audioFilesManu/Scenario2/Scenario2-Step6.mp3",
    sensitivity: Sensitivity.Medium,
    likertScale: 5,
    responses: [
          {
            conditions: {
              willingness: [1,2,3,4,5],
              sensitivity: [Sensitivity.Low, Sensitivity.Medium, Sensitivity.High],
            },
            message:
              "Your engagement with this topic is acknowledged. Understanding sources of fulfillment is significant.",
            audioUrl: "audioFilesManu/Scenario2/Scenario2-Step6-Response.mp3",
          },
        ],
  },

    ],
    completionMessage: "Thank you for sharing your thoughts and experiences. Your responses help us better understand how to support mental well-being.",
    completionAudio: "audioFilesManu/ScenarioCompletion.mp3"
  },

  {
    title: "Work or Studies",
    steps: [
      {
        type: ResponseType.Statement,
        text: "In this scenario, lets talk about an important part of your life - Work and Studies",
        textAudio: "audioFilesManu/Scenario3/Scenario3-Step1.mp3",
        option: "Okay, I’m ready."
      },
      {
        type: ResponseType.Statement,
        text: "What do you think is the most valuable piece of advice to someone studying or working?",
        textAudio: "audioFilesManu/Scenario3/Scenario3-Step2.mp3",
        option: "Staying mentally balanced and have a healthy work life balance."
      },
      {
        type: ResponseType.Question,
        question: "What personal strengths do you draw on to stay mentally balanced in your career or studies?",
        questionAudio: "audioFilesManu/Scenario3/Scenario3-Step3.mp3",
        sensitivity: Sensitivity.Low,
        likertScale: 5,
        responses: [
          // LOW SEVERITY
          {
            conditions: {
              willingness: [1,2,3,4,5],
              sensitivity: [Sensitivity.Low, Sensitivity.Medium, Sensitivity.High],
            },
            message:
              "Thank you for considering this question. Reflection on personal resources can be meaningful.",
            audioUrl: "audioFilesManu/Scenario3/Scenario3-Step3-Response.mp3",
          },
        ],
      },
      {
        type: ResponseType.Statement,
        text: "Knowing your strengths can buffer stress. But even strong people feel pressure from time to time.",
        textAudio: "audioFilesManu/Scenario3/Scenario3-Step4.mp3",
        option: "Thats true. Even I have moments where I feel the pressure."
      },
      {
        type: ResponseType.Question,
        question: "Have you been feeling any stress or mental fatigue related to your work or academic life lately?",
        questionAudio: "audioFilesManu/Scenario3/Scenario3-Step5.mp3",
        sensitivity: Sensitivity.Medium,
        likertScale: 5,
        responses: [
          {
            conditions: {
              willingness: [1,2,3,4, 5],
              sensitivity: [Sensitivity.Low, Sensitivity.Medium, Sensitivity.High],
            },
            message:
              "Your engagement with this topic is acknowledged. Understanding work or academic stress is significant.",
            audioUrl: "audioFilesManu/Scenario3/Scenario3-Step5-Response.mp3",
          },
        ],
      },
      {
        type: ResponseType.Statement,
        text: "Have you always had clear goals in regards to your studies and work?",
        textAudio: "audioFilesManu/Scenario3/Scenario3-Step6.mp3",
        option: "No, I havent always known what I wanted to achieve in the future."
      },
      {
        type: ResponseType.Question,
        question: "Have you ever felt completely overwhelmed or lost when it comes to your professional or academic path?",
        questionAudio: "audioFilesManu/Scenario3/Scenario3-Step7.mp3",
        sensitivity: Sensitivity.High,
        likertScale: 5,
         responses: [
          {
            conditions: {
              willingness: [1,2,3,4,5],
              sensitivity: [Sensitivity.Low, Sensitivity.Medium, Sensitivity.High],
            },
            message:
              "Thank you for considering this question. Reflection on your path can be meaningful.",
            audioUrl: "audioFilesManu/Scenario3/Scenario3-Step7-Response.mp3",
          },
        ],
      }
    ],
    completionMessage: "Thank you for sharing your thoughts and experiences. Your responses help us better understand how to support mental well-being.",
    completionAudio: "audioFilesManu/ScenarioCompletion.mp3"
  }
];
