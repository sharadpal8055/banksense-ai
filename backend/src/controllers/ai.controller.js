import { askGemini } from "../services/gemini.service.js";

export const askAssistant = async (req, res) => {
  try {
    const { question, prospect } = req.body;

    const prompt = `

You are BankSense AI.

You help IDBI bankers choose loan prospects.


Customer Data:

${JSON.stringify(prospect)}


Banker Question:

${question}


Give:
1. Decision
2. Reason
3. Risk warning
4. Recommended action


`;

    const answer = await askGemini(prompt);

    res.json({
      success: true,

      answer,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
