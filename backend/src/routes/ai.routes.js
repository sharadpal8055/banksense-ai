import express from "express";

import { askAssistant } from "../controllers/ai.controller.js";

const router = express.Router();

router.post("/ask", askAssistant);

export default router;
