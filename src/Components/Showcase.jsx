import React, { useState, useEffect } from "react";
import Product from "./Product";

const Showcase = () => {
  const [prd, setPrd] = useState([]);
  const [count, setCount] = useState(1);
  function Plus() {
    setCount(count + 1);
  }
  function Minus() {
    setCount(count - 1);
  }

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${count}`)
      .then((res) => res.json())
      .then((json) => setPrd(json));
  }, [count]);

  return (
    <div id="products">
      <div className="container">
        <div className="flex-button">
          <button className={`minus`} disabled={count <= 1} onClick={Minus}>
            -
          </button>
          {count}
          <button className="plus" disabled={count >= 20} onClick={Plus}>
            +
          </button>
        </div>
        {/* <h2>Loading...</h2> */}
        <div className="grid">
          {prd.map((p) => {
            return <Product product={p} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
