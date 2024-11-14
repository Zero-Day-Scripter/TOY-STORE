// src/HomePage.jsx
import React, { useState } from "react";
import "./HomePage.css";
import Navbar from "./NavBar";

const HomePage = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const products = [
    { id: 1, name: "Sun God Luffy", price: "$10", image: "d1.jpeg" },
    { id: 2, name: "Groot Stand", price: "$15", image: "groot.jpeg" },
    { id: 3, name: "Iron Man", price: "$8", image: "ironman.jpeg" },
    { id: 4, name: "Batman", price: "$20", image: "batman.jpeg" },
    { id: 5, name: "Sun God Luffy", price: "$10", image: "d1.jpeg" },
    { id: 6, name: "Groot Stand", price: "$15", image: "groot.jpeg" },
    { id: 7, name: "Iron Man", price: "$8", image: "ironman.jpeg" },
    { id: 8, name: "Batman", price: "$20", image: "batman.jpeg" },
    { id: 9, name: "Iron Man", price: "$8", image: "ironman.jpeg" },
    { id: 10, name: "Batman", price: "$20", image: "batman.jpeg" },
  ];

  // Function to add a product to the cart using localStorage
  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = existingCart.find((item) => item.id === product.id);

    if (existingItem) {
      setAlertMessage("This item is already in your cart!");
    } else {
      const updatedCart = [...existingCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setAlertMessage(`${product.name} added to cart!`);
    }

    // Show the alert message
    setShowAlert(true);

    // Hide the alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <div className="homepage">
      <header className="header">
        <Navbar />
        <h1>Welcome to the Toy Store!</h1>
        <p>Your one-stop shop for all your favorite toys.</p>
      </header>

      {/* Alert Message */}
      {showAlert && (
        <div className="alert alert-success" role="alert">
          {alertMessage}
        </div>
      )}

      <section className="product-section">
        <h2>Featured Products</h2>
        <div className="product-list">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="product-details">
                <p className="product-name">{product.name}</p>
                <p className="product-price">{product.price}</p>
              </div>
              <button
                type="button"
                className="cart-button"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
