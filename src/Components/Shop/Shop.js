import React, { useEffect, useState } from 'react';
import Carts from '../Carts/Carts';
import Product from '../Product/Product';
import "../Shop/Shop.css";

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('FakeData.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const handleAddToCart = (product) => {
              
        const newCart = [...cart, product];
        
        if(cart.length >= 4){
            alert('Please Select 4 items');
        }
        setCart(newCart);
    }


    return (
        <div className=' '>
            
            <div className="products-container sm:grid-cols-1">
                {
                    products.map(product=><Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
                
            </div>
            <div className="cart-container">
                <Carts cart={cart}></Carts>
            </div>
            
        </div>
    );
};

export default Shop;