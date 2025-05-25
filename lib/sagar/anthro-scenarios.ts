import { type Scenario, ResponseType } from "@/lib/sagar/types";
import { Severity } from "@/lib/sagar/types";

export const anthroScenarios: Scenario[] = [
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
              "No worries at all 💛 If this feels like too much right now, we can totally circle back to it later. You get to set the pace.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Low],
            },
            message:
              "Appreciate you giving it a thought 😊 Even noticing small things—like if you're more of a coffee-shop-chatter or cozy-blanket-texts kind of person—can be surprisingly insightful.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Low],
            },
            message:
              "I love that you're open to exploring this! You know how some people come alive at big parties while others feel most themselves in cozy one-on-one chats? Understanding what works for you is really special - it helps you take care of yourself better. ❤️",
          },

          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Medium],
            },
            message:
              "This might stir up some deeper stuff, so there's *zero* pressure to go there right now. We can keep things gentle.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Medium],
            },
            message:
              "Thanks for taking a moment with this. Even lightly noticing what feels draining or comforting socially can give you a little compass 🫶.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Medium],
            },
            message:
              "Thanks for being so thoughtful about this 🤗. Understanding what social situations work best for you is really valuable.",
          },

          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.High],
            },
            message:
              "That's a big topic. ❤️ Totally understandable if you're not ready to go there right now. You're not alone in that.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.High],
            },
            message:
              "This question can carry some emotional weight. Just sitting with it quietly is already a powerful thing. Thanks for being open 🫶.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.High],
            },
            message:
              "Thank you for being open to this kind of reflection. Social safety and comfort are deeply personal, and your openness here really matters and is appreciated. 🫶",
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
              "Totally okay if this feels a bit off to explore right now 💛 These kinds of reflections can take time, and that's more than okay.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Low],
            },
            message:
              "Appreciate you giving this a bit of thought. Sometimes even small disagreements can poke at larger feelings, and that's totally normal.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Low],
            },
            message:
              "I really appreciate how you're being open to this! It's a big thing to notice how disagreements can affect you emotionally. 🫶",
          },

          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Medium],
            },
            message:
              "If it feels too close to touch right now, that's completely okay. You don't have to go there before you're ready. ❤️",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Medium],
            },
            message:
              "Thanks for hanging in with this one. Disagreements can rattle more than we expect. You're not alone in that.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Medium],
            },
            message:
              "Despite the question being a bit heavy, I really appreciate how you're being open to this. It's a big thing to notice how disagreements can affect you emotionally!",
          },

          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.High],
            },
            message:
              "This is tender territory. If now's not the right time to go there, that's more than okay. You get to set the boundaries.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.High],
            },
            message:
              "This question can bring up some heavy feelings. If it's not the right time, it's more than okay to take a step back. ❤️",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.High],
            },
            message:
              "Thank you for showing up for this reflection. Looking back on emotional hurt in relationships takes real courage—and it can be a meaningful part of healing. 💛",
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
              "Totally okay to skip this one for now, if you're not willing to reflect on it.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Low],
            },
            message:
              "Thanks for sitting with the question 😊 Even something like avoiding sad songs when you're already feeling low can be a quiet act of care.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Low],
            },
            message:
              "I appreciate that you're willing to reflect on this question! I know that media can be a source of comfort or discomfort, and it's important to be able to recognize that! 🤗",
          },

          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Medium],
            },
            message:
              "I understand if reflecting on the impact of media on your mood is too much right now. Let's move on to the next question.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Medium],
            },
            message:
              "It means a lot that you're giving this some thought. 💛 It's important to be able to recognize how media can affect your mood!",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Medium],
            },
            message:
              "Really appreciate how present you are with this one. 💛 It's important to be able to recognize how media can affect your mood!",
          },

          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.High],
            },
            message:
              "Totally okay if reflecting on this is too much right now. We can come back to it anytime you feel up for it. 🤗",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.High],
            },
            message:
              "Thank you for considering this question. Choosing what to avoid is a quiet but powerful form of emotional protection!",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.High],
            },
            message:
              "Your openness here really shows your depth and care for yourself. Recognizing what shakes us—and choosing to step back—is strength, not weakness. 💪❤️",
          },
        ],
      },
    ],
    completionMessage:
      "I appreciate your responses on your tastes and interests! 💪",
  },
  {
    title: "Interpersonal Relations and Self-Concept",
    steps: [
      {
        type: ResponseType.Statement,
        text: "Let's now take a moment to reflect on your relationships with others and yourself.",
        option: "Yes, I'm okay with that.",
      },
      {
        type: ResponseType.Statement,
        text: "Have you ever fallen out of touch or lost someone in the past?",
        option: "Yes, I have lost people in the past",
      },
      {
        type: ResponseType.Question,
        question: "Do you ever feel a sense of loss or longing when you think about them?",
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
              "Totally okay if this feels like a bit much right now. You don't have to unpack anything you're not ready for. 🤗",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Low],
            },
            message:
              "Even gentle feelings of longing can say something important. Thanks for giving it some thought—it matters. 🫶",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Low],
            },
            message:
              "Even when the feeling is quiet, reflecting on it can open up something meaningful. I really appreciate your openness here!",
          },
      
          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Medium],
            },
            message:
              "This kind of reflection can stir up more than expected. It's completely okay to hold it gently or even set it down for now.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Medium],
            },
            message:
              "It means a lot that you're giving this question some space. Even small steps into these feelings are real and valid. 🫶",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Medium],
            },
            message:
              "That kind of emotional honesty takes courage. Being open to exploring loss or longing—even a little—can be powerful!",
          },
      
          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.High],
            },
            message:
              "This is tender territory. If now's not the right time to go there, that's more than okay. You get to set the boundaries.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.High],
            },
            message:
              "Just considering a question like this shows a lot of strength. It's brave to even let the thought surface, thanks for being willing to reflect on that with me!",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.High],
            },
            message:
              "It takes a lot to sit with feelings like these. Your willingness to reflect here really matters and is appreciated! ❤️",
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
              "Totally okay if this isn't something you want to dive into right now. You get to choose when and how to explore this stuff. 💛",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Low],
            },
            message:
              "Thanks for giving it a moment of thought. Even just noticing how past experiences made you feel is a gentle kind of self-care.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Low],
            },
            message:
              "Appreciate you being open to this. Looking back on relationship stuff—even the small hurts—can really teach us what we need.",
          },
      
          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Medium],
            },
            message:
              "This kind of reflection can stir up more than we expect. If it feels like too much right now, that's completely valid. 🫶",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Medium],
            },
            message:
              "Thank you for sitting with this. Relationship pain isn't easy to revisit—even quietly—but your care in thinking about it matters.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Medium],
            },
            message:
              "It takes strength to reflect on emotional hurt and I appreciate your willingness to do that. That willingness to look inward is part of how healing starts. 💪",
          },
      
          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.High],
            },
            message:
              "This question can bring up some heavy feelings. If it's not the right time, it's more than okay to take a step back. ❤️",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.High],
            },
            message:
              "Really grateful for your willingness here. Just acknowledging that this kind of pain exists takes quiet courage. 🫶",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.High],
            },
            message:
              "Thank you for showing up for this reflection. Looking back on emotional hurt in relationships takes real courage—and it can be a meaningful part of healing. 💛",
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
              "Totally okay if you are not ready to reflect on this right now. We can come back to it anytime you feel up for it. 🤗",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Low],
            },
            message:
              "Thanks for giving this a little space. Even the tiniest wins or quiet joys can hold more meaning than we realize.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Low],
            },
            message:
              "Love that you're leaning into this! 🫶 Whether it's a major milestone or just a moment that made you smile—your pride is valid.",
          },
      
          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Medium],
            },
            message:
              "This kind of question can be a lot sometimes—and that's completely okay. No need to rush it. 💛",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Medium],
            },
            message:
              "Thanks for sitting with this! It's great that you're open to reflecting on what brings you pride or fulfillment. 💛",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Medium],
            },
            message:
              "Appreciate you being open with this one 🫶 Noticing what brings you pride or purpose is a really powerful thing.",
          },
      
          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.High],
            },
            message:
              "This might feel a bit heavy right now, and that's totally valid ❤️ No need to go there if it's not the time.",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.High],
            },
            message:
              "Really appreciate you showing up for this. These questions can touch on deep stuff—there's no wrong way to feel about it. 🫶",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.High],
            },
            message:
              "Your openness here means a lot. ❤️ Reflecting on what gives you pride or fulfillment can be a big step toward self-understanding.",
          },
        ],
      },
    ],
    completionMessage:
      "You did a great job reflecting on relationships and self-concept! 🎉 ",
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
              "Totally okay if you are not willing to reflect on this right now. We can come back to it whenever you're ready. 💛",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Low],
            },
            message:
              "Appreciate you thinking about this. Even noticing little things that help you stay steady is a step forward. 💪",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Low],
            },
            message:
              "Love that you're open to this! Knowing what keeps you grounded can really make a difference. 💪",
          },
      
          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Medium],
            },
            message:
              "No pressure to go deep right now. These kinds of questions can take time—and that's okay. ❤️",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Medium],
            },
            message:
              "Thanks for sitting with this a bit. Figuring out what helps you stay balanced isn't always easy, but it matters. 🫶",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Medium],
            },
            message:
              "Really glad you're open to this kind of reflection. Your inner strengths can carry more power than you think. 💪",
          },
      
          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.High],
            },
            message:
              "These questions can stir up a lot. If it's not the right time to go there, that's completely valid. ❤️",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.High],
            },
            message:
              "Despite the question being a bit heavy, I really appreciate your willingness to reflect on it!"
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.High],
            },
            message:
              "Thank you for engaging with something this personal. Recognizing your strengths can be such a powerful anchor. 💛",
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
              "Totally okay if this isn't something you want to get into right now. We can come back to it whenever you're ready. 💛",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Low],
            },
            message:
              "Thanks for pausing to think about how work or school might be weighing on you, even just a little bit.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Low],
            },
            message:
              "Noticing how work or academics affect you is a great step. That kind of awareness really helps. 💪",
          },
      
          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Medium],
            },
            message:
              "Stress and mental fatigue can feel heavy, so if it's not the right time to talk about it, that's completely okay. 🫶",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Medium],
            },
            message:
              "I really respect you taking a moment to consider how your workload or studies might be affecting you. That matters.",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Medium],
            },
            message:
              "It takes real self-awareness to recognize when work or academic pressure is getting to you. I'm glad you're reflecting on it. 🤞",
          },
      
          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.High],
            },
            message:
              "If things feel overwhelming, I completely understand that talking about it might not feel right just now. No pressure at all. ❤️",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.High],
            },
            message:
              "This kind of stress can go deep, I appreciate your willingness to reflect on it. 🫶",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.High],
            },
            message:
              "It's not easy to face this kind of stress, so thank you for being open. That kind of honesty is a powerful move toward support. ❤️",
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
              "It's okay if you are not willing to reflect on this right now. We can explore it whenever you feel ready. 💛",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Low],
            },
            message:
              "Thanks for reflecting on your journey so far. Even small insights can help clarify your path. 🫶",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Low],
            },
            message:
              "I really appreciate your openness here. Taking time to reflect on where you're headed can be more powerful than it seems. 💪",
          },
      
          // MEDIUM SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.Medium],
            },
            message:
              "Feeling overwhelmed can be really heavy. If it's not the right time to talk about it, that's totally okay. 💛",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Medium],
            },
            message:
              "Thank you for giving this some thought. Sitting with uncertainty like this takes quiet strength. 🫶",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.Medium],
            },
            message:
              "It's meaningful that you're reflecting on this. Sorting through doubt can take time, but your awareness already matters a lot. 💪",
          },
      
          // HIGH SEVERITY
          {
            conditions: {
              willingness: [1],
              severity: [Severity.High],
            },
            message:
              "This is a deeply personal and difficult space to enter. It's completely okay to hold off if you're not ready. ❤️",
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.High],
            },
            message:
              "I see how hard this can be. Even quietly noticing these feelings is a step forward. 🫶",
          },
          {
            conditions: {
              willingness: [4, 5],
              severity: [Severity.High],
            },
            message:
              "Thank you for leaning into something so personal. Understanding where that overwhelm comes from is part of finding your own direction. 💛",
          },
        ],
      }
      
    ],
    completionMessage:
      "Thank you for sharing your thoughts about work and studies! Your reflections matter. 🎉",
  },
];
