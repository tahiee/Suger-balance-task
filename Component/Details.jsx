import React, { useState, useEffect } from "react";
import order from "../Images/ordernowpng.png";
import webmd from "../Images/webmd.png";
import health from "../Images/Healthline_logo_6-RGB_Large.png";
import harved from "../Images/harvedlogopng.png";
import deibetes from "../Images/deibetespng.png";
import dt1 from "../Images/deibeteschecking.png";
import dt2 from "../Images/cirringe.png";

const Details = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-12-31") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <section className="detailsSection">
      <div className="timer">
        <div className="timer-container">
          <div className="timer-box">
            <h2>{timeLeft.days || "0"}</h2>
            <p>Days</p>
          </div>
          <div className="timer-box">
            <h2>{timeLeft.hours || "0"}</h2>
            <p>Hours</p>
          </div>
          <div className="timer-box">
            <h2>{timeLeft.minutes || "0"}</h2>
            <p>Minutes</p>
          </div>
          <div className="timer-box">
            <h2>{timeLeft.seconds || "0"}</h2>
            <p>Seconds</p>
          </div>
        </div>
      </div>
      <div className="mt-4" style={{ fontSize: "19px",alignItems:"center" }}>
        <p>
          Save up to $369 and create Quick{" "}
          <span style={{ color: "orange" }}>Sugar Balance</span> order today
        </p>
      </div>
      <div className="discount-img">
        <img src={order} alt="" className="dis-img" />
      </div>
      <div className="mt-4">
        <p style={{ fontSize: "16px", margin: "0" }}>
          <span style={{ color: "orange" }}>Sugar Balance</span> Offical Page -
          100% Orignal
        </p>
      </div>
      <div
        className="brand-logos mt-4"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={webmd} alt="" width="200px" height="100px" />
        <img src={health} alt="" width="200px" height="100px" />
        <img src={harved} alt="" width="200px" height="100px" />
        <img src={deibetes} alt="" width="200px" height="100px" />
      </div>
      <div className="details-container mt-4">
        <div className="details-box">
          <img src={dt1} alt="Icon 1" className="details-icon" />
          <h3>The Hidden Root Cause</h3>
          <p>Of Type II Diabetes That Your Doctor Will Never Tell You About</p>
        </div>
        <div className="details-box">
          <img src={dt2} alt="Icon 2" className="details-icon" />
          <h3>The Dangerous Side Effects</h3>
          <p>Of Prescription Drugs That Are Putting Your Life At Risk</p>
        </div>
        <div className="details-box">
          <img src={dt1} alt="Icon 3" className="details-icon" />
          <h3>The Breakthrough Natural</h3>
          <p>Treatment That Reverses High Blood Sugar Quickly And Safely</p>
        </div>
      </div>
    </section>
  );
};

export default Details;
