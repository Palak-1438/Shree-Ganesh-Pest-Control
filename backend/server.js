import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectDB() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("✅ MongoDB Connected Successfully!");
  } catch (err) {
    console.error("❌ MongoDB Connection Failed:", err);
  }
}

connectDB();

const db = client.db("sg_pestcontrol");
const bookings = db.collection("bookings");

// 📦 POST: create a booking
app.post("/api/bookings", async (req, res) => {
  try {
    const booking = req.body;
    const result = await bookings.insertOne(booking);
    res.status(201).json({ message: "Booking saved!", id: result.insertedId });
  } catch (err) {
    res.status(500).json({ error: "Failed to save booking." });
  }
});

// 📦 GET: fetch all bookings
app.get("/api/bookings", async (req, res) => {
  const allBookings = await bookings.find({}).toArray();
  res.json(allBookings);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
