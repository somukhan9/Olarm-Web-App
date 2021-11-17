import React, { useState, useRef } from "react";

import Card from "./Card/Card";
import "./style.scss";

const Plan = () => {
  const [isPerMonth, setIsPerMonth] = useState(true);
  const inputRef = useRef(null);

  const cardContent = [
    {
      title: "PROFESSIONAL",
      price: isPerMonth ? "09.00" : "90.00",
      offers: [
        "Self monitoring via app",
        "Add a trusted friend/ family member",
        "Relies on Wi-Fi connection",
        "Cellular failover in case of Wi-Fi interruptions",
        "24/7 Professional monitoring",
      ],
    },
    {
      title: "CELLULAR",
      price: isPerMonth ? "05.00" : "50.00",
      offers: [
        "Self monitoring via app",
        "Add a trusted friend/ family member",
        "Relies on Wi-Fi connection",
        "Cellular failover in case of Wi-Fi interruptions",
        "24/7 Professional monitoring",
      ],
    },
    {
      title: "PROFESSIONAL",
      price: isPerMonth ? "09.00" : "90.00",
      offers: [
        "Self monitoring via app",
        "Add a trusted friend/ family member",
        "Relies on Wi-Fi connection",
        "Cellular failover in case of Wi-Fi interruptions",
        "24/7 Professional monitoring",
      ],
    },
  ];

  const handleOnChange = (event) => {
    setIsPerMonth((prev) => !prev);
  };

  return (
    <section className="plan" id="plan">
      <p>Choose The Best Fit</p>
      <h1>Protection Plans</h1>
      <div className="toggle_container">
        <p>Monthly</p>
        <label className="switch">
          <input type="checkbox" ref={inputRef} onChange={handleOnChange} />
          <span className="slider round"></span>
        </label>
        <p>Yearly</p>
      </div>
      <div className="card__container">
        {cardContent.map((card, i) => (
          <Card key={i} card={card} isPerMonth={isPerMonth} />
        ))}
      </div>
    </section>
  );
};

export default Plan;
