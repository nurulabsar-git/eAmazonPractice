import React, {useState} from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    console.log(fakeData);
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);

  const handleAddProduct = (productAt) => {
        console.log('product added');
    }

    return (
        <div className ="shop-container">
            <div className="product-container">
            
            {
                products.map(product => <Product handleAddProduct = {handleAddProduct} productAt={product}></Product>)
            }
            
         </div>

            <div className="cart-container">
                <h3>This is cart</h3>
            </div>
        </div>
    );
};

export default Shop;