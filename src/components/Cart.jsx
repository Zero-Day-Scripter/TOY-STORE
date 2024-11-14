import React, { useState, useEffect } from "react";
import Navbar from "./NavBar";
import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUPI, setSelectedUPI] = useState("");

  // Load cart from localStorage when the component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Function to calculate total price
  const getTotalPrice = () =>
    cart.reduce((total, item) => total + parseFloat(item.price.slice(1)), 0);

  // Handle checkout button click
  const handleCheckout = () => {
    console.log("handleCheckout called: Proceed to Checkout clicked");
    setShowModal(true);
  };

  // Handle UPI radio button change
  const handleUPIChange = (event) => {
    console.log("handleUPIChange called: Selected UPI -", event.target.value);
    setSelectedUPI(event.target.value);
  };

  // Handle Buy Now button click
  const handleBuy = () => {
    if (!selectedUPI) {
      alert("Please select a UPI option.");
      return;
    }

    alert("Payment Successful!");

    // Clear cart in localStorage and update state
    localStorage.setItem("cart", JSON.stringify([]));
    setCart([]); // Clear the cart state
    setShowModal(false);
  };

  // Close modal function
  const closeModal = () => {
    setShowModal(false);
    setSelectedUPI("");
  };

  return (
    <div className="cart-page">
      <Navbar />
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          ))}
          <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
          <button className="checkout-button" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      )}

      {/* UPI Payment Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Select UPI for Payment</h3>
            <div className="upi-options">
              <label>
                <input
                  type="radio"
                  name="upi"
                  value="Google Pay"
                  onChange={handleUPIChange}
                  checked={selectedUPI === "Google Pay"}
                />
                Google Pay
              </label>
              <label>
                <input
                  type="radio"
                  name="upi"
                  value="PhonePe"
                  onChange={handleUPIChange}
                  checked={selectedUPI === "PhonePe"}
                />
                PhonePe
              </label>
              <label>
                <input
                  type="radio"
                  name="upi"
                  value="Paytm"
                  onChange={handleUPIChange}
                  checked={selectedUPI === "Paytm"}
                />
                Paytm
              </label>
            </div>
            <button className="buy-button" onClick={handleBuy}>
              Buy Now
            </button>
            <button className="close-button" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
