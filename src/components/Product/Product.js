import React from 'react';

const Product = (props) => {
    // console.log(props.productAt.name);
    console.log(props.productAt);
    const {img, name, price} = props.productAt;
    return (
        <div className="product">
            {/* <h1>This is product</h1> */}
            <div>
              <img src={props.productAt.img} alt=""/>
            </div>
            <div>
            <h4><strong>Name: </strong>{name} <strong>Price:</strong>{price}$</h4>
            </div>
           
        </div>
    );
};

export default Product;