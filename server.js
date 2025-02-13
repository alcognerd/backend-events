import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { urlencoded } from "express";
import path from "path";

import eventRoutes from "./routes/eventRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import groupRoutes from "./routes/groupRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import likeRoutes from "./routes/likeRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import authRoutes from "./routes/authRoutes.js";

import connectDB from "./utils/connectDB.js";
import { app, server, io } from "./socket/socket.js";
import logger from "./utils/logger.js";

dotenv.config();

// Middleware Setup
app.use(
  cors({
    origin: "https://backend.alcognerd.site",
    credentials: true, // if using cookies or authorization headers
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));

connectDB();

// 🌈 Morgan - Custom Console Logger
app.use(
  morgan(
    (tokens, req, res) => {
      return [
        `URL: ${tokens.url(req, res)}`,
        `METHOD: ${tokens.method(req, res)}`,
        `STATUS: ${tokens.status(req, res)}`,
        `RESPONSE TIME: ${tokens["response-time"](req, res)} ms`,
        `MESSAGE: Request handled successfully!`,
      ].join(" | ");
    },
    { stream: { write: (message) => logger.info(message.trim()) } }
  )
);

// Routes
app.use(express.static("/var/www/frontend"));

app.get("*", (req, res, next) => {
  if (req.originalUrl.startsWith("/api")) {
    return next();
  }
  res.sendFile(path.join("/var/www/frontend", "index.html"));
});
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/group", groupRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/like", likeRoutes);

// Error Handling
app.use((err, req, res, next) => {
  logger.error(`Error: ${err.message}`);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start Server
server.listen(process.env.PORT || 5000, () => {
  logger.info(
    `🚀 Server running on http://localhost:${process.env.PORT || 5000}`
  );
});
