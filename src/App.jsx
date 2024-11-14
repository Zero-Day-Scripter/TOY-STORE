// src/App.js
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import React, { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/signup";
import HomePage from "./components/HomePage";
import Cart from "./components/Cart";
import FetchComponent from "./lab/fetch";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/HomePage"
          element={<HomePage cart={cart} setCart={setCart} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/fetch" element={<FetchComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
