function AIExplanation({ score }) {
  return (
    <div
      className="
glass
p-6
rounded-xl
"
    >
      <h2 className="text-xl font-bold">AI Explanation</h2>

      <div className="mt-5">
        <p>Income Contribution</p>

        <div className="bg-gray-800 rounded">
          <div
            className="
bg-blue-500
h-3
rounded
"
            style={{
              width: `${score.incomeScore}%`,
            }}
          ></div>
        </div>

        <p className="mt-5">Intent Contribution</p>

        <div className="bg-gray-800 rounded">
          <div
            className="
bg-green-500
h-3
rounded
"
            style={{
              width: `${score.intentScore}%`,
            }}
          ></div>
        </div>

        <p className="mt-6 text-gray-300">{score.explanation}</p>
      </div>
    </div>
  );
}

export default AIExplanation;
