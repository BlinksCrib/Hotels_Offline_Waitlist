import React from "react";
import "./Navbar.css";
import img1 from '../assets/Jadsonbgremoved1.png'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  function goToWaitList() {
    navigate("/");
  }

  return (
    <section>
      <div className='navbar-container'>
        <nav className='navbars'>
          <div className='logo'>
            <img src={img1} alt='logo' onClick={goToWaitList} />
            {/* <h1 onClick={goToWaitList}>HOTELS OFFLINE</h1> */}
          </div>
        </nav>
      </div>
    </section>
  )
};

export default Navbar;
