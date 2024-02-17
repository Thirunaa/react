import React from "react";

styleComp = { color: "grey" };
const Navbar = () => {
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
            <h1>Sign in</h1>
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
