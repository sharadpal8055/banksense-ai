import { useEffect, useState } from "react";

import Layout from "../common/Layout";

import { getAuditLogs } from "../services/compliance.service";

function Compliance() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const res = await getAuditLogs();

    setLogs(res.data);
  }

  return (
    <Layout>
      <h1
        className="
text-3xl
font-bold
"
      >
        AI Compliance Center
      </h1>

      <p
        className="
text-gray-400
mt-2
"
      >
        Transparent AI decision monitoring
      </p>

      <div
        className="
mt-10
space-y-5
"
      >
        {logs.map((log) => (
          <div
            key={log._id}
            className="
glass
rounded-xl
p-6
"
          >
            <div
              className="
flex
justify-between
"
            >
              <h2
                className="
text-xl
font-bold
"
              >
                {log.eventType}
              </h2>

              <span
                className="
text-green-400
"
              >
                {log.complianceStatus}
              </span>
            </div>

            <p className="mt-4">
              Decision:{" "}
              <span
                className="
font-bold
"
              >
                {log.decision}
              </span>
            </p>

            <p
              className="
text-gray-300
mt-3
"
            >
              {log.explanation}
            </p>

            <p
              className="
text-sm
text-gray-500
mt-4
"
            >
              Model: {log.modelVersion}
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Compliance;
