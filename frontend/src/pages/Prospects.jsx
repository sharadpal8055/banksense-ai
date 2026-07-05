import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../common/Layout";
import { getProspects } from "../services/prospect.service";

function Prospects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const res = await getProspects();

    setData(res.data);
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold">AI Ranked Prospects</h1>

      <div className="mt-10 space-y-5">
        {data.map((p) => (
          <div
            key={p._id}
            className="
glass
p-6
rounded-xl
"
          >
            <h2 className="text-xl">{p.name}</h2>

            <p>Income ₹{p.income}</p>

            <h3>
              Status:
              <span className="text-green-400">{p.status}</span>
            </h3>
            <Link
              to={`/prospects/${p._id}`}
              className="
bg-blue-600
px-4
py-2
rounded
inline-block
mt-4
"
            >
              View AI Report
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Prospects;
