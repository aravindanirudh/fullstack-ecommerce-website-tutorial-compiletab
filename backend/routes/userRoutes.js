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
    const { username, email, password } = req.body;

    try {
        // Registration logic here
        res.send({name, email, password});
    } catch (error) {
        console.log("Error registering user:", error);
        res.status(500).send("Server error");
    }
});

export default router;