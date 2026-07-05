function ScoreBadge({ score }) {
  let color;

  if (score >= 80) color = "text-green-400";
  else if (score >= 60) color = "text-yellow-400";
  else color = "text-red-400";

  return (
    <div
      className="
glass
rounded-xl
p-6
"
    >
      <p>BankSense Score</p>

      <h1
        className={`
text-5xl
font-bold
${color}
`}
      >
        {score}/100
      </h1>
    </div>
  );
}

export default ScoreBadge;
