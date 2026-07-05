function RiskCard({ risk }) {
  return (
    <div
      className="
glass
rounded-xl
p-6
"
    >
      <h2 className="text-xl font-bold">Risk Assessment</h2>

      <div className="mt-5 space-y-3">
        <p>
          {risk.emiBurden < 0.6 ? "✅ EMI Burden Healthy" : "⚠ High EMI Burden"}
        </p>

        <p>{risk.incomeStable ? "✅ Stable Income" : "⚠ Income Volatile"}</p>

        <p>
          {!risk.cashRisk ? "✅ Cash Flow Normal" : "⚠ High Cash Withdrawal"}
        </p>
      </div>
    </div>
  );
}

export default RiskCard;
