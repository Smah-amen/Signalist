const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/testdb";

async function testDB() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("✅ Database connected successfully");
    process.exit(0);
  } catch (error) {
    console.error("❌ Database connection failed");
    console.error(error);
    process.exit(1);
  }
}

testDB();
