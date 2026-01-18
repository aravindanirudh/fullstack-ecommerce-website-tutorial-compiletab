# Rabbit MERN E-Commerce Clothing Website - Complete Documentation

## Project Overview
**Rabbit** is a full-stack e-commerce platform for clothing retail built with the MERN stack (MongoDB, Express.js, React, Node.js). This project demonstrates professional e-commerce implementation including user authentication, product management, shopping cart, secure payments, and an admin dashboard.

- **Source Tutorial:** https://youtu.be/hpgh2BTtac8
- **Project Start Date:** 03-12-2025 (Wednesday)
- **Project End Date:** 18-01-2026 (Sunday)
- **Status:** Production-Ready MERN Application
- **Live Demo:** https://rabbit-compiletab-mern-ecommerce-website.vercel.app/

---

## Table of Contents
1. [Architecture & Technology Stack](#architecture--technology-stack)
2. [Features](#features)
3. [Project Structure](#project-structure)
4. [Prerequisites & System Requirements](#prerequisites--system-requirements)
5. [Installation & Setup Guide](#installation--setup-guide)
6. [Environment Configuration](#environment-configuration)
7. [Database Setup](#database-setup)
8. [API Endpoints](#api-endpoints)
9. [Frontend Implementation](#frontend-implementation)
10. [Backend Implementation](#backend-implementation)
11. [Payment Gateway Integration](#payment-gateway-integration)
12. [Image Upload & Storage](#image-upload--storage)
13. [Authentication & Authorization](#authentication--authorization)
14. [Running the Application](#running-the-application)
15. [Key Concepts & Design Patterns](#key-concepts--design-patterns)

---

## Architecture & Technology Stack

### Technology Stack
| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | React 19.2.0 with Vite | Modern UI with fast build times and hot module replacement |
| **Styling** | TailwindCSS 4.1.17 | Utility-first CSS framework for responsive design |
| **State Management** | Redux Toolkit 2.11.2 + Redux Thunk | Centralized global state management for async operations |
| **Client Routing** | React Router 7.10.0 | Client-side routing without full page reloads |
| **UI Components** | React Icons 5.5.0 | SVG icon library |
| **Notifications** | Sonner 2.0.7 | Toast notifications for user feedback |
| **HTTP Client** | Axios 1.13.2 | Promise-based HTTP client for API calls |
| **Backend** | Express.js 5.2.1 | Lightweight Node.js web framework |
| **Database** | MongoDB 9.1.2 with Mongoose ODM | NoSQL document database with schema validation |
| **Authentication** | JWT (JSON Web Tokens) | Secure stateless authentication |
| **Password Security** | bcryptjs 3.0.3 | Password hashing and validation |
| **File Upload** | Multer 2.0.2 | Multipart form data handling |
| **Cloud Storage** | Cloudinary 2.8.0 | Cloud-based image storage and CDN |
| **Streaming** | Streamifier 0.1.1 | Stream conversion for Cloudinary uploads |
| **Payment Gateway** | Razorpay 2.9.6 | Payment processing (India-focused, UPI supported) |
| **CORS** | CORS 2.8.5 | Cross-Origin Resource Sharing |
| **Environment** | dotenv 17.2.3 | Environment variable management |
| **Development** | Nodemon 3.1.11 | Auto-restart on backend file changes |

### Architecture Pattern
- **Separation of Concerns:** Frontend and Backend are completely decoupled
- **Client-Server Model:** RESTful API communication
- **State Management:** Redux for complex state, Mongoose for database state
- **Middleware Pattern:** Express middleware for authentication, CORS, parsing

---

## Features

### Customer Features
- **User Authentication**
  - Register with email validation
  - Secure login with JWT tokens
  - Password hashing with bcrypt
  - Protected routes with token verification

- **Product Browsing**
  - View all products with filtering and sorting
  - Advanced search functionality
  - Filter by gender (Men, Women, Unisex), category, price, color, size
  - Sort by price, relevance, newest
  - Detailed product pages with images, description, price, ratings

- **Shopping Cart**
  - Add/remove products from cart
  - Update quantity for items
  - Cart persistence (Redux state)
  - Real-time price calculation

- **Checkout & Payments**
  - Shipping address input validation
  - Multiple payment methods support
  - Razorpay payment processing
  - Order confirmation with order ID

- **Order Management**
  - View order history
  - Track order status (processing, shipped, delivered, cancelled)
  - View detailed order information
  - Download invoice (if implemented)

- **User Profile**
  - Update profile information
  - View account details
  - Manage saved addresses

### Admin Features
- **User Management**
  - View all users
  - Edit user roles and information
  - Delete user accounts
  - Filter and search users

- **Product Management**
  - Create new products with all attributes
  - Edit existing products
  - Delete products
  - Upload multiple images to Cloudinary
  - Manage inventory (stock count)

- **Order Management**
  - View all customer orders
  - Update order status
  - Track order fulfillment
  - Generate sales reports

---

## Project Structure

```
fullstack-ecommerce-website-tutorial-compiletab/
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx                          # Main routing component
│   │   ├── main.jsx                         # React entry point
│   │   ├── index.css                        # Global styles
│   │   │
│   │   ├── components/
│   │   │   ├── Admin/
│   │   │   │   ├── AdminLayout.jsx          # Admin page structure
│   │   │   │   ├── AdminSidebar.jsx         # Admin navigation
│   │   │   │   ├── UserManagement.jsx       # User CRUD operations
│   │   │   │   ├── ProductManagement.jsx    # Product listing and CRUD
│   │   │   │   ├── OrderManagement.jsx      # Order tracking
│   │   │   │   └── EditProductPage.jsx      # Product editing form
│   │   │   │
│   │   │   ├── Cart/
│   │   │   │   ├── CartContents.jsx         # Cart item listing
│   │   │   │   ├── Checkout.jsx             # Checkout form and logic
│   │   │   │   └── RazorpayButton.jsx       # Payment button component
│   │   │   │
│   │   │   ├── Common/
│   │   │   │   ├── Header.jsx               # Top header
│   │   │   │   ├── Navbar.jsx               # Navigation menu
│   │   │   │   ├── Footer.jsx               # Footer content
│   │   │   │   ├── SearchBar.jsx            # Product search
│   │   │   │   └── ProtectedRoute.jsx       # Route protection HOC
│   │   │   │
│   │   │   ├── Layout/
│   │   │   │   ├── UserLayout.jsx           # Main user page wrapper
│   │   │   │   ├── CartDrawer.jsx           # Slide-out cart menu
│   │   │   │   ├── Hero.jsx                 # Hero banner section
│   │   │   │   └── Topbar.jsx               # Top notification bar
│   │   │   │
│   │   │   └── Products/
│   │   │       ├── ProductGrid.jsx          # Product listing grid
│   │   │       ├── ProductDetails.jsx       # Single product page
│   │   │       ├── FeaturedCollection.jsx   # Featured products section
│   │   │       ├── NewArrivals.jsx          # New products carousel
│   │   │       ├── GenderCollectionSection.jsx  # Gender-based collections
│   │   │       ├── FeaturesSection.jsx      # Feature highlights
│   │   │       ├── FilterSidebar.jsx        # Product filters
│   │   │       └── SortOptions.jsx          # Sorting dropdown
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx                     # Homepage
│   │   │   ├── AdminHomePage.jsx            # Admin dashboard
│   │   │   ├── CollectionPage.jsx           # Products by collection
│   │   │   ├── Login.jsx                    # User login page
│   │   │   ├── Register.jsx                 # User registration
│   │   │   ├── Profile.jsx                  # User profile page
│   │   │   ├── MyOrdersPage.jsx             # Order history
│   │   │   ├── OrderDetailsPage.jsx         # Single order details
│   │   │   └── OrderConfirmationPage.jsx    # Post-payment confirmation
│   │   │
│   │   └── redux/
│   │       ├── store.js                     # Redux store configuration
│   │       └── slices/
│   │           ├── authSlice.js             # User auth state (login, register, JWT)
│   │           ├── productsSlice.js         # Product listing state
│   │           ├── cartSlice.js             # Cart items state
│   │           ├── checkoutSlice.js         # Checkout form state
│   │           ├── orderSlice.js            # Order state
│   │           ├── adminSlice.js            # Admin general state
│   │           ├── adminProductSlice.js     # Admin product CRUD state
│   │           └── adminOrderSlice.js       # Admin order management state
│   │
│   ├── package.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   ├── index.html
│   └── public/
│
└── backend/
    ├── server.js                            # Express app entry point
    ├── package.json
    ├── seeder.js                            # Database seed script
    ├── fix_orders.js                        # Order data migration script
    │
    ├── config/
    │   └── db.js                            # MongoDB connection setup
    │
    ├── middleware/
    │   └── authMiddleware.js                # JWT verification & admin check
    │
    ├── models/
    │   ├── User.js                          # User schema with password hashing
    │   ├── Product.js                       # Product schema
    │   ├── Cart.js                          # Shopping cart schema
    │   ├── Order.js                         # Order schema
    │   ├── Checkout.js                      # Checkout session schema
    │   └── Subscriber.js                    # Newsletter subscriber schema
    │
    ├── routes/
    │   ├── userRoutes.js                    # User auth endpoints
    │   ├── productRoutes.js                 # Product listing endpoints
    │   ├── cartRoutes.js                    # Cart CRUD endpoints
    │   ├── checkoutRoutes.js                # Checkout endpoints
    │   ├── orderRoutes.js                   # Order endpoints
    │   ├── payment.js                       # Razorpay payment endpoints
    │   ├── uploadRoutes.js                  # Image upload to Cloudinary
    │   ├── subscribeRoute.js                # Newsletter subscription
    │   ├── adminRoutes.js                   # Admin user management
    │   ├── productAdminRoutes.js            # Admin product management
    │   └── adminOrderRoutes.js              # Admin order management
    │
    └── data/
        └── products.js                      # Initial product data for seeding
```

---

## Prerequisites & System Requirements

### System Requirements
- **Node.js:** v16.0.0 or higher (v18+ recommended)
- **npm:** v7.0.0 or higher
- **MongoDB:** v5.0 or higher (local or cloud)
- **RAM:** 2GB minimum
- **Disk Space:** 500MB minimum

### Required Accounts & API Keys
1. **MongoDB Atlas** - Database hosting
2. **Cloudinary** - Image storage and CDN
3. **Razorpay** - Payment processing (optional if using PayPal)
4. **Git** - Version control

### Developer Prerequisites
- Basic understanding of React.js and ES6 JavaScript
- Understanding of Node.js and Express.js
- Familiarity with MongoDB and Mongoose
- Basic knowledge of REST APIs
- Understanding of JWT authentication
- TailwindCSS knowledge

---

## Installation & Setup Guide

### Step 1: Clone the Repository
```bash
# Clone the project
git clone <repository-url>
cd fullstack-ecommerce-website-tutorial-compiletab

# Navigate to backend
cd backend

# Navigate to frontend (in another terminal)
cd frontend
```

### Step 2: Install Backend Dependencies
```bash
# From backend directory
npm install

# Dependencies installed:
# - express: Web framework
# - mongoose: MongoDB ODM
# - bcryptjs: Password hashing
# - jsonwebtoken: JWT authentication
# - dotenv: Environment variables
# - cors: Cross-origin requests
# - cloudinary: Image upload API
# - razorpay: Payment gateway
# - multer: File upload handling
# - streamifier: Stream conversion
# - nodemon: Development auto-reload
```

### Step 3: Install Frontend Dependencies
```bash
# From frontend directory
npm install

# Key dependencies:
# - react: UI library
# - react-router-dom: Client-side routing
# - @reduxjs/toolkit: State management
# - react-redux: Redux bindings for React
# - axios: HTTP client
# - tailwindcss: Styling
# - sonner: Toast notifications
# - react-icons: Icon library
```

---

## Environment Configuration

### Backend Environment Variables (.env)

Create a `.env` file in the `backend/` directory with the following variables:

```env
# Server Configuration
PORT=9000

# Database Configuration
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database-name>?retryWrites=true&w=majority

# JWT Secret for token signing and verification
JWT_SECRET=your_very_secure_random_string_of_at_least_32_characters_here

# Cloudinary Image Upload Configuration
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Razorpay Payment Gateway Configuration
RAZORPAY_KEY_ID=razorpay_key_id_from_dashboard
RAZORPAY_SECRET=razorpay_secret_from_dashboard

# Optional: PayPal Configuration (if not using Razorpay)
PAYPAL_CLIENT_ID=your_paypal_client_id
```

### Frontend Environment Variables (.env or .env.local)

Create a `.env` file in the `frontend/` directory:

```env
# Backend API Base URL
VITE_BACKEND_URL=http://localhost:9000/api

# Razorpay Key (public key only, safe to expose)
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

### Step-by-Step: Getting API Keys

#### 1. MongoDB Atlas Setup
```
1. Visit https://www.mongodb.com/cloud/atlas
2. Sign-up/login with Google or Email
3. Create a new project
4. Create a free cluster (AWS, shared tier)
5. Create database user (username and password)
6. Get connection string from "Connect" button
7. Copy string and replace in MONGO_URI with your credentials
   Format: mongodb+srv://username:password@cluster.mongodb.net/databasename
```

#### 2. Cloudinary Setup
```
1. Visit https://cloudinary.com
2. Sign up for free account
3. Go to Dashboard
4. Note your Cloud Name (visible on dashboard)
5. Go to Settings > API Keys
6. Copy API Key and API Secret
7. Add to .env file as CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET
```

#### 3. Razorpay Setup (For Indian Payments)
```
1. Visit https://razorpay.com
2. Sign up with email
3. Go to Dashboard > Settings > API Keys
4. Copy Key ID and Key Secret
5. Add to .env as RAZORPAY_KEY_ID and RAZORPAY_SECRET
6. For testing, use:
   - Test Mode: Enabled
   - Test UPI ID: success@razorpay
   - Test Cards: Available in documentation
```

#### 4. JWT Secret Generation
```bash
# In Node.js or terminal
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
# Use this output as your JWT_SECRET
```

---

## Database Setup

### MongoDB Connection Flow

```
User Registration/Login
        ↓
Express Route Handler
        ↓
Mongoose Model
        ↓
MongoDB Database
```

### Initial Database Seeding

The project includes a seeder script to populate initial product data:

```bash
# From backend directory
npm run seed

# This runs seeder.js which:
# 1. Connects to MongoDB
# 2. Clears existing products (optional)
# 3. Inserts initial product data from data/products.js
# 4. Disconnects from database
```

### Database Models

#### User Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (hashed with bcrypt, min 6 chars),
  role: String (enum: "customer" or "admin", default: "customer"),
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

#### Product Model
```javascript
{
  name: String,
  description: String,
  price: Number,
  discountPrice: Number (optional),
  countInStock: Number,
  sku: String (unique),
  category: String,
  brand: String,
  sizes: [String],
  colors: [String],
  collections: String,
  material: String,
  gender: String (enum: "Men", "Women", "Unisex"),
  images: [{
    url: String (Cloudinary URL),
    public_id: String (Cloudinary ID for deletion)
  }],
  ratings: Number,
  numReviews: Number,
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

#### Order Model
```javascript
{
  user: ObjectId (reference to User),
  orderItems: [{
    productId: ObjectId (reference to Product),
    name: String,
    image: String (Cloudinary URL),
    price: Number,
    size: String,
    color: String,
    quantity: Number
  }],
  shippingAddress: {
    address: String,
    city: String,
    postalCode: String,
    country: String
  },
  paymentMethod: String,
  totalPrice: Number,
  isPaid: Boolean (default: false),
  paidAt: Date (when payment confirmed),
  isDelivered: Boolean (default: false),
  deliveredAt: Date,
  paymentStatus: String (default: "pending"),
  status: String (enum: "processing", "shipped", "delivered", "cancelled"),
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

---

## API Endpoints

### Authentication Routes (`/api/users`)
```
POST   /api/users/register      - Register new user
POST   /api/users/login         - Login user
GET    /api/users/profile       - Get current user profile (protected)
PUT    /api/users/profile       - Update user profile (protected)
GET    /api/users               - Get all users (admin only)
PUT    /api/users/:id           - Update user (admin only)
DELETE /api/users/:id           - Delete user (admin only)
```

### Product Routes (`/api/products`)
```
GET    /api/products            - Get all products with filters, sort, search
GET    /api/products/:id        - Get single product details
GET    /api/products/search     - Search products by name or category
```

### Admin Product Routes (`/api/admin/products`)
```
POST   /api/admin/products      - Create new product (admin only)
PUT    /api/admin/products/:id  - Update product (admin only)
DELETE /api/admin/products/:id  - Delete product (admin only)
```

### Cart Routes (`/api/cart`)
```
POST   /api/cart/add            - Add item to cart (protected)
GET    /api/cart                - Get current user's cart (protected)
PUT    /api/cart/:itemId        - Update cart item quantity (protected)
DELETE /api/cart/:itemId        - Remove item from cart (protected)
DELETE /api/cart                - Clear entire cart (protected)
```

### Checkout Routes (`/api/checkout`)
```
POST   /api/checkout            - Create checkout session (protected)
GET    /api/checkout/:id        - Get checkout session (protected)
PUT    /api/checkout/:id        - Update checkout session (protected)
```

### Order Routes (`/api/orders`)
```
POST   /api/orders              - Create order after payment (protected)
GET    /api/orders              - Get user's orders (protected)
GET    /api/orders/:id          - Get single order details (protected)
PUT    /api/orders/:id          - Update order (protected)
```

### Admin Order Routes (`/api/admin/orders`)
```
GET    /api/admin/orders        - Get all orders (admin only)
PUT    /api/admin/orders/:id    - Update order status (admin only)
GET    /api/admin/orders/:id    - Get order details (admin only)
```

### Payment Routes (`/api/payment`)
```
POST   /api/payment/create-order   - Create Razorpay order (protected)
POST   /api/payment/verify         - Verify payment (protected)
```

### Upload Routes (`/api/upload`)
```
POST   /api/upload              - Upload image to Cloudinary (admin only)
                                 - Returns: { imageUrl: "cloudinary_url" }
```

---

## Frontend Implementation

### State Management with Redux

The application uses Redux Toolkit for centralized state management:

```
┌─────────────────────────────────────┐
│       Redux Store (store.js)         │
├─────────────────────────────────────┤
│  ├─ auth: User login state          │
│  ├─ products: Product listing       │
│  ├─ cart: Shopping cart items       │
│  ├─ checkout: Checkout form data    │
│  ├─ orders: User's orders           │
│  ├─ admin: Admin dashboard state    │
│  ├─ adminProducts: Product CRUD     │
│  └─ adminOrders: Order management   │
└─────────────────────────────────────┘
         ↑          ↑          ↑
    Components  Containers  Pages
```

### Redux Thunk for Async Operations

Redux Thunk is middleware that enables Redux to handle asynchronous API calls:

```javascript
// Example async thunk action (from cartSlice)
export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (cartData) => {
    const response = await axios.post('/api/cart/add', cartData);
    return response.data;
  }
);
```

### Authentication Flow

```
User Registration
   ↓
Frontend sends POST /api/users/register
   ↓
Backend hashes password with bcrypt
   ↓
User saved to MongoDB
   ↓
JWT token generated and sent to frontend
   ↓
Token stored in Redux store
   ↓
Token sent in Authorization header for protected routes
```

### Routing Structure (React Router v7)

```javascript
<BrowserRouter>
  <Routes>
    {/* User Routes */}
    <Route path="/" element={<UserLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="profile" element={<Profile />} />
      <Route path="collections/:collection" element={<CollectionPage />} />
      <Route path="product/:id" element={<ProductDetails />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="my-orders" element={<MyOrdersPage />} />
    </Route>
    
    {/* Admin Routes */}
    <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
      <Route index element={<AdminHomePage />} />
      <Route path="users" element={<UserManagement />} />
      <Route path="products" element={<ProductManagement />} />
      <Route path="products/:id/edit" element={<EditProductPage />} />
      <Route path="orders" element={<OrderManagement />} />
    </Route>
  </Routes>
</BrowserRouter>
```

### Key Components

#### ProtectedRoute Component
Wraps routes that require authentication:
```javascript
<Route path="/profile" element={
  <ProtectedRoute>
    <Profile />
  </ProtectedRoute>
} />
```

#### CartDrawer Component
Slide-out menu showing cart items with animations

#### SearchBar Component
Real-time product search with debouncing

#### RazorpayButton Component
Payment integration component with Razorpay SDK

---

## Backend Implementation

### Express.js Middleware Stack

```javascript
app.use(cors());              // Enable cross-origin requests
app.use(express.json());      // Parse JSON bodies
                              // Custom auth middleware per route
app.use('/api/admin/...', protect, admin);  // Admin protection
```

### Authentication Middleware

The `protect` middleware verifies JWT tokens:

```javascript
const protect = async (req, res, next) => {
  let token;
  
  // Extract token from Authorization header
  if (req.headers.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    
    try {
      // Verify token and attach user to request
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.user.id).select("-password");
      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized" });
    }
  } else {
    res.status(401).json({ message: "No token provided" });
  }
};
```

### Password Hashing with bcryptjs

Before saving a user, Mongoose middleware hashes the password:

```javascript
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  
  const salt = await bcrypt.genSalt(10);  // 10 rounds of processing
  this.password = await bcrypt.hash(this.password, salt);
});

// Compare password during login
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
```

### Error Handling Pattern

```javascript
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Validation
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }
    
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }
    
    // Create user
    const user = new User({ name, email, password });
    await user.save();
    
    // Generate token
    const token = jwt.sign({ user: { id: user._id } }, process.env.JWT_SECRET);
    
    res.status(201).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
```

---

## Payment Gateway Integration

### Razorpay Integration

#### Payment Flow

```
1. Customer clicks "Pay Now" on checkout
   ↓
2. Frontend calls /api/payment/create-order with amount
   ↓
3. Backend creates Razorpay order using API key
   ↓
4. Backend returns order ID to frontend
   ↓
5. Frontend opens Razorpay checkout modal with order ID
   ↓
6. Customer enters payment details (UPI, card, etc.)
   ↓
7. Razorpay processes payment
   ↓
8. Payment gateway returns success/failure callback
   ↓
9. Frontend verifies payment on backend
   ↓
10. Backend creates order record in MongoDB
   ↓
11. Customer sees order confirmation
```

#### Backend Payment Endpoint

```javascript
// POST /api/payment/create-order
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

router.post('/create-order', async (req, res) => {
  try {
    const { amount } = req.body;  // amount in INR
    
    const order = await razorpay.orders.create({
      amount: amount * 100,         // Razorpay expects amount in paise
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    });
    
    res.json(order);  // Return order object with order ID
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

#### Frontend Payment Component

The `RazorpayButton.jsx` component:
1. Loads Razorpay SDK
2. Creates order from backend
3. Opens Razorpay modal
4. Handles payment response
5. Creates order in database upon success

#### Testing Razorpay (India Only)

```
Sandbox Mode Testing:
- Go to Razorpay Dashboard
- Switch to Test mode (toggle in sidebar)
- Use test credentials
- Test Payment:
  - UPI ID: success@razorpay
  - Amount: Any amount
  - Click "Complete" to simulate success
```

#### Alternative: PayPal Integration

Note: PayPal is configured but has sandbox restrictions in India.

```javascript
// PayPal requires @paypal/react-paypal-js package
// Endpoints:
// POST /api/payment/paypal-order
// POST /api/payment/paypal-capture
```

---

## Image Upload & Storage

### Cloudinary Integration

#### Upload Flow

```
User selects image
   ↓
Frontend sends multipart form-data to /api/upload
   ↓
Multer receives file (memory storage)
   ↓
Streamifier converts buffer to stream
   ↓
Cloudinary upload stream processes image
   ↓
Cloudinary returns secure_url and public_id
   ↓
Backend returns URL to frontend
   ↓
Frontend displays preview
   ↓
URL stored in MongoDB when product is saved
```

#### Backend Upload Route

```javascript
// POST /api/upload
router.post('/', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    
    // Setup Cloudinary
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    
    // Upload to Cloudinary
    const result = await streamUpload(req.file.buffer);
    
    // Return Cloudinary URL
    res.json({ imageUrl: result.secure_url });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});
```

#### Multer Configuration

```javascript
// Memory storage: file kept in RAM during request
const storage = multer.memoryStorage();
const upload = multer({ 
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },  // 5MB limit
  fileFilter: (req, file, cb) => {
    // Only accept images
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files allowed'));
    }
  }
});
```

#### Cloudinary Organization

```
Dashboard Organization:
  ├─ Public folder: Product images, banner images
  ├─ Naming: product-{id}-{timestamp}
  └─ Automatic delivery via CDN with fast caching
```

### Image Optimization

Cloudinary automatically optimizes images:
- Resizes to multiple widths
- Converts to next-gen formats (WebP)
- Applies compression
- Serves from closest CDN edge

---

## Authentication & Authorization

### JWT (JSON Web Token) Implementation

#### Token Structure

```
Header.Payload.Signature

Header: { type: "JWT", alg: "HS256" }
Payload: { user: { id: "user_id" }, iat: timestamp, exp: timestamp }
Signature: HMACSHA256(header.payload, JWT_SECRET)
```

#### Token Generation (Login)

```javascript
const token = jwt.sign(
  { user: { id: user._id } },        // Payload
  process.env.JWT_SECRET,            // Secret
  { expiresIn: '7d' }               // Options (7 days expiration)
);
```

#### Token Storage (Frontend)

```javascript
// Redux auth slice stores token
localStorage.setItem('token', token);  // Also persist in localStorage
```

#### Token Verification (Protected Routes)

```
Request Header:
  Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

Middleware intercepts request
   ↓
Extracts token from header
   ↓
Verifies token signature with JWT_SECRET
   ↓
If valid, extracts user ID from payload
   ↓
Fetches user from database
   ↓
Attaches user to req.user
```

### Authorization Levels

#### Customer Routes (Authenticated Users)
```javascript
router.post('/api/orders', protect, createOrder);  // Any logged-in user
```

#### Admin Routes (Authenticated + Admin Role)
```javascript
router.delete('/api/admin/products/:id', protect, admin, deleteProduct);
// Checks: 1) Token valid, 2) User role = "admin"
```

### Logout Implementation

```javascript
// Frontend: Clear from Redux and localStorage
logout: (state) => {
  state.token = null;
  state.user = null;
  localStorage.removeItem('token');
}
```

---

## Running the Application

### Start Backend Server

```bash
# From backend directory
npm run dev

# This uses nodemon which:
# - Watches for file changes
# - Auto-restarts server on save
# - Useful for development

# Or for production:
npm start
```

**Expected Output:**
```
Server running on port 9000
MongoDB connected successfully!
```

### Start Frontend Development Server

```bash
# From frontend directory
npm run dev

# Vite dev server features:
# - Fast hot module replacement (HMR)
# - Instant updates on file save
# - Native ES module loading

# Expected Output:
# VITE v7.2.4  ready in 432 ms
# ➜  Local:   http://localhost:5173/
```

### Full Application Startup Sequence

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
# Wait for "MongoDB connected successfully!"
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
# Navigate to http://localhost:5173
```

**Application is ready at:** http://localhost:5173

### Accessing Admin Panel

1. Create admin account (manually update role in MongoDB):
```javascript
db.users.updateOne(
  { email: "admin@example.com" },
  { $set: { role: "admin" } }
)
```

2. Login with admin account
3. Navigate to `/admin` route
4. Access admin dashboard for user/product/order management

### Building for Production

**Frontend:**
```bash
cd frontend
npm run build

# Creates optimized build in dist/ folder
# Ready for deployment to Vercel, Netlify, etc.
```

**Backend:**
```bash
cd backend
npm start

# Uses production server
# Connect to production MongoDB Atlas cluster
# Set NODE_ENV=production in .env
```

---

## Key Concepts & Design Patterns

### 1. Single Page Application (SPA)

**Traditional Website:**
```
Click Link → Browser requests → Full page reload → DOM replaced
(Slower, full network request, full re-render)
```

**React SPA:**
```
Click Link → Router handles → Component swapped → Only affected area updates
(Faster, no full reload, partial re-render)
```

### 2. Redux State Management

**Problem Solved:** Prop Drilling
```javascript
// Without Redux (prop drilling):
<GrandParent cart={cart}>
  <Parent cart={cart}>
    <Child cart={cart} />
  </Parent>
</GrandParent>

// With Redux:
const cart = useSelector(state => state.cart);
// Accessible from any component
```

### 3. Separation of Concerns

- **Components:** UI rendering only
- **Redux Slices:** State logic
- **API Routes:** Backend logic
- **Models:** Data schema and validation
- **Middleware:** Cross-cutting concerns (auth, logging)

### 4. Middleware Pattern

```
Request → Middleware 1 → Middleware 2 → Route Handler → Response
          (CORS)        (Auth)         (Business logic)
```

### 5. Client-Server Architecture

```
Frontend (React)                Backend (Express)
├─ Components                  ├─ Routes
├─ Redux Store        ←HTTP→   ├─ Middleware
├─ API Calls                   ├─ Models
└─ Routing                     ├─ Controllers
                               └─ Database
```

### 6. Token-Based Authentication

```javascript
// Stateless: No sessions stored on server
// Each request includes token
// Server validates token without storing session
// Scalable across multiple servers/containers
```

### 7. Async/Await Pattern

```javascript
// Redux Thunk enables async actions
const fetchProducts = createAsyncThunk('products/fetchAll', async () => {
  const response = await axios.get('/api/products');
  return response.data;  // Automatically becomes action payload
});
```

### 8. Controlled Components (React)

```javascript
const [email, setEmail] = useState('');

<input 
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
// Form state always in React state, never in DOM
```

---

## Troubleshooting Guide

### Common Issues

#### Port Already in Use
```bash
# Port 9000 (backend) or 5173 (frontend) in use
# Windows:
netstat -ano | findstr :9000
taskkill /PID <PID> /F

# macOS/Linux:
lsof -i :9000
kill -9 <PID>
```

#### MongoDB Connection Fails
```
Error: "MongoDB connection failed"
Solution:
1. Check MONGO_URI in .env is correct
2. Ensure IP whitelist includes your IP (MongoDB Atlas)
3. Verify username/password are correct
4. Check cluster is not paused
```

#### Cloudinary Upload Fails
```
Error: "401 Unauthorized"
Solution:
1. Verify CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET
2. Check cloud_name is correct
3. Ensure environment variables are loaded (restart server)
```

#### JWT Token Errors
```
Error: "Token verification failed"
Solution:
1. Verify JWT_SECRET matches between sessions
2. Check token hasn't expired (7 days)
3. Clear localStorage and re-login
```

#### CORS Errors
```
Error: "Access to XMLHttpRequest blocked by CORS"
Solution:
1. Ensure cors() middleware is before routes
2. Check frontend URL is allowed
3. Verify API_BASE_URL in .env.local matches backend port
```
---

## Deployment

### Frontend Deployment (Vercel)
```bash
npm run build
# Deploy dist/ folder to Vercel
# Auto-deploys on git push
```

### Backend Deployment (Render/Railway)
```bash
# Push code to GitHub
# Connect repository to Render
# Set environment variables
# Deploy
```

---

## Project Statistics

- **Total Dependencies:** 50+
- **Frontend Components:** 20+
- **Backend Routes:** 40+
- **Database Models:** 6
- **API Endpoints:** 50+
- **Lines of Code:** 5000+
- **Development Time:** ~30-40 hours (from tutorial)

---

## Future Enhancements or Expansion Ideas

- Email verification and password reset
- Product reviews and ratings system
- Wishlist/favorites feature
- Advanced search with Elasticsearch
- Order tracking with real-time updates (WebSocket)
- Inventory management and low stock alerts
- Analytics and reporting dashboard
- User recommendations (ML-based)
- Multi-language support (i18n)
- Dark mode theme

---

## Contact
- Project author: [Aravind A Kamath](https://github.com/aravindanirudh)