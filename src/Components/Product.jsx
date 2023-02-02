import React from "react";
import { Link } from "react-router-dom";

// import Showcase from "./Showcase";

const Product = ({ product }) => {
  return (
    <div id="product">
      <img src={product.image}></img>
      <h5>{product.title}</h5>
      <h6>{product.category}</h6>
      <div className="flex-card">
        <p> ${product.price}</p>
        <p>
          ⭐{product.rating.rate} / {product.rating.count}
        </p>
      </div>
      <Link to={`/${product.id}`} className="details">
        Details
      </Link>
    </div>
  );
};

export default Product;
