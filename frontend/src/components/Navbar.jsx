import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ background: "#4CAF50", padding: "10px" }}>
      <Link to="/" style={{ margin: "10px", color: "white" }}>Home</Link>
      <Link to="/services" style={{ margin: "10px", color: "white" }}>Services</Link>
      <Link to="/booking" style={{ margin: "10px", color: "white" }}>Book Now</Link>
    </nav>
  );
}
