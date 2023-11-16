import React, { useState } from 'react'
import Product from './index';

function Shop() {
  
    const [state,setState] = useState(15)

    const productList = [
      {
        img: "https://cdn.viettelstore.vn/Images/Product/ProductImage/291703442.jpeg",
        name: "Iphone 15 pro max",
        oldPrice: 35000000,
        newPrice: 33990000,
      },
      {
        img: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1896224739.jpeg",
        name: "Iphone 14 pro max",
        oldPrice: 28990000,
        newPrice: 26490000,
      },
      {
        img: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1981970233.jpeg",
        name: "Iphone 13 pro max",
        oldPrice: 29990000,
        newPrice: 29998900,
      },
      {
        img: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/465883758.jpeg",
        name: "Iphone 12 pro max",
        oldPrice: 27990000,
        newPrice: 27990000,
      },
    ];
  
    const increase = () => {
      setState(state + 1);
    }
    
    return (
      <div>
        <div className="title">
          <p>Shop</p>
        </div>
        <div className="productList">
          {productList.map((item, index) => (
            <Product dt={item} key={index} />
          ))}
        </div>
        <div style={{display :'flex',gap : '20px', justifyContent : 'center'}}>
          <button onClick={()=>{setState(state -1)}}>-</button>
          <p>{state}</p>
          <button onClick={increase}>+</button>
        </div>
      </div>
    );
}

export default Shop