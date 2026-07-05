import Prospect from "../models/Prospect.js";

import Score from "../models/Score.js";
import { createAudit } from "../services/audit.service.js";

import { calculateScore } from "../services/scoring.service.js";

export const createProspect = async (req, res) => {
  try {
    const prospect = await Prospect.create(req.body);

    const result = calculateScore(prospect);

    prospect.status = result.status;

    prospect.riskLevel = result.riskScore > 70 ? "LOW" : "HIGH";

    await prospect.save();

    await Score.create({
      prospect: prospect._id,

      ...result,
    });
    await createAudit({


    eventType:"AI_SCORE_GENERATED",


    prospect:prospect._id,


    decision:result.status,


    explanation:result.explanation,


    performedBy:"BankSense AI"


});
    res.status(201).json({
      success: true,

      prospect,

      score: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET ALL

export const getProspects = async (req, res) => {
  const prospects = await Prospect.find().sort({
    createdAt: -1,
  });

  res.json(prospects);
};

// SINGLE

export const getProspectById = async (req, res) => {
  try {
    const prospect = await Prospect.findById(req.params.id);

    const score = await Score.findOne({
      prospect: req.params.id,
    });

    if (!prospect) {
      return res.status(404).json({
        message: "Prospect not found",
      });
    }

    res.json({
      success: true,

      prospect,

      score,

      risk: {
        emiBurden: prospect.existingEMI / prospect.income,

        incomeStable: true,

        cashRisk: false,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
