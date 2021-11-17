import React from "react";

const links = ["Contact Us", "Terms of Service", "Privacy", "Careers", "FAQ's"];

const Three = () => {
  return (
    <div className="item three">
      <div className="links">
        {links.map((link, i) => (
          <a href="#">{link}</a>
        ))}
      </div>
    </div>
  );
};

export default Three;
