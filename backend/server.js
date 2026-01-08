// Entry point for the backend server using Express.js
import express from "express";
import cors from "cors";
import paymentRoutes from "./routes/payment.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config(); // Load environment variables from .env file

const app = express(); // Create an Express application
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies
connectDB(); // Connect to MongoDB database

app.get("/", (req, res) => {
  res.send("Welcome to Rabbit API!");
});

app.use("/api/payment", paymentRoutes);

app.listen(process.env.PORT || 9000, () => {
  console.log("Server running on port 9000");
});