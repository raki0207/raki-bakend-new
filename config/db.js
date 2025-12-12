const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URL) {
      throw new Error("MONGO_URL is not defined in .env file");
    }
    
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ MongoDB Connected Successfully");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    console.error("💡 Make sure:");
    console.error("   1. .env file exists with MONGO_URL");
    console.error("   2. MongoDB Atlas IP is whitelisted");
    console.error("   3. Username and password are correct");
    // Don't exit process - let server start and show error
  }
};

module.exports = connectDB;
