import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Layout from "../common/Layout";

import { getProspects } from "../services/prospect.service";

import AddProspect from "../component/prospects/AddProspect";

function Prospects() {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      setLoading(true);

      const res = await getProspects();

      setData(res.data);
    } catch (error) {
      console.log(error);

      setError("Failed to load prospects");
    } finally {
      setLoading(false);
    }
  }

  function getStatusColor(status) {
    if (status === "HOT") {
      return "text-green-400";
    }

    if (status === "WARM") {
      return "text-yellow-400";
    }

    return "text-red-400";
  }

  return (
    <Layout>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">AI Ranked Prospects</h1>

          <p className="text-gray-400 mt-2">
            Add customers and let BankSense AI prioritize leads
          </p>
        </div>
      </div>

      {/* ADD CUSTOMER FORM */}

      <div className="mt-8">
        <AddProspect onAdded={load} />
      </div>

      {/* ERROR */}

      {error && <p className="text-red-400 mt-5">{error}</p>}

      {/* LOADING */}

      {loading && <p className="mt-10">Loading prospects...</p>}

      {/* EMPTY */}

      {!loading && data.length === 0 && (
        <div
          className="
            glass
            p-8
            rounded-xl
            mt-10
            "
        >
          No prospects available. Add your first customer.
        </div>
      )}

      {/* PROSPECT LIST */}

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
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{p.name}</h2>

                <p className="text-gray-400 mt-2">Income ₹{p.income}</p>

                <h3 className="mt-3">
                  Status:
                  <span
                    className={`ml-2 font-bold ${getStatusColor(p.status)}`}
                  >
                    {p.status}
                  </span>
                </h3>
              </div>

              <Link
                to={`/prospects/${p._id}`}
                className="
                  bg-blue-600
                  hover:bg-blue-700
                  px-5
                  py-2
                  rounded
                  "
              >
                View AI Report
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Prospects;
