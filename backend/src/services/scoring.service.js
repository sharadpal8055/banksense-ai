//Later FastAPI ML will replace this logic.~Sharad Pal 



export const calculateScore = (prospect) => {
  let incomeScore = 0;

  if (prospect.income >= 70000) incomeScore = 90;
  else if (prospect.income >= 50000) incomeScore = 75;
  else if (prospect.income >= 30000) incomeScore = 55;
  else incomeScore = 30;

  let intentScore = 0;

  intentScore += prospect.loanPageVisits * 5;

  if (prospect.emiCalculatorUsed) intentScore += 20;

  if (prospect.applyClicked) intentScore += 35;

  if (intentScore > 100) intentScore = 100;

  let emiRatio = prospect.existingEMI / prospect.income;

  let riskScore = emiRatio > 0.6 ? 30 : 90;

  let finalScore = (
    incomeScore * 0.5 +
    intentScore * 0.4 +
    riskScore * 0.1
  ).toFixed(0);

  let status;

  if (finalScore >= 80) status = "HOT";
  else if (finalScore >= 60) status = "WARM";
  else status = "COLD";

  return {
    incomeScore,

    intentScore,

    riskScore,

    finalScore,

    status,

    recommendation:
      status === "HOT"
        ? "Call Today - High Conversion Chance"
        : status === "WARM"
          ? "Send personalized offer"
          : "Monitor customer activity",

    explanation: `
Income contributes ${incomeScore}.
Intent contributes ${intentScore}.
Risk safety ${riskScore}.
`,
  };
};
