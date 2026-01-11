// Entry point for the backend server using Express.js
import express from "express";
import cors from "cors";
import paymentRoutes from "./routes/payment.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/ProductRoutes.js";
dotenv.config(); // Load environment variables from .env file

const app = express(); // Create an Express application
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies
connectDB(); // Connect to MongoDB database

// Define a simple route for the root URL
app.get("/", (req, res) => {
  res.send("Welcome to Rabbit API!");
});

// Use payment routes for handling payment-related requests
app.use("/api/payment", paymentRoutes);

// API routes
app.use("/api/users", userRoutes); // Use userRoutes for handling user-related requests
app.use("/api/products", productRoutes); // Use productRoutes for handling product-related requests

// Start the server and listen on the specified port
app.listen(process.env.PORT || 9000, () => {
  console.log("Server running on port 9000");
});