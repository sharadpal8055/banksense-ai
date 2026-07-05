import { useEffect, useState } from "react";

import Layout from "../common/Layout";

import { getAnalytics } from "../services/analytics.service";

import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function Analytics() {
  const [data, setData] = useState(null);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const res = await getAnalytics();

    setData(res.data);
  }

  if (!data) return <Layout>Loading...</Layout>;

  return (
    <Layout>
      <h1
        className="
text-3xl
font-bold
"
      >
        AI Impact Analytics
      </h1>

      <div
        className="
grid
grid-cols-4
gap-5
mt-10
"
      >
        <Card title="Total Leads" value={data.totalProspects} />

        <Card title="Before AI" value={data.impact.beforeAI + "%"} />

        <Card title="After AI" value={data.impact.afterAI + "%"} />

        <Card title="Revenue Impact" value={data.impact.revenueImpact} />
      </div>

      <div
        className="
glass
rounded-xl
p-8
mt-10
"
      >
        <h2
          className="
text-xl
font-bold
mb-5
"
        >
          Lead Distribution
        </h2>

        <PieChart width={400} height={300}>
          <Pie data={data.distribution} dataKey="value" label />
        </PieChart>
      </div>

      <div
        className="
glass
rounded-xl
p-8
mt-10
"
      >
        <h2>Conversion Growth</h2>

        <BarChart
          width={500}
          height={300}
          data={[
            {
              name: "Before",
              rate: data.impact.beforeAI,
            },

            {
              name: "BankSense",
              rate: data.impact.afterAI,
            },
          ]}
        >
          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="rate" />
        </BarChart>
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
p-6
"
    >
      <p>{title}</p>

      <h1
        className="
text-3xl
font-bold
mt-3
"
      >
        {value}
      </h1>
    </div>
  );
}

export default Analytics;
