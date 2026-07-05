import { useState } from "react";

import { sendFeedback } from "../../services/feedback.service";

function ActionPanel({ prospectId }) {
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  async function submit(action, outcome) {
    try {
      setLoading(true);

      const res = await sendFeedback({
        prospect: prospectId,

        action,

        outcome,

        reason: "Banker manual decision",
      });

      setMessage(res.data.feedback.learningNote);
    } catch (error) {
      console.log(error);

      setMessage("Unable to save banker feedback");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="
      glass
      rounded-xl
      p-6
      "
    >
      <h2
        className="
        text-xl
        font-bold
        "
      >
        Banker Decision Feedback
      </h2>

      <p className="text-gray-400 mt-2">
        Help BankSense learn from your decisions
      </p>

      <div
        className="
        flex
        gap-4
        mt-6
        "
      >
        {/* CALL SUCCESS */}

        <button
          disabled={loading}
          onClick={() => submit("CALL", "CONVERTED")}
          className="
          bg-green-600
          hover:bg-green-700
          px-5
          py-2
          rounded
          disabled:opacity-50
          "
        >
          Converted
        </button>

        {/* SEND OFFER */}

        <button
          disabled={loading}
          onClick={() => submit("SEND_OFFER", "FOLLOW_UP")}
          className="
          bg-blue-600
          hover:bg-blue-700
          px-5
          py-2
          rounded
          disabled:opacity-50
          "
        >
          Send Offer
        </button>

        {/* SKIP */}

        <button
          disabled={loading}
          onClick={() => submit("SKIP", "REJECTED")}
          className="
          bg-red-600
          hover:bg-red-700
          px-5
          py-2
          rounded
          disabled:opacity-50
          "
        >
          Skip
        </button>
      </div>

      {message && (
        <div
          className="
            mt-6
            p-4
            rounded-lg
            bg-blue-500/10
            border
            border-blue-500/20
            text-blue-300
            "
        >
          🤖 AI Learning:
          <br />
          {message}
        </div>
      )}
    </div>
  );
}

export default ActionPanel;
