import Layout from "../common/Layout";


function Dashboard() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">Today's Opportunities</h1>

      <div
        className="
grid
grid-cols-3
gap-6
mt-10
"
      >
        <Card title=" HOT Leads" value="18" />

        <Card title=" Warm Leads" value="47" />

        <Card title="AI Conversion" value="34%" />
      </div>
    </Layout>
  );
}

function Card({ title, value }) {
  return (
    <div
      className="
glass
rounded-xl
p-8
"
    >
      <p>{title}</p>

      <h2
        className="
text-4xl
font-bold
mt-4
"
      >
        {value}
      </h2>
    </div>
  );
}

export default Dashboard;
