import express from "express";

import { getAuditLogs } from "../controllers/compliance.controller.js";

const router = express.Router();

router.get("/audit", getAuditLogs);

export default router;
