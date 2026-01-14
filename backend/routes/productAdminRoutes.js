import express from 'express';
import Product from "../models/Product.js";
import { protect, admin } from "../middleware/authMiddleware.js";

// @route GET /api/admin/products
// @desc Get all products (admin only)
// @access Private/admin