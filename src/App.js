import React from "react";
import Navar from "./navbar";
import Home from "./home";
import Products from "./products";
import Contact from "./contact";
import { BrowserRouter, Route } from "react-router-dom"; //Route is uses to give redirection(route) to elements
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navar />
        <Home />
        <Products />
        <Contact />
      </div>
    </BrowserRouter>
  );
}
//Now we can use routing to these react elements
export default App;
