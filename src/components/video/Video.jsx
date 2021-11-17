import React from "react";

import Card from "./Card/Card";
import {
  rectangleOne,
  rectangleTwo,
  rectangleThree,
  rectangleFour,
} from "../../imports";
import "./style.scss";

const cardContent = [
  "Auto Arming | Dis-arming",
  "Easy Installation",
  "24-7 Monitoring",
  "Our Sensor Learns Your Lifestyle",
];

const Video = () => {
  return (
    <section className="video" id="video">
      <p>Tailored Total Home Protection</p>
      <h1>Next Generation Home Alarm System</h1>
      <div className="video__content">
        <div className="row__one">
          <Card
            class="item__one card"
            src={rectangleOne}
            title={cardContent[0]}
          />
          <Card
            class="item__two card"
            src={rectangleTwo}
            title={cardContent[1]}
          />
        </div>

        <div className="row__two">
          <Card
            class="item__three card"
            src={rectangleThree}
            title={cardContent[2]}
          />
          <Card
            class="item__four card"
            src={rectangleFour}
            title={cardContent[3]}
          />
        </div>
      </div>
    </section>
  );
};

export default Video;
