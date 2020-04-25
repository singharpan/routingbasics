import React from "react";
import Navar from "./navbar";
import Home from "./home";
import Products from "./products";
import Contact from "./contact";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
//If we don't use exact keyword on home component....this will show with all components
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navar />

        <Route path="/" exact component={Home} />

        <Route path="/products" component={Products} />
        <Route path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
