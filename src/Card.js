import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  if (!data) return null;

  const { brand, title, newPrice, newLabel, usedPrice, usedLabel, image } = data;

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-details">
        <div className="brand">{brand}</div>
        <div className="title">{title}</div>
        <div className="price">
          <span className="price new-price">{newPrice}</span>
          <span className="price new-label">{newLabel}</span>
        </div>
        <div className="price">
            <span className="price used-label">{usedLabel}</span>
            <span className="price used-price">{usedPrice}</span>
      </div>
    </div>
    </div>
  );
};

export default Card;
