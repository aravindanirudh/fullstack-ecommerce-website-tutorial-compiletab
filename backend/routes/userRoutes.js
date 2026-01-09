import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// User registration route
// @route @POST /api/users/register
// @desc Register a new user
// @access Public
// We will not specify /api/users here because it is specified in server.js where we use this router
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Registration logic here
    let user = await User.findOne({ email }); // Check if user already exists with the given email
    if (user) {
      return res.status(400).json({ message: "User already exists!" });
    }
    user = new User({ name, email, password }); // Create a new user instance
    await user.save(); // Save the new user to the database

    // Create JWT payload
    const payload = {
      user: {
        id: user._id,
        role: user.role,
      },
    };

    // Sign and return JWT token along with user data
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "40h" },
      (err, token) => {
        if (err) throw err;
        // Send user data and token as response
        res.status(201).json({
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      }
    );
  } catch (error) {
    console.log("Error registering user:", error);
    res.status(500).send("Server error");
  }
});

// @route POST /api/users/login
// @desc Authenticate user and get token
// @access Public
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // Create JWT payload
    const payload = {
      user: {
        id: user._id,
        role: user.role,
      },
    };

    // Sign and return JWT token along with user data
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "40h" },
      (err, token) => {
        if (err) throw err;
        // Send user data and token as response
        res.json({
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      }
    );
  } catch (error) {
    console.log("Error logging in user:", error);
    res.status(500).send("Server error");
  }
});

export default router;
