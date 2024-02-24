import React, { useState } from "react";
import { Link } from "react-router-dom";
styleComp = { color: "grey" };
const Navbar = () => {
  //let logginStatus = "Login";
  const [logginStatus, setLogginStatus] = useState("Login");

  return (
    <div className="header">
      <div>
        <Link to="/">
          <img
            className="logo"
            src="https://img.freepik.com/free-vector/vintage-restaurant-menu_23-2147491098.jpg"
            alt="logo"
          />
        </Link>
      </div>
      <div className="nav-header">
        <ul>
          <li>
            <h1>Search</h1>
          </li>
          <li>
            <h1>Offer</h1>
          </li>
          <li>
            <Link to="/help">
              <h1>Help</h1>
            </Link>
          </li>
          <li style={styleComp}>
            <button
              onClick={() => {
                if (logginStatus === "Login") {
                  setLogginStatus("Logout");
                } else {
                  setLogginStatus("Login");
                }
              }}
            >
              {logginStatus}
            </button>
          </li>
          <li>
            <Link to="/cart">
              <h1>Cart</h1>
            </Link>
          </li>
          <li>
            <Link to="/ourteam">
              <h1>Our Team</h1>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
