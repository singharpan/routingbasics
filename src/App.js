import React from "react";
import Navar from "./navbar";
import Home from "./home";
import Products from "./products";
import Contact from "./contact";
import "./App.css";

function App() {
  return (
    <div>
      <Navar />
      <Home />
      <Products />
      <Contact />
    </div>
  );
}

export default App;
