import React from "react";

import { Navbar } from "../../components";
import { headerImg } from "../../imports";
import "./style.scss";

const Header = () => {
  return (
    <div className="header" id="header">
      <Navbar />
      <div className="header__content">
        <div className="header__content__text">
          <h1>
            World's <span>Smartest</span> Home Security
          </h1>
          <p>
            Unique security experiences with more than 300,000 clients, Simple
            Installation, Convenience & Free Monitoring
          </p>
          <button className="header__btn">visit shop</button>
        </div>
        <div className="header__content__img">
          <img src={headerImg} alt="Header Image" />
        </div>
      </div>
    </div>
  );
};

export default Header;
