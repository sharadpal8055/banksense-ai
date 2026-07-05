import express from "express";

import {
  createProspect,
  getProspects,
  getProspectById,
} from "../controllers/prospect.controller.js";
import { protect }
from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", createProspect);

router.get(
"/",
protect,
getProspects
);

router.get("/:id", getProspectById);

export default router;
