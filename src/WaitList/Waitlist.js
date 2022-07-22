import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Waitlist.css";
import img1 from "../assets/approved.png";

const Waitlist = () => {
  let navigate = useNavigate();
  const { pathname } = useLocation();

  function goToWaitList() {
    navigate("/");
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <section>
      <div className="waitlist-container">
        <div className="waitlist">
          <img src={img1} alt="approved" />
          <h1>
            You are now formally on the <br/> waiting list; — Keep checking <br/> back!{" "}
          </h1>
          <p>Once we find the ideal hotel for you, one of our managers will contact you.!</p>
          <button className="btn" onClick={goToWaitList}>
            Continue your hotel research
          </button>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
