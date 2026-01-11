import express from "express";
import Cart from "../models/Cart.js";
import Product from "../models/Product.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Helper function to get or create cart
const getCart = async (userId, guestId) => {
  if (userId) {
    return await Cart.findOne({ user: userId });
  } else if (guestId) {
    return await Cart.findOne({ guestId });
  }
    return null;
};

// @route POST /api/cart
// @desc Add product to cart for a guest or logged-in user
// @access Public
router.post("/", async (req, res) => {
  const { productId, quantity, size, color, guestId, userId } = req.body;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    // Determine if user is logged in or guest
    let cart = await getCart(userId, guestId);

    // If cart exist, update it
    if (cart) {
        const productIndex = cart.products.findIndex(
          (p) =>
            p.productId.toString() === productId &&
            p.size === size &&
            p.color === color
        );

        if (productIndex > -1) {
          // Product exists in cart, update quantity
          cart.products[productIndex].quantity += parseInt(quantity);
        } else {
          // Product does not exist in cart, add new item
          cart.products.push({ productId, name: product.name, image: product.images[0].url, price: product.price, size, color, quantity: parseInt(quantity) });
        }

        // Recalculate total price
        cart.totalPrice = cart.products.reduce((acc, item) => acc + item.price * item.quantity, 0);
        await cart.save();
        return res.status(200).json(cart);
    } else {
        // No cart exists, create a new one
        const newCart = new Cart({
          user: userId ? userId : undefined,
          guestId: guestId ? guestId : "guest_" + new Date().getTime(),
          products: [{ productId, name: product.name, image: product.images[0].url, price: product.price, size, color, quantity: parseInt(quantity) }],
          totalPrice: product.price * parseInt(quantity),
        });
        await newCart.save();
        return res.status(201).json(newCart);
    }
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;