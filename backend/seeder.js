import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";
import User from "./models/User.js";
import products from "./data/products.js";

dotenv.config();

// Connect to MongoDB
await mongoose.connect(process.env.MONGO_URI);

// Function to seed data
const seedData = async () => {
    try {
        // Clear existing data
        await Product.deleteMany();
        await User.deleteMany();

        // Create a default admin user
        const createdUser = await User.create({
            name: "Admin User",
            email: "admin@example.com",
            password: "123456",
            role: "admin",
        });

        // Asign default user ID to each product
        const userID = createdUser._id;

        const sampleProducts = products.map((product) => {
            return { ...product, user: userID };
        });

        // Insert sample products
        await Product.insertMany(sampleProducts);

        console.log("Data Seeded Successfully");
        process.exit();

    } catch (error) {
        console.error("Error seeding data:", error);
        process.exit(1);
    }
};

seedData();