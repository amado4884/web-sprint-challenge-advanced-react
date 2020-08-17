import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

import PlantList from "./components/PlantList";
import ShoppingCart from "./components/ShoppingCart";
import CheckoutForm from "./components/CheckoutForm";

import "./App.css";
import Filter from "./components/Filter";

function App() {
  // array of plants that have been added to the cart
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState("");

  // add a plant to the cart
  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

  // remove a plant from the cart
  const removeFromCart = (plant) => {
    setCart(cart.filter((p) => p.id !== plant.id));
  };

  return (
    <div>
      <Router>
        <nav className="container">
          <h1>
            React Plants <span role="img">🌿</span>
          </h1>
          <ul className="steps">
            <li>
              <NavLink exact to="/">
                Plants
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                Cart
                <span className="cart-badge">{cart.length > 0 && cart.length}</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Filter setQuery={(q) => setQuery(q)} />
            <PlantList addToCart={addToCart} query={query} />
          </Route>
          <Route path="/cart">
            <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
          </Route>
          <Route path="/checkout" component={CheckoutForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
