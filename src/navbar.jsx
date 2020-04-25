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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="products">Products</Link>
        </li>
        <li>
          <Link to="services">Services</Link>
        </li>
        <li>
          <Link to="about">About Us</Link>
        </li>
        <li>
          <Link to="contact">Contact Us</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Navbar;
