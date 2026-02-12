import React from "react";
import "./ProductCard.css";

function ProductCard({ name, price, image, inStock }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-img" />
      <h2>{name}</h2>
      <p>₹{price}</p>

      <p className={inStock ? "in" : "out"}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>

      <button disabled={!inStock}>
        {inStock ? "Buy Now" : "Unavailable"}
      </button>
    </div>
  );
}

export default ProductCard;
