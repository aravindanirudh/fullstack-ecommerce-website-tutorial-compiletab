// File used to connect website to MongoDB database
import mongoose from "mongoose"; // Mongoose is an ODM (Object Data Modeling) library for MongoDB. MongoDB stores data as JSON-like documents. Mongoose lets you: define schemas, create models, validate data, query DB easily. Without Mongoose, you’d use raw MongoDB driver (more complex)

// async means this function contains asynchronous operations. We can use 'await' inside it
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI); // Pauses execution until connection succeeds or fails. Ensures DB is connected before server continues
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1); // Exit process with failure (immediately exits the Node.js process)
    }
}

export default connectDB; // Exports the function so it can be used elsewhere