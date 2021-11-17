import React from "react";

const links = ["Meet Olarm", "Features", "Plans", "Media", "Blog"];

const Two = () => {
  return (
    <div className="item two">
      <div className="links">
        {links.map((link, i) => (
          <a key={i} href="#">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Two;
