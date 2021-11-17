import React from "react";

import "./style.scss";

const Card = (props) => {
  return (
    <div className={props.class}>
      <div className="card__content">
        <h3>{props.title}</h3>
        <p>Watch Now</p>
      </div>
      <img src={props.src} alt="" />
    </div>
  );
};

export default Card;
