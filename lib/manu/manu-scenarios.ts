import { type Scenario, ResponseType } from "@/lib/manu/types";
import { Sensitivity } from "@/lib/manu/types";

export const manuScenarios: Scenario[] = [
  {
    title: "Tastes and Interests",
  steps: [
  {
    type: ResponseType.Statement,
    text: "Lets talk about personal interests and how they impact our well-being.",
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
          // LOW SEVERITY
          {
            conditions: {
              willingness: [1],
              sensitivity: [Sensitivity.Low],
            },
            message:
              "It is acceptable if you are not prepared to explore social settings at this time. We can proceed at your preferred pace.",
            audioUrl: "audioFilesManu/Scenario1/Scenario1-Step3-Response1.mp3",
          },
          {
            conditions: {
              willingness: [2, 3],
              sensitivity: [Sensitivity.Low],
            },
            message:
              "Thank you for considering the question. Reflection on social preferences can be beneficial.",
            audioUrl: "audioFilesManu/Scenario1/Scenario1-Step3-Response2.mp3",
          },
          {
            conditions: {
              willingness: [4, 5],
              sensitivity: [Sensitivity.Low],
            },
            message:
              "Your openness to reflect on social energizing factors is noted. Such insights can be valuable.",
            audioUrl: "audioFilesManu/Scenario1/Scenario1-Step3-Response3.mp3",
          },

          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              sensitivity: [Sensitivity.Medium],
            },
            message:
              "This topic may require vulnerability. There is no obligation to engage with it at this time.",
            audioUrl: "audioFilesManu/Scenario1/Scenario1-Step3-Response4.mp3",
          },
          {
            conditions: {
              willingness: [2, 3],
              sensitivity: [Sensitivity.Medium],
            },
            message:
              "Thank you for considering your social environment preferences. This reflection is meaningful.",
            audioUrl: "audioFilesManu/Scenario1/Scenario1-Step3-Response5.mp3",
          },
          {
            conditions: {
              willingness: [4, 5],
              sensitivity: [Sensitivity.Medium],
            },
            message:
              "Your willingness to reflect on social comfort is noted. This awareness is valuable.",
            audioUrl: "audioFilesManu/Scenario1/Scenario1-Step3-Response6.mp3",
          },

          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              sensitivity: [Sensitivity.High],
            },
            message:
              "This is a personal topic. There is no obligation to share information at this time.",
            audioUrl: "audioFilesManu/Scenario1/Scenario1-Step3-Response7.mp3",
          },
          {
            conditions: {
              willingness: [2, 3],
              sensitivity: [Sensitivity.High],
            },
            message:
              "Your consideration of this question is acknowledged. Reflection on social safety can be significant.",
            audioUrl: "audioFilesManu/Scenario1/Scenario1-Step3-Response8.mp3",
          },
          {
            conditions: {
              willingness: [4, 5],
              sensitivity: [Sensitivity.High],
            },
            message:
              "Thank you for engaging with this personal reflection. Understanding social safety factors can be beneficial.",
            audioUrl: "audioFilesManu/Scenario1/Scenario1-Step3-Response9.mp3",
          },
        ],

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
          // LOW SEVERITY
          {
            conditions: {
              willingness: [1],
              sensitivity: [Sensitivity.Low],
            },
            message:
              "If this topic causes discomfort, that is understandable. We can proceed at your preferred pace.",
            audioUrl: "audioFilesManu/Scenario1/Scenario1-Step5-Response1.mp3",
          },
          {
            conditions: {
              willingness: [2, 3],
              sensitivity: [Sensitivity.Low],
            },
            message:
              "Thank you for considering this question. Social disagreements can have various impacts.",
            audioUrl: "audioFilesManu/Scenario1/Scenario1-Step5-Response2.mp3",
          },
          {
            conditions: {
              willingness: [4, 5],
              sensitivity: [Sensitivity.Low],
            },
            message:
              "Your openness is acknowledged. Social tensions can have emotional implications.",
            audioUrl: "audioFilesManu/Scenario1/Scenario1-Step5-Response3.mp3",
          },

          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              sensitivity: [Sensitivity.Medium],
            },
            message:
              "This topic may be challenging. There is no requirement to engage with it at this time.",
            audioUrl: "audioFilesManu/Scenario1/Scenario1-Step5-Response4.mp3",
          },
          {
            conditions: {
              willingness: [2, 3],
              sensitivity: [Sensitivity.Medium],
            },
            message:
              "Thank you for considering this question. Emotional responses to disagreement are common.",
            audioUrl: "audioFilesManu/Scenario1/Scenario1-Step5-Response5.mp3",
          },
          {
            conditions: {
              willingness: [4, 5],
              sensitivity: [Sensitivity.Medium],
            },
            message:
              "Your reflection on emotionally triggering social conflict demonstrates self-awareness.",
            audioUrl: "audioFilesManu/Scenario1/Scenario1-Step5-Response6.mp3",
          },

          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              sensitivity: [Sensitivity.High],
            },
            message:
              "This question may evoke significant emotions. There is no obligation to engage with it now.",
            audioUrl: "audioFilesManu/Scenario1/Scenario1-Step5-Response7.mp3",
          },
          {
            conditions: {
              willingness: [2, 3],
              sensitivity: [Sensitivity.High],
            },
            message:
              "Your consideration of this question is acknowledged. Reflection on emotional triggers is meaningful.",
            audioUrl: "audioFilesManu/Scenario1/Scenario1-Step5-Response8.mp3",
          },
          {
            conditions: {
              willingness: [4, 5],
              sensitivity: [Sensitivity.High],
            },
            message:
              "Thank you for engaging with this topic. Reflection on emotional triggers can be significant.",
            audioUrl: "audioFilesManu/Scenario1/Scenario1-Step5-Response9.mp3",
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
          // LOW SEVERITY
          {
            conditions: {
              willingness: [1],
              sensitivity: [Sensitivity.Low],
            },
            message:
              "There is no requirement to reflect on this topic at this time.",
            audioUrl: "audioFilesManu/Scenario1/Scenario1-Step7-Response1.mp3",
          },
          {
            conditions: {
              willingness: [2, 3],
              sensitivity: [Sensitivity.Low],
            },
            message:
              "Thank you for considering this question. Media content can have various emotional impacts.",
            audioUrl: "audioFilesManu/Scenario1/Scenario1-Step7-Response2.mp3",
          },
          {
            conditions: {
              willingness: [4, 5],
              sensitivity: [Sensitivity.Low],
            },
            message:
              "Your openness to consider medias emotional impact is noted. This awareness is valuable.",
            audioUrl: "audioFilesManu/Scenario1/Scenario1-Step7-Response3.mp3",
          },

          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              sensitivity: [Sensitivity.Medium],
            },
            message:
              "This topic may evoke various emotions. There is no requirement to engage with it now.",
            audioUrl: "audioFilesManu/Scenario1/Scenario1-Step7-Response4.mp3",
          },
          {
            conditions: {
              willingness: [2, 3],
              sensitivity: [Sensitivity.Medium],
            },
            message:
              "Thank you for considering how content affects your emotional state. This reflection is meaningful.",
            audioUrl: "audioFilesManu/Scenario1/Scenario1-Step7-Response5.mp3",
          },
          {
            conditions: {
              willingness: [4, 5],
              sensitivity: [Sensitivity.Medium],
            },
            message:
              "Your engagement with this question is noted. Awareness of emotional triggers in media is significant.",
            audioUrl: "audioFilesManu/Scenario1/Scenario1-Step7-Response6.mp3",
          },

          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              sensitivity: [Sensitivity.High],
            },
            message:
              "This topic may evoke personal memories. There is no obligation to engage with it at this time.",
            audioUrl: "audioFilesManu/Scenario1/Scenario1-Step7-Response7.mp3",
          },
          {
            conditions: {
              willingness: [2, 3],
              sensitivity: [Sensitivity.High],
            },
            message:
              "Thank you for considering this question. Content avoidance can be a form of emotional protection.",
            audioUrl: "audioFilesManu/Scenario1/Scenario1-Step7-Response8.mp3",
          },
          {
            conditions: {
              willingness: [4, 5],
              sensitivity: [Sensitivity.High],
            },
            message:
              "Your reflection on medias emotional impact demonstrates insight. Thank you for your engagement.",
            audioUrl: "audioFilesManu/Scenario1/Scenario1-Step7-Response9.mp3",
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
    text: "Lets now take a moment to reflect on your relationships with others and yourself.",
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
          // LOW SEVERITY
          {
            conditions: {
              willingness: [1],
              sensitivity: [Sensitivity.Low],
            },
            message:
              "There is no requirement to explore feelings of loss at this time.",
            audioUrl: "audioFilesManu/Scenario2/Scenario2-Step3-Response1.mp3",
          },
          {
            conditions: {
              willingness: [2, 3],
              sensitivity: [Sensitivity.Low],
            },
            message:
              "Thank you for considering these emotions. Such reflections can be meaningful.",
            audioUrl: "audioFilesManu/Scenario2/Scenario2-Step3-Response2.mp3",
          },
          {
            conditions: {
              willingness: [4, 5],
              sensitivity: [Sensitivity.Low],
            },
            message:
              "Your openness to reflect on feelings of longing is noted. This awareness is valuable.",
            audioUrl: "audioFilesManu/Scenario2/Scenario2-Step3-Response3.mp3",
          },

          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              sensitivity: [Sensitivity.Medium],
            },
            message:
              "Reflection on loss can be challenging. There is no requirement to engage with it now.",
            audioUrl: "audioFilesManu/Scenario2/Scenario2-Step3-Response4.mp3",
          },
          {
            conditions: {
              willingness: [2, 3],
              sensitivity: [Sensitivity.Medium],
            },
            message:
              "Thank you for considering this complex topic. Your engagement is meaningful.",
            audioUrl: "audioFilesManu/Scenario2/Scenario2-Step3-Response5.mp3",
          },
          {
            conditions: {
              willingness: [4, 5],
              sensitivity: [Sensitivity.Medium],
            },
            message:
              "Your reflection on feelings of loss demonstrates emotional awareness. This is significant.",
            audioUrl: "audioFilesManu/Scenario2/Scenario2-Step3-Response6.mp3",
          },

          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              sensitivity: [Sensitivity.High],
            },
            message:
              "This is a personal topic. There is no obligation to engage with it at this time.",
            audioUrl: "audioFilesManu/Scenario2/Scenario2-Step3-Response7.mp3",
          },
          {
            conditions: {
              willingness: [2, 3],
              sensitivity: [Sensitivity.High],
            },
            message:
              "Thank you for considering this question. Reflection on loss requires emotional awareness.",
            audioUrl: "audioFilesManu/Scenario2/Scenario2-Step3-Response8.mp3",
          },
          {
            conditions: {
              willingness: [4, 5],
              sensitivity: [Sensitivity.High],
            },
            message:
              "Your engagement with this personal topic is acknowledged. Such reflection can be meaningful.",
            audioUrl: "audioFilesManu/Scenario2/Scenario2-Step3-Response9.mp3",
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
          // LOW SEVERITY
          {
            conditions: {
              willingness: [1],
              sensitivity: [Sensitivity.Low],
            },
            message:
              "There is no requirement to reflect on relationship experiences at this time.",
            audioUrl: "audioFilesManu/Scenario2/Scenario2-Step4-Response1.mp3",
          },
          {
            conditions: {
              willingness: [2, 3],
              sensitivity: [Sensitivity.Low],
            },
            message:
              "Thank you for considering this question. Reflection on past relationships can be meaningful.",
            audioUrl: "audioFilesManu/Scenario2/Scenario2-Step4-Response2.mp3",
          },
          {
            conditions: {
              willingness: [4, 5],
              sensitivity: [Sensitivity.Low],
            },
            message:
              "Your openness to explore past experiences is noted. This awareness can support growth.",
            audioUrl: "audioFilesManu/Scenario2/Scenario2-Step4-Response3.mp3",
          },

          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              sensitivity: [Sensitivity.Medium],
            },
            message:
              "This topic may be sensitive. There is no requirement to engage with it now.",
            audioUrl: "audioFilesManu/Scenario2/Scenario2-Step4-Response4.mp3",
          },
          {
            conditions: {
              willingness: [2, 3],
              sensitivity: [Sensitivity.Medium],
            },
            message:
              "Thank you for considering this question. Reflection on emotional experiences is meaningful.",
            audioUrl: "audioFilesManu/Scenario2/Scenario2-Step4-Response5.mp3",
          },
          {
            conditions: {
              willingness: [4, 5],
              sensitivity: [Sensitivity.Medium],
            },
            message:
              "Your reflection on difficult experiences demonstrates resilience. This is significant.",
            audioUrl: "audioFilesManu/Scenario2/Scenario2-Step4-Response6.mp3",
          },

          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              sensitivity: [Sensitivity.High],
            },
            message:
              "This question may evoke strong emotions. There is no obligation to engage with it now.",
            audioUrl: "audioFilesManu/Scenario2/Scenario2-Step4-Response7.mp3",
          },
          {
            conditions: {
              willingness: [2, 3],
              sensitivity: [Sensitivity.High],
            },
            message:
              "Thank you for considering this question. Reflection on emotional hurt requires courage.",
            audioUrl: "audioFilesManu/Scenario2/Scenario2-Step4-Response8.mp3",
          },
          {
            conditions: {
              willingness: [4, 5],
              sensitivity: [Sensitivity.High],
            },
            message:
              "Your engagement with this topic is acknowledged. Reflection on past emotional experiences can be significant.",
            audioUrl: "audioFilesManu/Scenario2/Scenario2-Step4-Response9.mp3",
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
          // LOW SEVERITY
          {
            conditions: {
              willingness: [1],
              sensitivity: [Sensitivity.Low],
            },
            message:
              "There is no requirement to reflect on this topic at this time.",
            audioUrl: "audioFilesManu/Scenario2/Scenario2-Step6-Response1.mp3",
          },
          {
            conditions: {
              willingness: [2, 3],
              sensitivity: [Sensitivity.Low],
            },
            message:
              "Thank you for considering this question. Even small achievements can be meaningful.",
            audioUrl: "audioFilesManu/Scenario2/Scenario2-Step6-Response2.mp3",
          },
          {
            conditions: {
              willingness: [4, 5],
              sensitivity: [Sensitivity.Low],
            },
            message:
              "Your openness to reflect on achievements is noted. This awareness is valuable.",
            audioUrl: "audioFilesManu/Scenario2/Scenario2-Step6-Response3.mp3",
          },

          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              sensitivity: [Sensitivity.Medium],
            },
            message:
              "Reflection on achievements can be challenging. There is no requirement to engage with it now.",
            audioUrl: "audioFilesManu/Scenario2/Scenario2-Step6-Response4.mp3",
          },
          {
            conditions: {
              willingness: [2, 3],
              sensitivity: [Sensitivity.Medium],
            },
            message:
              "Thank you for considering this question. Moments of fulfillment deserve attention.",
            audioUrl: "audioFilesManu/Scenario2/Scenario2-Step6-Response5.mp3",
          },
          {
            conditions: {
              willingness: [4, 5],
              sensitivity: [Sensitivity.Medium],
            },
            message:
              "Your reflection on meaningful experiences is noted. This awareness is significant.",
            audioUrl: "audioFilesManu/Scenario2/Scenario2-Step6-Response6.mp3",
          },

          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              sensitivity: [Sensitivity.High],
            },
            message:
              "This question may be challenging. There is no obligation to engage with it at this time.",
            audioUrl: "audioFilesManu/Scenario2/Scenario2-Step6-Response7.mp3",
          },
          {
            conditions: {
              willingness: [2, 3],
              sensitivity: [Sensitivity.High],
            },
            message:
              "Thank you for considering this question. Reflection on fulfillment can be meaningful.",
            audioUrl: "audioFilesManu/Scenario2/Scenario2-Step6-Response8.mp3",
          },
          {
            conditions: {
              willingness: [4, 5],
              sensitivity: [Sensitivity.High],
            },
            message:
              "Your engagement with this topic is acknowledged. Understanding sources of fulfillment is significant.",
            audioUrl: "audioFilesManu/Scenario2/Scenario2-Step6-Response9.mp3",
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
        text: "Let’s now take a small pivot and talk about another part of your life - Work and Studies",
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
              willingness: [1],
              sensitivity: [Sensitivity.Low],
            },
            message:
              "There is no requirement to reflect on your strengths at this time.",
            audioUrl: "audioFilesManu/Scenario3/Scenario3-Step3-Response1.mp3",
          },
          {
            conditions: {
              willingness: [2, 3],
              sensitivity: [Sensitivity.Low],
            },
            message:
              "Thank you for considering this question. Reflection on personal resources can be meaningful.",
            audioUrl: "audioFilesManu/Scenario3/Scenario3-Step3-Response2.mp3",
          },
          {
            conditions: {
              willingness: [4, 5],
              sensitivity: [Sensitivity.Low],
            },
            message:
              "Your openness to recognize personal strengths is noted. This awareness is valuable.",
            audioUrl: "audioFilesManu/Scenario3/Scenario3-Step3-Response3.mp3",
          },

          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              sensitivity: [Sensitivity.Medium],
            },
            message:
              "This reflection may require vulnerability. There is no requirement to engage with it now.",
            audioUrl: "audioFilesManu/Scenario3/Scenario3-Step3-Response4.mp3",
          },
          {
            conditions: {
              willingness: [2, 3],
              sensitivity: [Sensitivity.Medium],
            },
            message:
              "Thank you for considering this question. Identifying personal resources is meaningful.",
            audioUrl: "audioFilesManu/Scenario3/Scenario3-Step3-Response5.mp3",
          },
          {
            conditions: {
              willingness: [4, 5],
              sensitivity: [Sensitivity.Medium],
            },
            message:
              "Your reflection on inner resources is noted. This awareness can support development.",
            audioUrl: "audioFilesManu/Scenario3/Scenario3-Step3-Response6.mp3",
          },

          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              sensitivity: [Sensitivity.High],
            },
            message:
              "This topic may be personal. There is no obligation to engage with it at this time.",
            audioUrl: "audioFilesManu/Scenario3/Scenario3-Step3-Response7.mp3",
          },
          {
            conditions: {
              willingness: [2, 3],
              sensitivity: [Sensitivity.High],
            },
            message:
              "Thank you for considering this question. Reflection on mental stability is meaningful.",
            audioUrl: "audioFilesManu/Scenario3/Scenario3-Step3-Response8.mp3",
          },
          {
            conditions: {
              willingness: [4, 5],
              sensitivity: [Sensitivity.High],
            },
            message:
              "Your engagement with this topic is acknowledged. Understanding personal strengths is significant.",
            audioUrl: "audioFilesManu/Scenario3/Scenario3-Step3-Response9.mp3",
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
          // LOW SEVERITY
          {
            conditions: {
              willingness: [1],
              sensitivity: [Sensitivity.Low],
            },
            message:
              "There is no requirement to discuss current stress levels at this time.",
            audioUrl: "audioFilesManu/Scenario3/Scenario3-Step5-Response1.mp3",
          },
          {
            conditions: {
              willingness: [2, 3],
              sensitivity: [Sensitivity.Low],
            },
            message:
              "Thank you for considering this question. Reflection on work or academic impact is meaningful.",
            audioUrl: "audioFilesManu/Scenario3/Scenario3-Step5-Response2.mp3",
          },
          {
            conditions: {
              willingness: [4, 5],
              sensitivity: [Sensitivity.Low],
            },
            message:
              "Your openness to recognize work or academic effects is noted. This awareness is valuable.",
            audioUrl: "audioFilesManu/Scenario3/Scenario3-Step5-Response3.mp3",
          },

          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              sensitivity: [Sensitivity.Medium],
            },
            message:
              "This topic may be sensitive. There is no requirement to engage with it now.",
            audioUrl: "audioFilesManu/Scenario3/Scenario3-Step5-Response4.mp3",
          },
          {
            conditions: {
              willingness: [2, 3],
              sensitivity: [Sensitivity.Medium],
            },
            message:
              "Thank you for considering this question. Reflection on work or academic impact is meaningful.",
            audioUrl: "audioFilesManu/Scenario3/Scenario3-Step5-Response5.mp3",
          },
          {
            conditions: {
              willingness: [4, 5],
              sensitivity: [Sensitivity.Medium],
            },
            message:
              "Your recognition of work or academic stress is noted. This awareness is significant.",
            audioUrl: "audioFilesManu/Scenario3/Scenario3-Step5-Response6.mp3",
          },

          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              sensitivity: [Sensitivity.High],
            },
            message:
              "This topic may be personal. There is no obligation to engage with it at this time.",
            audioUrl: "audioFilesManu/Scenario3/Scenario3-Step5-Response7.mp3",
          },
          {
            conditions: {
              willingness: [2, 3],
              sensitivity: [Sensitivity.High],
            },
            message:
              "Thank you for considering this question. Reflection on work or academic stress is meaningful.",
            audioUrl: "audioFilesManu/Scenario3/Scenario3-Step5-Response8.mp3",
          },
          {
            conditions: {
              willingness: [4, 5],
              sensitivity: [Sensitivity.High],
            },
            message:
              "Your engagement with this topic is acknowledged. Understanding work or academic stress is significant.",
            audioUrl: "audioFilesManu/Scenario3/Scenario3-Step5-Response9.mp3",
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
          // LOW SEVERITY
          {
            conditions: {
              willingness: [1],
              sensitivity: [Sensitivity.Low],
            },
            message:
              "There is no requirement to reflect on this topic at this time.",
            audioUrl: "audioFilesManu/Scenario3/Scenario3-Step7-Response1.mp3",
          },
          {
            conditions: {
              willingness: [2, 3],
              sensitivity: [Sensitivity.Low],
            },
            message:
              "Thank you for considering this question. Reflection on your path can be meaningful.",
            audioUrl: "audioFilesManu/Scenario3/Scenario3-Step7-Response2.mp3",
          },
          {
            conditions: {
              willingness: [4, 5],
              sensitivity: [Sensitivity.Low],
            },
            message:
              "Your openness to consider your professional direction is noted. This awareness is valuable.",
            audioUrl: "audioFilesManu/Scenario3/Scenario3-Step7-Response3.mp3",
          },

          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              sensitivity: [Sensitivity.Medium],
            },
            message:
              "This topic may be challenging. There is no requirement to engage with it now.",
            audioUrl: "audioFilesManu/Scenario3/Scenario3-Step7-Response4.mp3",
          },
          {
            conditions: {
              willingness: [2, 3],
              sensitivity: [Sensitivity.Medium],
            },
            message:
              "Thank you for considering this question. Reflection on uncertainty is meaningful.",
            audioUrl: "audioFilesManu/Scenario3/Scenario3-Step7-Response5.mp3",
          },
          {
            conditions: {
              willingness: [4, 5],
              sensitivity: [Sensitivity.Medium],
            },
            message:
              "Your reflection on these challenges is noted. This awareness can support clarity.",
            audioUrl: "audioFilesManu/Scenario3/Scenario3-Step7-Response6.mp3",
          },

          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              sensitivity: [Sensitivity.High],
            },
            message:
              "This topic may be personal. There is no obligation to engage with it at this time.",
            audioUrl: "audioFilesManu/Scenario3/Scenario3-Step7-Response7.mp3",
          },
          {
            conditions: {
              willingness: [2, 3],
              sensitivity: [Sensitivity.High],
            },
            message:
              "Thank you for considering this question. Reflection on professional challenges is meaningful.",
            audioUrl: "audioFilesManu/Scenario3/Scenario3-Step7-Response8.mp3",
          },
          {
            conditions: {
              willingness: [4, 5],
              sensitivity: [Sensitivity.High],
            },
            message:
              "Your engagement with this topic is acknowledged. Understanding these challenges is significant.",
            audioUrl: "audioFilesManu/Scenario3/Scenario3-Step7-Response9.mp3",
          },
        ],
      }
    ],
    completionMessage: "Thank you for sharing your thoughts and experiences. Your responses help us better understand how to support mental well-being.",
    completionAudio: "audioFilesManu/ScenarioCompletion.mp3"
  }
];
