import { BotIcon } from "lucide-react";

export default function ManuTaskInstructions() {
  return (
    <div className="w-full h-full flex items-center justify-center gap-x-2 text-sm p-4">
      <BotIcon className="mr-2" />
      <span>
        Welcome! In this task, you will be interacting with a <strong>voice-based chatbot</strong>.
        <br /><br />
        👉 Please make sure your <strong>speakers are on</strong> — all messages will be audios, so it is important to listen carefully.
        <br /><br />
        You will go through <strong>three short scenarios</strong>:
        <ul className="list-disc ml-6 mt-1">
          <li><strong>Scenario 1:</strong> Tastes and Interests</li>
          <li><strong>Scenario 2:</strong> Interpersonal Relationships and Self-Concept</li>
          <li><strong>Scenario 3:</strong> Work or Studies</li>
        </ul>
        <br />
        Each scenario will include:
        <ul className="list-disc ml-6 mt-1">
          <li><strong>Disclosure questions</strong> – You will be asked to rate your willingness to share personal information.</li>
          <li><strong>Statements</strong> – You will see a single response option. Please select it to continue the conversation.</li>
        </ul>
        <br />
        There’s no pressure — just answer honestly and go at your own pace. Thanks for taking part!
      </span>
    </div>
  );
}
