import express from "express";
import { db } from "../db.js";

const router = express.Router();

router.post("/", (req, res) => {
  const { name, phone, service, date, time, address } = req.body;
  const q = "INSERT INTO bookings (name, phone, service, date, time, address) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(q, [name, phone, service, date, time, address], (err) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json({ message: "Booking saved successfully!" });
  });
});

router.get("/", (req, res) => {
  db.query("SELECT * FROM bookings", (err, data) => {
    if (err) return res.status(500).json({ error: "Fetch error" });
    res.json(data);
  });
});

export default router;
