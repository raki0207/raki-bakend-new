/**
 * Script to seed the database with sample products
 * Run this with: node scripts/seedDatabase.js
 */

require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product');
const products = require('../data/seedProducts');

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URL);
    console.log('✅ Connected to MongoDB');

    // Clear existing products (optional - comment out if you want to keep existing data)
    await Product.deleteMany({});
    console.log('✅ Cleared existing products');

    // Insert products
    const insertedProducts = await Product.insertMany(products);
    console.log(`✅ Inserted ${insertedProducts.length} products`);

    // Close connection
    await mongoose.connection.close();
    console.log('✅ Database seeding completed!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase();

