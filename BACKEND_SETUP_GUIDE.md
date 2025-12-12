# 🚀 Complete Backend Setup Guide

This guide will help you set up your backend server from scratch, step by step.

## 📋 Prerequisites

Before starting, make sure you have:
- **Node.js** installed (version 14 or higher)
- **npm** (comes with Node.js)
- A code editor (VS Code recommended)
- Internet connection

---

## 🎯 Step 1: Install Node.js (If Not Installed)

### Check if Node.js is installed:
Open your terminal/command prompt and type:
```bash
node --version
npm --version
```

If you see version numbers, you're good! Skip to Step 2.

### If Node.js is NOT installed:

1. **Download Node.js:**
   - Go to: https://nodejs.org/
   - Download the **LTS version** (recommended)
   - Run the installer
   - Follow the installation wizard (click "Next" through all steps)

2. **Verify Installation:**
   - Close and reopen your terminal
   - Run: `node --version` and `npm --version`
   - You should see version numbers

---

## 🎯 Step 2: Navigate to Backend Folder

Open your terminal/command prompt and navigate to the backend-server folder:

```bash
cd "C:\Users\User\Desktop\Nefway documents\raki\rakesh-three\raki-bakery\backend-server"
```

Or if you're already in the project root:
```bash
cd backend-server
```

---

## 🎯 Step 3: Install Dependencies

Install all required packages:

```bash
npm install
```

This will install:
- Express (web server framework)
- Mongoose (MongoDB database)
- CORS (for cross-origin requests)
- dotenv (for environment variables)

**Wait for installation to complete** (may take 1-2 minutes)

---

## 🎯 Step 4: Set Up MongoDB Database

You have **TWO options** for MongoDB:

### Option A: MongoDB Atlas (Cloud - FREE & RECOMMENDED) ⭐

**Best for beginners - No installation needed!**

1. **Create Free Account:**
   - Go to: https://www.mongodb.com/cloud/atlas/register
   - Sign up with email (it's free!)

2. **Create a Free Cluster:**
   - Click "Build a Database"
   - Choose "FREE" (M0 Sandbox)
   - Select a cloud provider and region (choose closest to you)
   - Click "Create"

3. **Create Database User:**
   - Go to "Database Access" → "Add New Database User"
   - Username: `bakeryuser` (or any name)
   - Password: Click "Autogenerate Secure Password" (SAVE THIS PASSWORD!)
   - Database User Privileges: "Read and write to any database"
   - Click "Add User"

4. **Whitelist Your IP:**
   - Go to "Network Access" → "Add IP Address"
   - Click "Add Current IP Address" (or "Allow Access from Anywhere" for development)
   - Click "Confirm"

5. **Get Connection String:**
   - Go to "Database" → Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - It looks like: `mongodb+srv://bakeryuser:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`
   - **Replace `<password>` with your actual password**

### Option B: Local MongoDB (Advanced)

1. Download MongoDB Community Server: https://www.mongodb.com/try/download/community
2. Install and start MongoDB service
3. Use connection string: `mongodb://localhost:27017/bakery-db`

---

## 🎯 Step 5: Configure Environment Variables

1. **Create `.env` file:**
   - In the `backend-server` folder, create a new file named `.env`
   - Copy the content from `.env.example` (if it exists)

2. **Add your MongoDB connection:**
   Open `.env` file and add:

```env
PORT=5000
MONGO_URL=mongodb+srv://bakeryuser:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/bakery-db?retryWrites=true&w=majority
NODE_ENV=development
```

**Replace `YOUR_PASSWORD` and the cluster URL with your actual MongoDB Atlas connection string.**

**Example:**
```env
PORT=5000
MONGO_URL=mongodb+srv://bakeryuser:abc123xyz@cluster0.abcde.mongodb.net/bakery-db?retryWrites=true&w=majority
NODE_ENV=development
```

---

## 🎯 Step 6: Seed the Database (Add Sample Products)

Run this command to add sample products to your database:

```bash
npm run seed
```

You should see:
```
✅ Connected to MongoDB
✅ Cleared existing products
✅ Inserted X products
✅ Database seeding completed!
```

---

## 🎯 Step 7: Start the Server

Start your backend server:

```bash
npm start
```

You should see:
```
🚀 Server running on port 5000
📍 API URL: http://localhost:5000/api
📦 Products API: http://localhost:5000/api/products
```

**Keep this terminal window open!** The server needs to keep running.

---

## 🎯 Step 8: Test the API

Open your browser and visit:
- http://localhost:5000/ - Should show API info
- http://localhost:5000/api/products - Should show all products

Or test in terminal:
```bash
curl http://localhost:5000/api/products
```

---

## 🎯 Step 9: Update Frontend to Use Backend

1. **Create `.env` file in project root** (not in backend-server):
   ```env
   REACT_APP_API_BASE_URL=http://localhost:5000/api
   ```

2. **Restart React dev server:**
   ```bash
   # In a NEW terminal window, go to project root
   cd ..
   npm start
   ```

---

## 📁 Project Structure

```
backend-server/
├── config/
│   └── db.js              # Database connection
├── models/
│   └── Product.js         # Product data model
├── routes/
│   └── productRoutes.js  # Product API routes
├── data/
│   └── seedProducts.js   # Sample product data
├── scripts/
│   └── seedDatabase.js   # Script to seed database
├── server.js             # Main server file
├── package.json          # Dependencies
└── .env                  # Environment variables (create this)
```

---

## 🔧 Available API Endpoints

Once your server is running:

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `GET /api/products?category=Cakes` - Filter by category
- `GET /api/products?featured=true&type=just-arrived` - Get just arrived
- `GET /api/products?featured=true&type=just-baked` - Get just baked
- `GET /api/products/search?q=chocolate` - Search products
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

---

## 🐛 Troubleshooting

### Problem: "Cannot find module"
**Solution:** Run `npm install` again in the backend-server folder

### Problem: "MongoDB connection failed"
**Solution:** 
- Check your `.env` file has correct MONGO_URL
- Make sure MongoDB Atlas IP is whitelisted
- Verify username and password are correct

### Problem: "Port 5000 already in use"
**Solution:** Change PORT in `.env` to another number (e.g., 5001)

### Problem: "npm: command not found"
**Solution:** Node.js is not installed. Go back to Step 1.

### Problem: Server starts but API returns empty array
**Solution:** Run `npm run seed` to add products to database

---

## 🚀 Development Tips

### Auto-restart on file changes:
Install nodemon for automatic server restart:
```bash
npm install --save-dev nodemon
```

Then use:
```bash
npm run dev
```

### Check if MongoDB is connected:
Look for "MongoDB Connected" message when server starts

### View database:
- MongoDB Atlas: Go to "Database" → "Browse Collections"
- Or use MongoDB Compass (desktop app)

---

## ✅ Checklist

- [ ] Node.js installed
- [ ] Navigated to backend-server folder
- [ ] Ran `npm install`
- [ ] Created MongoDB Atlas account (or local MongoDB)
- [ ] Created `.env` file with MONGO_URL
- [ ] Ran `npm run seed` to add products
- [ ] Started server with `npm start`
- [ ] Tested API in browser
- [ ] Updated frontend `.env` with API URL

---

## 🎉 You're Done!

Your backend is now running! The frontend can now fetch products from your API.

**Next Steps:**
1. Keep backend server running (terminal 1)
2. Start frontend server (terminal 2)
3. Test the integration

**Need Help?**
- Check the console for error messages
- Verify all environment variables are set
- Make sure MongoDB is connected
- Test API endpoints directly in browser

Good luck! 🚀

