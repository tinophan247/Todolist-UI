import React from "react";

function Product({dt}) {
  return (
    <div className="productItem">
      <img
        src={dt.img}
        alt="not found"
      />
      <div className="productItem-content">
        <h2>{dt.name}</h2>
        <div className="productItem-price ">
          <del>{dt.oldPrice.toLocaleString()} ₫</del>
          <p style={{ color: "red" }}>{dt.newPrice.toLocaleString()} ₫</p>
        </div>
        <button>Add To Cart </button>
      </div>
    </div>
  );
}

export default Product;
