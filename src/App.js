import React from "react";
import Navar from "./navbar";
import Home from "./home";
import Products from "./products";
import Contact from "./contact";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

//Route and Switch are Matching components
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navar />
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
