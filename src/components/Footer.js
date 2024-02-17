import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f5f5f5", padding: "24px 0", textAlign: "center" }}>
      <div style={{ marginBottom: "16px" }}>
        <span style={{ marginRight: "3px", color: "#757575", fontSize: "14px" }}>All rights reserved!</span>
        <span style={{ color: "#757575", fontSize: "14px" }}>
          Copyright ©<p style={{ marginLeft: "3px", color: "#1976d2", textDecoration: "none" }}>FoodAppify</p>
          {new Date().getFullYear()}
          {"."}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
