import { Link } from "react-router-dom";

function Landing() {
  return (
    <div
      className="
min-h-screen
bg-slate-950
text-white
flex
items-center
justify-center
"
    >
      <div
        className="
max-w-5xl
text-center
"
      >
        <h1
          className="
text-6xl
font-bold
"
        >
          BankSense AI
        </h1>

        <p
          className="
mt-6
text-xl
text-gray-400
"
        >
          AI powered prospect intelligence platform for smarter banking
          decisions.
        </p>

        <div
          className="
grid
grid-cols-3
gap-6
mt-14
"
        >
          <Card title="AI Scoring" text="Predict high value customers" />

          <Card title="Risk Engine" text="Detect repayment capability" />

          <Card title="RBI Ready" text="Transparent AI decisions" />
        </div>

        <Link
          to="/login"
          className="
inline-block
mt-12
bg-blue-600
px-10
py-3
rounded-xl
"
        >
          Launch Dashboard
        </Link>
      </div>
    </div>
  );
}

function Card({ title, text }) {
  return (
    <div
      className="
glass
p-6
rounded-xl
"
    >
      <h2 className="font-bold text-xl">{title}</h2>

      <p className="text-gray-400 mt-3">{text}</p>
    </div>
  );
}

export default Landing;
