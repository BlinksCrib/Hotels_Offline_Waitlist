import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  function goToWaitList() {
    navigate("/");
  }

  return (
    <section>
      <div className="navbar-container">
        <nav className="navbars">
          <div className="logo">
            <h1 onClick={goToWaitList}>HOTELS OFFLINE</h1>
          </div>
          <div className="navlinks"></div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
