import React from "react";
import "./Product.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
  // console.log(props.productAt.name);
//   console.log(props.productAt);
    //  console.log(props);
  const { img, name, price, seller, stock } = props.productAt;
  return (
    <div className="product">
      {/* <h1>This is product</h1> */}
      <div>
        <img src={props.productAt.img} alt="" />
      </div>
      <div>
        <h5 className="product-info">
          <strong>Name: </strong>
          {name}
        </h5>
        <br />
        <p>
          <small>by: {seller}</small>
        </p>
        <p>${price}</p>
        <br />
        <p>
          <small>Only {stock} left in stock - Order soon.</small>
        </p>
        <button className="main-button" onClick={ () =>props.handleAddPro(props.productAt)}>add to cart</button> 
        {/* <FontAwesomeIcon icon={faShoppingCart} /> */}
      </div>
    </div>
  );
};

export default Product;
