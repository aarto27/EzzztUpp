import { useState } from "react";
import "./SignUpPage.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../../Header";
import axios from "axios";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    password: "",
    confirmPass: "",
    email: "",
    phone: "",
  });

  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (name === "password" || name === "confirmPass") {
      setPasswordMismatch(false);
      
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, password, confirmPass, email, phone } = formData;
    if (password !== confirmPass) {
      setPasswordMismatch(true);
      alert("Your password does not match");
      return;
    } else {
      setPasswordMismatch(false);
      console.log(formData);
      navigate("/login");
      alert("signup done");
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <h2 className="title">Create an Account</h2>

          <div className="input-group">
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <div className="input-wrapper">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter a strong password"
                value={formData.password}
                onChange={handleChange}
                required
                className={passwordMismatch ? "input-error" : ""}
              />
            </div>
          </div>

          <div className="input-wrapper">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPass"
              placeholder="Re-enter your password"
              value={formData.confirmPass}
              onChange={handleChange}
              required
              className={passwordMismatch ? "input-error" : ""}
            />
          </div>

          <button type="submit" className="button">
            Sign Up
          </button>
          <button type="button" className="google-button">
            <img
              src="https://img.icons8.com/color/16/000000/google-logo.png"
              alt="Google"
            />
            Continue with Google
          </button>
          <p className="login-link">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
