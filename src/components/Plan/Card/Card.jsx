import React from "react";

import { AiFillStar } from "react-icons/ai";
import { GiCheckMark } from "react-icons/gi";
import "./style.scss";

const Card = (props) => {
  //   console.log(props.card);

  return (
    <div className="card">
      <h2>{props.card.title}</h2>
      <div className="icons">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
      <div className="price">
        <p>
          <span>$</span>
          {props.card.price}
        </p>
        <p className="quote">{props.isPerMonth ? "per month" : "per year"}</p>
      </div>
      <div className="offers">
        {props.card.offers.map((offer, i) => (
          <p key={i}>
            <span>
              <GiCheckMark />
            </span>
            {offer}
          </p>
        ))}
      </div>
      <button className="btn">Choose Plan</button>
    </div>
  );
};

export default Card;
