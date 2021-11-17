import React from "react";

const Four = () => {
  const handleForm = (event) => {
    event.preventDefault();
  };

  return (
    <div className="item four">
      <h4>Subscribe</h4>
      <p>Get offers and and stay up-to-date</p>
      <form className="subscribe" onSubmit={handleForm}>
        <input type="email" id="email" placeholder="Email" />
        <button type="submit">subscribe</button>
      </form>
    </div>
  );
};

export default Four;
