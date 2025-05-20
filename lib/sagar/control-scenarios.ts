import { type Scenario, ResponseType } from "@/lib/sagar/types";
import { Severity } from "@/lib/sagar/types";

export const controlScenarios: Scenario[] = [
  {
    title: "Tastes and Interests",
    steps: [
      {
        type: ResponseType.Statement,
        text: "Let’s talk about personal interests and how they impact our well-being.",
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
              "It’s completely okay if you’re not ready to explore what social settings feel comforting. We can take things slow.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Low],
            },
            message:
              "Thanks for considering the question. Even a little reflection on your social preferences can be helpful.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Low],
            },
            message:
              "Great to see you're open to reflecting on what energizes you socially. That kind of insight can be really empowering.",
          },

          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Medium],
            },
            message:
              "This can be a bit of a vulnerable topic, and it's okay if you're not ready to dive into it. No pressure at all.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Medium],
            },
            message:
              "Thank you for taking a moment to consider your social environment preferences—it’s not always easy to do.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Medium],
            },
            message:
              "Your openness to think about where you feel most at ease socially really matters. That awareness is valuable.",
          },

          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.High],
            },
            message:
              "This is a deeply personal topic, and it's completely understandable if you don’t feel ready to share anything about it right now.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.High],
            },
            message:
              "I recognize this question touches on something sensitive. Your willingness to reflect on it, even quietly, means a lot.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.High],
            },
            message:
              "Thank you for being open to such a personal reflection. Understanding what makes us feel socially safe can be a powerful step.",
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
              "If this feels a little uncomfortable, that’s totally understandable. We can always move at your pace.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Low],
            },
            message:
              "Thanks for taking a moment to consider a sensitive question. Disagreements can bring up more than we expect.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Low],
            },
            message:
              "Appreciate your openness — even low-stakes social tensions can have an emotional impact, and it's worth acknowledging that.",
          },

          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Medium],
            },
            message:
              "This can be a tough one. If thinking about emotionally charged disagreements is difficult right now, that’s okay.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Medium],
            },
            message:
              "Thanks for considering a question that many find difficult. Emotional triggers from disagreement are more common than we often admit.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Medium],
            },
            message:
              "Your willingness to reflect on emotionally triggering social conflict is important — it shows strong self-awareness.",
          },

          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.High],
            },
            message:
              "This kind of question can bring up heavy feelings, and it’s completely valid if you’re not ready to engage with it right now.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.High],
            },
            message:
              "It takes courage to even approach questions like this. Thank you for giving it your attention, even quietly.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.High],
            },
            message:
              "I appreciate your openness in reflecting on a topic that can be deeply triggering for many. That kind of insight takes strength.",
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
              "If you’re not feeling up to thinking about this right now, that’s absolutely fine.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Low],
            },
            message:
              "Thanks for reflecting on the question — even small emotional cues in music or media can make a real impact.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Low],
            },
            message:
              "It’s great that you're open to thinking about how media affects your mood. That awareness is valuable for emotional wellbeing.",
          },

          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Medium],
            },
            message:
              "This kind of question can stir up more than expected. No need to go there if it doesn’t feel right at the moment.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Medium],
            },
            message:
              "Appreciate you taking the time to consider how certain content can affect your emotional space. It’s more common than people think.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Medium],
            },
            message:
              "Thank you for engaging with a nuanced question. Being aware of emotional triggers in stories or music shows strong self-care.",
          },

          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.High],
            },
            message:
              "This may bring up some personal or even painful memories — it’s completely okay if you’d rather not go there right now.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.High],
            },
            message:
              "Thank you for gently engaging with this. Avoiding certain content can be an important form of emotional protection.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.High],
            },
            message:
              "Your willingness to reflect on how media affects your emotional state shows deep insight and resilience. That’s powerful.",
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
        text: "Let’s now take a moment to reflect on your relationships with others and yourself.",
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
              "It’s okay if you’re not ready to explore feelings like loss or longing. There’s no need to push yourself.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Low],
            },
            message:
              "These kinds of feelings can be subtle but still meaningful. Thank you for considering them.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Low],
            },
            message:
              "Even when the emotions aren’t intense, reflecting on any sense of longing can reveal a lot. I appreciate your openness.",
          },

          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Medium],
            },
            message:
              "Thinking about loss or longing can be difficult. It’s okay to hold space for those feelings without needing to express them.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Medium],
            },
            message:
              "It means a lot that you’re willing to engage with something this emotionally complex. Thank you for going there, even a little.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Medium],
            },
            message:
              "Your openness to reflect on feelings of loss or longing is powerful. That kind of honesty can support healing.",
          },

          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.High],
            },
            message:
              "This is a very personal and painful area to touch on. It’s completely valid if you don’t feel ready to go there.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.High],
            },
            message:
              "Thank you for allowing yourself to even think about this. Just acknowledging the question takes courage.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.High],
            },
            message:
              "I really appreciate your willingness to engage with such a deeply emotional question. That reflection can carry a lot of meaning.",
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
              "It's completely okay if you're not ready to reflect on relationship experiences right now.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Low],
            },
            message:
              "Thanks for considering the question. Even gentle reflection on past relationships can be meaningful.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Low],
            },
            message:
              "It's great that you're open to exploring your past experiences. That kind of self-awareness can really support emotional growth.",
          },

          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Medium],
            },
            message:
              "This is a tender topic for many people—it's absolutely okay to take your time with it.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Medium],
            },
            message:
              "Thank you for being willing to think about this. It can be hard to revisit emotional hurt, even quietly.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Medium],
            },
            message:
              "Your openness to reflect on emotionally difficult experiences says a lot about your resilience.",
          },

          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.High],
            },
            message:
              "This question can touch on deep emotional pain. If it's too much right now, it's absolutely okay to step back.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.High],
            },
            message:
              "I really appreciate your willingness to sit with such a personal question. Even acknowledging it takes courage.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.High],
            },
            message:
              "Thank you for your openness. Reflecting on past emotional hurt in relationships is never easy, but it can be a powerful part of healing.",
          },
        ],
      },
      {
        type: ResponseType.Statement,
        text: "Those feelings can run deep. Sometimes looking back reminds us of who we are. Let’s look at the present now.",
        option: "Yes, I would like to talk about something more positive",
      },
      {
        type: ResponseType.Question,
        question:
          "What is something you’ve done recently that made you feel genuinely proud or emotionally fulfilled?",
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
              "No worries if nothing comes to mind right now. Feeling proud or fulfilled can be subtle and personal.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Low],
            },
            message:
              "Thanks for taking a moment to reflect. Even small wins or quiet moments can be deeply meaningful.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Low],
            },
            message:
              "It’s great that you’re open to reflecting on what brings you pride or fulfillment. Recognizing those moments matters.",
          },

          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Medium],
            },
            message:
              "Thinking about what makes us proud or fulfilled isn’t always easy—and that’s okay. Take your time with it.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Medium],
            },
            message:
              "Thank you for engaging with a question like this. These moments of fulfillment, big or small, deserve attention.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Medium],
            },
            message:
              "I really appreciate your willingness to reflect on something meaningful. Recognizing what fulfills you is powerful.",
          },

          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.High],
            },
            message:
              "This might be a tough question to consider right now, and that’s completely valid. You’re not alone in that.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.High],
            },
            message:
              "It means a lot that you're open to exploring a question like this. Feeling proud or fulfilled can sometimes be hard to access, but it’s worth noticing.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.High],
            },
            message:
              "Your openness is truly appreciated. Recognizing what gives you a sense of pride or emotional fulfillment can be a meaningful step in self-understanding.",
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
        text: "Let’s now take a small pivot and talk about another part of your life - Work and Studies",
        option: "Okay, I’m ready.",
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
              "No worries if you're not ready to reflect on your strengths. We can come back to this when it feels right.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Low],
            },
            message:
              "Even just thinking about what keeps you grounded can be a valuable step. Thanks for engaging with the idea.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Low],
            },
            message:
              "It’s great to see you’re open to recognizing the strengths you use to stay balanced—those insights can be empowering.",
          },

          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Medium],
            },
            message:
              "This kind of reflection can feel a bit vulnerable, and it's totally okay to take your time with it.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Medium],
            },
            message:
              "Thank you for being willing to reflect a little. Identifying what helps you stay balanced isn't always easy, but it's meaningful.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Medium],
            },
            message:
              "It’s valuable that you're open to considering your inner resources. That kind of self-awareness can really support your growth.",
          },

          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.High],
            },
            message:
              "Questions like this can touch on some deeply personal areas. It’s okay if it doesn’t feel comfortable to explore right now.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.High],
            },
            message:
              "Reflecting on what keeps you mentally steady can be tough, especially during challenging times. Your openness is appreciated.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.High],
            },
            message:
              "Thank you for your willingness to engage with a deeply personal question. Knowing your strengths can be a powerful source of resilience.",
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
              "It’s okay if you don’t want to talk about your current stress levels right now. We can revisit whenever you feel comfortable.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Low],
            },
            message:
              "Thanks for thinking about how work or studies might be affecting you, even if just a little.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Low],
            },
            message:
              "It’s great you’re open to recognizing the effects of your work or academic life. Awareness is a helpful first step.",
          },

          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Medium],
            },
            message:
              "Stress or mental fatigue can be tough to talk about, so it’s completely okay if you’re not ready to discuss it yet.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Medium],
            },
            message:
              "I appreciate you reflecting on how your work or studies might be impacting your wellbeing.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Medium],
            },
            message:
              "Recognizing stress related to work or academics is important. Thanks for being open to thinking about it.",
          },

          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.High],
            },
            message:
              "Feeling overwhelmed by work or studies is very personal, and it’s okay if you don’t feel ready to share your experience right now.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.High],
            },
            message:
              "I understand this is a sensitive topic. Your willingness to consider it quietly means a lot.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.High],
            },
            message:
              "Thank you for being open to reflecting on how work or academic stress affects you. That awareness is a key step toward support.",
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
              "It’s okay if this feels tough to think about right now. We can explore it whenever you feel ready.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Low],
            },
            message:
              "Thanks for reflecting on your journey so far. Even small insights can help clarify your path.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Low],
            },
            message:
              "It’s great to see you’re open to thinking about your professional or academic direction—this kind of reflection is valuable.",
          },

          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Medium],
            },
            message:
              "Feeling overwhelmed can be really challenging. It’s okay if you’re not ready to talk about it just yet.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Medium],
            },
            message:
              "Thank you for considering your feelings about your path. It’s not easy to confront uncertainty.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Medium],
            },
            message:
              "Your openness to reflect on these challenges is important and can help you find clarity over time.",
          },

          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.High],
            },
            message:
              "This is a deeply personal and difficult topic. It’s completely okay if you don’t feel ready to share your feelings about it now.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.High],
            },
            message:
              "I recognize how hard it can be to face these feelings. Even silently reflecting on them is a meaningful step.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.High],
            },
            message:
              "Thank you for your courage in considering such a personal challenge. Understanding these feelings is key to finding your way forward.",
          },
        ],
      },
    ],
    completionMessage:
      "Thank you for sharing your thoughts and experiences. Your responses help us better understand how to support mental well-being.",
  },
];
