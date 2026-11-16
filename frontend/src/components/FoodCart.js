import React from "react";
import "../styles/FoodCart.css";

const FoodCart = (props) => {
  const { foodItems } = props;
  const { name, description, image, price } = foodItems;

  return (
    <div className="food-card">
      <img src={image} alt={name} />
      <div className="food-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <h4>₹{price}</h4>
        <button type="button">Add to Cart</button>
      </div>
    </div>
  );
};

export default FoodCart;
