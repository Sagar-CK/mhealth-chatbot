export default function SagarTaskInstructions() {
  return (
    <div className="w-full h-full flex flex-col items-start justify-center gap-y-4 p-4">
      <p>
        You will interact with a mental health chatbot across <strong>three scenarios</strong>. 
        Each scenario presents a fixed dialogue that you should read carefully and imagine yourself 
        experiencing — immerse yourself in the situation.
      </p>

      <p>
        Occasionally, the chatbot will ask you questions that involve self-disclosure.
      </p>

      <div className="mt-4">
        <strong>Important:</strong> You are <u>not</u> expected to actually share personal information. 
        Instead, indicate how willing you would be to answer each question and how severe or sensitive 
        you perceive it to be.
      </div>

      <p className="mt-4">
        After completing all <strong>three</strong> scenarios, you will be shown a page that allows you to redirect back to Qualtrics.
      </p>
    </div>
  );
}
