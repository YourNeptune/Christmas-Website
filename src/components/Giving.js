import React from "react";
import surprise_gifts from "../img/giving1.png";
import ornaments from "../img/giving2.png";
import love from "../img/giving3.png";

const Giving = ({ title, discription }) => {
  const getImage = (title) => {
    switch (title) {
      case "Surprise gifts":
        return surprise_gifts;
      case "Ornaments":
        return ornaments;
      case "Lots of love":
        return love;
      default:
        return;
    }
  };

  return (
    <div>
      <img src={getImage(title)} alt="" />
      <h2>{title}</h2>
      <p>{discription}</p>
    </div>
  );
};

export default Giving;
