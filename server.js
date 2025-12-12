const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const connectDB = require("./config/db");

// Import routes
const productRoutes = require("./routes/productRoutes");

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve product images from the shared public folder
const staticAssetsDir = process.env.STATIC_ASSETS_DIR 
  ? path.resolve(process.env.STATIC_ASSETS_DIR)
  : path.join(__dirname, "..", "public");
app.use(
  "/media",
  express.static(staticAssetsDir, {
    maxAge: "30d",
    setHeaders: (res) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
    },
  })
);

// Connect to MongoDB
connectDB();

// Routes
app.get("/", (req, res) => {
  res.json({ 
    message: "Backend API is Running!",
    version: "1.0.0",
    endpoints: {
      products: "/api/products",
      productById: "/api/products/:id",
      search: "/api/products/search?q=query"
    }
  });
});

// API Routes
app.use("/api/products", productRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: "Something went wrong!", 
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 API URL: http://localhost:${PORT}/api`);
  console.log(`📦 Products API: http://localhost:${PORT}/api/products`);
  console.log(
    `🖼️  Serving product media from ${staticAssetsDir} at http://localhost:${PORT}/media`
  );
});
