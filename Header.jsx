import React from "react";
import logo from "./src/assets/EzzztUpLogo.jpg";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div>
         <Link to="/" className="header-content" style={{ textDecoration: "none"}}>
          <img src={logo} alt="EzzztUp Logo" className="logo" />
         <h1 className="brand">EzzztUp</h1>
         </Link> 
        </div>
        <div className="Button">
          <button>
            <Link to="/signup" style={{ textDecoration: "none",color: "#2e7d32" }}>SignUp</Link>
          </button>
          <button>
            <Link to="/login" style={{ textDecoration: "none",color: "#2e7d32" }}>Login</Link>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
