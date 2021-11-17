import React from "react";

import { integrationBg, integrationImg } from "../../imports";
import "./style.scss";

const Integration = () => {
  return (
    <section className="integration" id="integration">
      <div className="integration__container">
        <div className="left">
          <p>How Things Work!</p>
          <h1>Home Automation and Integrations</h1>
          <p>
            Let’s imagine you can control your entire home through voice command
            or even remotely through an app. But why imagine, when we can
            deliver. Connect and control your home now through our intuitive
            Olarm App
          </p>
          <div className="btn__container">
            <button className="btn btn__android">goolge play</button>
            <button className="btn btn__ios">app store</button>
          </div>
        </div>
        <div className="right">
          <img src={integrationImg} alt="Integration" />
        </div>
      </div>
    </section>
  );
};

export default Integration;
