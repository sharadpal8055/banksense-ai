import { useState } from "react";

import { askAssistant } from "../services/ai.service";

function ChatBox() {
  const [question, setQuestion] = useState("");

  const [answer, setAnswer] = useState("");

  async function handleAsk() {
    const res = await askAssistant({
      question,

      prospect: {
        income: 52000,

        intentScore: 85,

        risk: "LOW",
      },
    });

    setAnswer(res.data.answer);
  }

  return (
    <div
      className="
glass
p-8
rounded-xl
"
    >
      <h1
        className="
text-2xl
font-bold
"
      >
        BankSense AI Assistant
      </h1>

      <input
        className="
w-full
mt-6
p-3
text-black
rounded
"
        placeholder="
Ask about prospect...
"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button
        onClick={handleAsk}
        className="
bg-blue-600
px-6
py-2
rounded
mt-5
"
      >
        Ask AI
      </button>

      <div
        className="
mt-8
text-gray-300
whitespace-pre-line
"
      >
        {answer}
      </div>
    </div>
  );
}

export default ChatBox;
