// Entry point for the backend server using Express.js
import express from "express"; // Without Express, you’d have to use raw Node.js HTTP APIs (very messy)
import cors from "cors"; // CORS = Cross-Origin Resource Sharing. Frontend and backend run on different ports. Browsers block cross-origin requests by default. cors() allows the frontend to talk to the backend
import dotenv from "dotenv"; // Library to load environment variables
import connectDB from "./config/db.js"; // Custom function that connects to MongoDB database
// Import all routes as separate imports. They will be attached with app.use() later
import paymentRoutes from "./routes/payment.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/ProductRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import checkoutRoutes from "./routes/checkoutRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import subscribeRoute from "./routes/subscribeRoute.js";
dotenv.config(); // Load environment variables from .env file. Makes the .env variables available via process.env.VARIABLE_NAME

const app = express(); // Create an Express application and 'app' is the server object. Everything (routes, middleware) attaches to this.
app.use(cors()); // Enable CORS for all routes globally. Every request passes through this
app.use(express.json()); // Middleware to parse JSON bodies. Allows the server to read JSON request bodies. Without this, req.body would be undefined
connectDB(); // Connect to MongoDB database

// Define a simple route for the root URL. This is the homepage of the API (not frontend)
app.get("/", (req, res) => {
  res.send("Welcome to Rabbit API! This is the homepage of backend API of Rabbit MERN (full-stack) Ecommerce Website tutorial from compiletab YouTube channel! ");
});

// API routes
app.use("/api/payment", paymentRoutes); // Use payment routes for handling payment-related requests
app.use("/api/users", userRoutes); // Use userRoutes for handling user-related requests
app.use("/api/products", productRoutes); // Use productRoutes for handling product-related requests
app.use("/api/cart", cartRoutes); // Use cartRoutes for handling cart-related requests
app.use("/api/checkout", checkoutRoutes); // Use checkoutRoutes for handling checkout-related requests
app.use("/api/orders", orderRoutes); // Use orderRoutes for handling order-related requests
app.use("/api/upload", uploadRoutes); // Use uploadRoutes for handling image upload-related requests
app.use("/api", subscribeRoute); // Use subscribeRoutes for handling subscriber-related requests

// Start the server and listens on the specified port
app.listen(process.env.PORT || 9000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});