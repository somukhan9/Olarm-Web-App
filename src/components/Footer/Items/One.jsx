import React from "react";

import { footerLogo } from "../../../imports";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";

const One = () => {
  return (
    <div className="item one">
      <a href="#" className="logo">
        <img src={footerLogo} alt="Logo" />
      </a>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy
      </p>
      <div className="social__links">
        <a href="https://facebook.com">
          <AiFillFacebook />
        </a>
        <a href="https://twitter.com">
          <AiFillTwitterSquare />
        </a>
        <a href="https://youtube.com">
          <AiFillYoutube />
        </a>
        <a href="https://linkedin.com">
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
};

export default One;
