import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ 
      background: "#4CAF50", 
      padding: "10px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }}>
      <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
        <img src="/logo.png" alt="Shree Ganesh Pest Control" style={{ height: "50px", marginRight: "15px" }} />
      </Link>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ margin: "10px", color: "white", textDecoration: "none", fontSize: "16px" }}>Home</Link>
        <Link to="/services" style={{ margin: "10px", color: "white", textDecoration: "none", fontSize: "16px" }}>Services</Link>
        <Link to="/booking" style={{ margin: "10px", color: "white", textDecoration: "none", fontSize: "16px" }}>Book Now</Link>
      </div>
    </nav>
  );
}
