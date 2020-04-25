import React from "react";
import Navar from "./navbar";
import Home from "./home";
import Products from "./products";
import Contact from "./contact";
import { BrowserRouter } from "react-router-dom";
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
