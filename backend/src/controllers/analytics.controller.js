import Prospect from "../models/Prospect.js";
import Feedback from "../models/Feedback.js";

export const getAnalytics = async (req, res) => {
  try {
    const totalProspects = await Prospect.countDocuments();

    const hot = await Prospect.countDocuments({
      status: "HOT",
    });

    const warm = await Prospect.countDocuments({
      status: "WARM",
    });

    const cold = await Prospect.countDocuments({
      status: "COLD",
    });

    const conversions = await Feedback.countDocuments({
      outcome: "CONVERTED",
    });

    const conversionRate = totalProspects
      ? ((conversions / totalProspects) * 100).toFixed(1)
      : 0;

    res.json({
      totalProspects,

      distribution: [
        {
          name: "HOT",
          value: hot,
        },

        {
          name: "WARM",
          value: warm,
        },

        {
          name: "COLD",
          value: cold,
        },
      ],

      impact: {
        beforeAI: 10,

        afterAI: conversionRate,

        callsSaved: totalProspects - hot,

        revenueImpact: "₹43 Cr",
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
