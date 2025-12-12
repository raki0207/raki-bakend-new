const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

/**
 * Helper function to convert specifications Map to plain object
 */
const convertSpecifications = (specs) => {
  if (!specs) {
    return {};
  }
  
  // If it's already a Map, convert it
  if (specs instanceof Map) {
    return Object.fromEntries(specs);
  }
  
  // If it's an object, ensure it's a plain object
  if (typeof specs === 'object' && specs !== null && !Array.isArray(specs)) {
    return { ...specs };
  }
  
  // Default to empty object
  return {};
};

/**
 * Build a fully qualified image URL that the frontend can consume
 * Supports: Local serving, external URLs, and Cloudinary CDN
 */
const buildImageUrl = (imagePath, req) => {
  if (!imagePath) {
    return '';
  }

  // Already a full URL (external hosting, Cloudinary, etc.)
  if (/^https?:\/\//i.test(imagePath)) {
    return imagePath;
  }

  // Option 1: Cloudinary CDN (if configured)
  if (process.env.CLOUDINARY_CLOUD_NAME) {
    const imageName = imagePath.replace(/^\//, '').replace(/\.[^.]+$/, '');
    return `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/bakery/${imageName}`;
  }

  // Option 2: Local/self-hosted serving
  const baseUrl =
    (process.env.ASSET_BASE_URL && process.env.ASSET_BASE_URL.replace(/\/$/, '')) ||
    `${req.protocol}://${req.get('host')}`;
  const mediaPrefix = (process.env.MEDIA_URL_PREFIX || '/media').replace(/\/$/, '');
  const normalizedImagePath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;

  return `${baseUrl}${mediaPrefix}${normalizedImagePath}`;
};

/**
 * Normalize mongoose product doc for API responses
 */
const formatProductResponse = (product, req) => {
  const productObj = product.toObject({ flattenMaps: true });
  productObj.id = productObj._id.toString();
  productObj.specifications = convertSpecifications(productObj.specifications);
  productObj.image = buildImageUrl(productObj.image, req);
  return productObj;
};

/**
 * @route   GET /api/products
 * @desc    Get all products with optional filters
 * @access  Public
 */
router.get('/', async (req, res) => {
  try {
    const { category, search, featured, type, page = 1, limit = 100 } = req.query;
    
    // Build query object
    const query = {};
    
    // Filter by category
    if (category && category !== 'All Products') {
      query.category = category;
    }
    
    // Filter by featured
    if (featured === 'true') {
      query.featured = true;
    }
    
    // Filter by product type (just-arrived, just-baked)
    if (type) {
      query.productType = type;
    }
    
    // Search functionality
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { category: { $regex: search, $options: 'i' } },
        { shortDescription: { $regex: search, $options: 'i' } }
      ];
    }
    
    // Calculate pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    // Execute query
    const products = await Product.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));
    
    // Map _id to id for frontend compatibility
    const productsWithId = products.map(product => formatProductResponse(product, req));
    
    // Get total count for pagination
    const total = await Product.countDocuments(query);
    
    res.json({
      products: productsWithId,
      total,
      page: parseInt(page),
      limit: parseInt(limit),
      totalPages: Math.ceil(total / parseInt(limit))
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ 
      message: 'Error fetching products', 
      error: error.message 
    });
  }
});

/**
 * @route   GET /api/products/search
 * @desc    Search products by query
 * @access  Public
 */
router.get('/search', async (req, res) => {
  try {
    const { q } = req.query;
    
    if (!q || q.trim().length === 0) {
      return res.json({ products: [], total: 0 });
    }
    
    const query = {
      $or: [
        { name: { $regex: q, $options: 'i' } },
        { category: { $regex: q, $options: 'i' } },
        { shortDescription: { $regex: q, $options: 'i' } },
        { fullDescription: { $regex: q, $options: 'i' } }
      ]
    };
    
    const products = await Product.find(query).limit(50);
    
    // Map _id to id for frontend compatibility
    const productsWithId = products.map(product => formatProductResponse(product, req));
    
    const total = await Product.countDocuments(query);
    
    res.json({
      products: productsWithId,
      total,
      query: q
    });
  } catch (error) {
    console.error('Error searching products:', error);
    res.status(500).json({ 
      message: 'Error searching products', 
      error: error.message 
    });
  }
});

/**
 * @route   GET /api/products/:id
 * @desc    Get single product by ID
 * @access  Public
 */
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    // Map _id to id for frontend compatibility
    const productObj = formatProductResponse(product, req);
    
    res.json(productObj);
  } catch (error) {
    console.error('Error fetching product:', error);
    
    if (error.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid product ID' });
    }
    
    res.status(500).json({ 
      message: 'Error fetching product', 
      error: error.message 
    });
  }
});

/**
 * @route   POST /api/products
 * @desc    Create a new product
 * @access  Private (Admin only - add authentication later)
 */
router.post('/', async (req, res) => {
  try {
    // Ensure updatedAt is set
    const productData = {
      ...req.body,
      updatedAt: Date.now()
    };
    const product = new Product(productData);
    const savedProduct = await product.save();
    const productObj = formatProductResponse(savedProduct, req);
    res.status(201).json(productObj);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(400).json({ 
      message: 'Error creating product', 
      error: error.message 
    });
  }
});

/**
 * @route   PUT /api/products/:id
 * @desc    Update a product
 * @access  Private (Admin only - add authentication later)
 */
router.put('/:id', async (req, res) => {
  try {
    // Ensure updatedAt is set
    const updateData = {
      ...req.body,
      updatedAt: Date.now()
    };
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    const productObj = formatProductResponse(product, req);
    
    res.json(productObj);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(400).json({ 
      message: 'Error updating product', 
      error: error.message 
    });
  }
});

/**
 * @route   DELETE /api/products/:id
 * @desc    Delete a product
 * @access  Private (Admin only - add authentication later)
 */
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    res.json({ message: 'Product deleted successfully', product });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ 
      message: 'Error deleting product', 
      error: error.message 
    });
  }
});

module.exports = router;

