import React from "react";
import img1 from "../Images/blood+sugar+balance-removebg-preview.png";
import img2 from "../Images/globelfree.png";

const Header = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="combine">
            <div
              className="log"
              style={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <img src={img1} alt="Sugar Balance" className="logo" />
              <h1>Sugar Balance</h1>
            </div>
            <div className="both-logo">
              <div className="svg-container blink">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  width="24px"
                  height="24px"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 15.5l-6-4.5v9l6 4.5 6-4.5v-9l-6 4.5zm0-13L5.33 7.5 12 12.5l6.67-5L12 2.5z" />
                </svg>
              </div>
              <div className="svg-container">
                <img src={img2} alt="" className="png-logo-globel" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
