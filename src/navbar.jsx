import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom"; //this is navigational component
//If we use direct "href" to navigate the page ....It will reload the page...which is wrong way of doing things
//therefore we use Navigational Componnets of React-router for Page Navigation
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
