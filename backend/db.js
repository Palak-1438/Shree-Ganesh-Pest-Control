import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully!"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err));

mongodb+srv://prkashdusiya_db_user:mDyVlNbBJUMWbb3s@sgpestcontrol.qpe3pq3.mongodb.net/?appName=SGPestcontrol
