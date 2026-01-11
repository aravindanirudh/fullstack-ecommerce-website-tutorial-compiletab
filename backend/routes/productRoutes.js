import express from 'express';
import Product from '../models/Product.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// @route POST /api/products
// @desc Create new product in the database
// @access Private/Admin
router.post('/', protect, admin, async (req, res) => {
    try {
        const { name, description, price, discountedPrice, countInStock, category, brand, sizes, colors, collections, material, gender, images, isFeatured, isPublished, tags, dimensions, weight, sku } = req.body;

        const product = new Product({
          name,
          description,
          price,
          discountedPrice,
          countInStock,
          category,
          brand,
          sizes,
          colors,
          collections,
          material,
          gender,
          images,
          isFeatured,
          isPublished,
          tags,
          dimensions,
          weight,
          sku,
          user: req.user._id, // Reference to the admin user who created it
        });

        const createdProduct = await product.save();
        res.status(201).json(createdProduct);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error!' });
    }
});

export default router;