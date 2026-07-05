import express from "express";

import cors from "cors";

import cookieParser from "cookie-parser";

import morgan from "morgan";

import prospectRoutes from "./routes/prospect.routes.js";
import aiRoutes from "./routes/ai.routes.js";
import feedbackRoutes from "./routes/feedback.routes.js";
import analyticsRoutes from "./routes/analytics.routes.js";
import complianceRoutes from "./routes/compliance.routes.js";
import authRoutes from "./routes/auth.routes.js";
const app = express();

// Allowed frontend origins

const allowedOrigins = [process.env.FRONTEND_URL, "http://localhost:5173"];

// CORS Middleware

app.use(
  cors({
    origin: function (origin, callback) {
      // allow postman / server requests

      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },

    credentials: true,

    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],

    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// Middlewares

app.use(express.json());

app.use(cookieParser());

app.use(morgan("dev"));

// Health Route

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,

    message: "BankSense API Running",
  });
});

// API Routes

app.use(
  "/api/prospects",

  prospectRoutes,
);

app.use("/api/ai", aiRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/compliance", complianceRoutes);
app.use("/api/auth", authRoutes);
// 404 Handler

app.use((req, res) => {
  res.status(404).json({
    success: false,

    message: "API Route Not Found",
  });
});

export default app;
