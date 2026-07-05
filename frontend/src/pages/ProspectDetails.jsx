import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Layout from "../common/Layout";

import { getProspectDetails } from "../services/prospect.service";

import ScoreBadge from "../component/prospects/ScoreBadge";

import AIExplanation from "../component/ai/AIExplanation";

import RiskCard from "../component/prospects/RiskCard";

import ActionPanel from "../component/prospects/ActionPanel";

function ProspectDetails() {
  const { id } = useParams();

  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    loadProspect();
  }, [id]);

  const loadProspect = async () => {
    try {
      const res = await getProspectDetails(id);

      setData(res.data);
    } catch (error) {
      console.log(error);

      setError("Unable to load prospect details");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Layout>
        <h1 className="text-xl">Loading AI Report...</h1>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <h1 className="text-red-400">{error}</h1>
      </Layout>
    );
  }

  if (!data?.prospect || !data?.score) {
    return (
      <Layout>
        <h1>No Prospect Data Found</h1>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold">{data.prospect.name}</h1>

      <p className="text-gray-400 mt-2">
        AI Powered Prospect Intelligence Report
      </p>

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-6
        mt-10
        "
      >
        <ScoreBadge score={data.score.finalScore} />

        <div
          className="
          glass
          p-6
          rounded-xl
          "
        >
          <h2 className="text-xl font-bold">Recommended Action</h2>

          <p className="text-2xl mt-5">{data.score.recommendation}</p>
        </div>

        <AIExplanation score={data.score} />

        <RiskCard risk={data.risk} />

     <ActionPanel

prospectId={
data.prospect._id
}

/>
      </div>
    </Layout>
  );
}

export default ProspectDetails;
