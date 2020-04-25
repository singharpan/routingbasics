import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <React.Fragment>
      <ul>
        <li class="active">
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Navbar;
