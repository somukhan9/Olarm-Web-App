import React, { useEffect, useState } from "react";

import { logo } from "../../imports";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./style.scss";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    window.onscroll = () => {
      document
        .querySelector(".navbar .navbar__container")
        .classList.toggle("sticky", window.scrollY > 0);
      console.log("Hello World!");
    };
  }, []);

  return (
    <div className="navbar">
      <nav className="navbar__container">
        <div className="logo_container">
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
        </div>

        <ul className={toggleMenu ? "active" : ""}>
          <li>
            <a href="#header">home</a>
          </li>
          <li>
            <a href="#video">features</a>
          </li>
          <li>
            <a href="#plan">plans</a>
          </li>
          <li>
            <a href="#control">meet olarm</a>
          </li>

          <div className="btn_container">
            <button className="sign_in">sign in</button>
            <button className="sign_up">sign up</button>
          </div>
        </ul>

        <div className="menu_btn_container">
          {toggleMenu ? (
            <button
              className="menu_close_btn"
              onClick={() => setToggleMenu(false)}
            >
              <RiCloseLine />
            </button>
          ) : (
            <button className="menu_btn" onClick={() => setToggleMenu(true)}>
              <RiMenu3Line />
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
