import { BotIcon } from "lucide-react";

export default function YushanTaskInstructions() {
  return (
      <div>
          <BotIcon />
          <hr />
          <p><strong>Scenario</strong></p>
          <hr />
          <p>
              Imagine you are a bachelor student at risk of expulsion due to not earning enough credits this academic year. This situation has become a major source of stress, affecting your mental well-being and making it hard to focus on daily tasks, including your studies.
          </p>
          <hr />
          <p><strong>Task</strong></p>
          <hr />
          <p>
              You will interact with <strong>four different versions</strong> of a mental health support chatbot. Please respond to each chatbot as if you were the student described in the scenario.
          </p>

          <ul>
              <li><i>1. Base Version</i></li>
              <li><i>2. Positive Tone Version</i></li>
              <li><i>3. Negative Tone Version</i></li>
              <li><i>4. Self-Disclosure Version</i></li>
          </ul>
      </div>
  )
}