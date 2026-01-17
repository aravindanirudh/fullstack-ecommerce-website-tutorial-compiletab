import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Order from './models/Order.js';
import User from './models/User.js';

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

try {
    // Get all users
    const users = await User.find();
    
    if (users.length === 0) {
        console.log('No users found in database');
        process.exit(1);
    }
    
    const validUserId = users[0]._id;
    console.log('Using user ID:', validUserId);
    
    // Update all orders to reference this user
    const result = await Order.updateMany({}, { user: validUserId });
    
    console.log('Updated orders:', result.modifiedCount);
    console.log('Done!');
    
    process.exit(0);
} catch (error) {
    console.error('Error:', error);
    process.exit(1);
}
