import React, { useState } from "react";

styleComp = { color: "grey" };
const Navbar = () => {
  //let logginStatus = "Login";
  const [logginStatus, setLogginStatus] = useState("Login");

  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/vintage-restaurant-menu_23-2147491098.jpg"
          alt="logo"
        />
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
            <h1>Help</h1>
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
            <h1>Cart</h1>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
