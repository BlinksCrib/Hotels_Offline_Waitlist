import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./NewsLetter.css";
import ClipLoader from "react-spinners/ClipLoader";
import img1 from "../assets/Vector(3).png";
import img2 from "../assets/Vector(4).png";

const NewsLetter = () => {
  const [appToken, setAppToken] = useState("HB2JHK342");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  let navigate = useNavigate();
  const { pathname } = useLocation();

  const [loading, setLoading] = useState(false);

  const handleFullname = (e) => {
    setFullName(e.target.value);
  };

  // Handling the password change
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleComment = (e) => {
    e.preventDefault();
    setLoading(true);


    setTimeout(() => {
      setLoading(false);
    }, 3000);
    // Handling the form submission
    
    const formData = new FormData();
    formData.append("apptoken", appToken);
    formData.append("name", fullName);
    formData.append("mail", email);

    axios
      .post("https://api.test.hotelsoffline.com/v1/newsletter", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.data.success === true) {
          setFullName("");
          setEmail("");
          navigate("/approved");
        } else {
          alert(res);
        }
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <section>
      <div className="newletter-container">
        <div className="newletters">
          <div className="newsletter2">
            <div class="img2">
              <h1>
                Join our waiting list for the top hotel reservation system.
              </h1>
              <p>The most comfortable and secure hotel available.</p>
            </div>
          </div>
          <div className="newsletter1">
            <div class="new">
              <h1>Join us now</h1>
              <form class="form-access" onSubmit={handleComment}>
                <div class="form">
                  <div class="first-form">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      onChange={handleFullname}
                      value={fullName}
                      className="move-down"
                      required
                    />
                    <input
                      type="email"
                      name="Email"
                      placeholder="Enter Your Email"
                      onChange={handleEmail}
                      value={email}
                      required
                    />
                    <button type="submit" class="free btn butt">
                      {loading ? (
                        <ClipLoader
                          loading={loading}
                          color={"#0E43FF"}
                          size={20}
                        />
                      ) : (
                        "OBTAIN EARLY ENTRY"
                      )}
                    </button>
                  </div>
                </div>
              </form>
              <h5 class="coming">Coming shortly...</h5>
              <div class="reni-app">
                <div class="play">
                  <div class="play-store">
                    <img src={img1} alt="" />
                  </div>
                  <div class="get-it">
                    <a href="">
                      <p>
                        Get it on <br />
                        <span>Google Play</span>
                      </p>
                    </a>
                  </div>
                </div>
                <div class="apple">
                  <div class="apple-store">
                    <img src={img2} alt="" />
                  </div>
                  <div class="get-it">
                    <a href="">
                      <p>
                        Download on the <br />
                        <span>Apple Store</span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div class="home__socials">
            <div class="home__social-link">
              <a href="/" class="home__social-links">
                <i class="fa-brands fa-facebook"></i>
                <span>Like on Facebook</span>
              </a>
              <a href="/" class="home__social-links">
                <i class="fa-brands fa-instagram"></i>
                <span>Follow on Instagram</span>
              </a>
              <a href="/" class="home__social-links">
                <i class="fa-brands fa-twitter"></i>
                <span>Follow on Twitter</span>
              </a>
            </div>
          </div>
            </div>
          </div>
          {/* <div className="newsletter1">
            <div class="alls">
              <div class="reni-info">
                <div class="first-info">
                  <h1>Join our waiting list for the top hotel reservation system.</h1>
                </div>
                <div class="second-info">
                  <p>The most comfortable and secure hotel available.</p>
                </div>
                
               
                </div>
              </div>
            </div>
          </div> */}
          
          {/* <hr class="horizontal_line" />
          <div class="footer">
            <div class="fire">
              <p>&#169; Hotels Offline 2022. All rights reserved</p>
            </div>
            <div class="security">
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
              <p>Anti-Money laundering Policy</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
