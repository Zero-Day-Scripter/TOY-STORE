import React, { useState } from "react";
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css"; // Ensure this path is correct

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate(); // Get the navigate function
  const [UserName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    // Check if all fields are filled and if passwords match
    if (!UserName || !email || !password || !confirmPassword) {
      alert("Please fill in all fields."); // Alert if fields are empty
    } else if (password !== confirmPassword) {
      alert("Passwords do not match."); // Alert if passwords don't match
    } else {
      alert("User Created Successfully!!");
      navigate("/login"); // Navigate to login if validation passes    
    }
  };

  return (
    <div className="signup-main">
      <div className="signup-left">
        <img src={Image} alt="" />
      </div>
      <div className="signup-right">
        <div className="signup-right-container">
          <div className="signup-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="signup-center">
            <h2>Create an Account</h2>
            <p>Please fill in the details below</p>
            <form>
              <input
                type="text"
                placeholder="User Name"
                value={UserName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>
              <div className="pass-input-div">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {showConfirmPassword ? (
                  <FaEyeSlash
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                ) : (
                  <FaEye
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                )}
              </div>

              <div className="signup-center-options">
                <div className="terms-div">
                  <input type="checkbox" id="terms-checkbox" />
                  <label htmlFor="terms-checkbox">
                    I agree to the <a href="#">terms and conditions</a>
                  </label>
                </div>
              </div>
              <div className="login-center-buttons">
                <button type="button" onClick={handleSignUp}>
                  Sign Up
                </button>
              </div>
            </form>
          </div>

          <p className="signup-bottom-p">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
