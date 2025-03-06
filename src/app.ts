import express from "express";
import userRoutes from "./routes/user.route";
import authRoutes from "./routes/auth.route";
import { loggingMiddleware } from "./middlewares/logging.middleware";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();

// Built-in middleware for JSON parsing
app.use(express.json());

// Custom middleware for logging
app.use(loggingMiddleware);

// Define API routes
app.use("/api/v1/users", userRoutes);

// Login Routes
app.use("/api/v1/auth", authRoutes);



// Global error handling middleware (should be the last middleware)
app.use(errorMiddleware);

export default app;
