import React, { useState } from "react";
import axios from "axios";

export default function Booking() {
  const [form, setForm] = useState({
    name: "", phone: "", service: "", date: "", time: "", address: ""
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/bookings", form);
    alert("Booking successful!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Book a Service</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" onChange={handleChange} required />
        <input name="phone" placeholder="Phone" onChange={handleChange} required />
        <input name="service" placeholder="Service Type" onChange={handleChange} required />
        <input name="date" type="date" onChange={handleChange} required />
        <input name="time" type="time" onChange={handleChange} required />
        <textarea name="address" placeholder="Address" onChange={handleChange}></textarea>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}
