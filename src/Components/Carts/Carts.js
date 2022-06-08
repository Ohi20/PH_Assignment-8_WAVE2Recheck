import React from 'react';

const Carts = (props) => {

    const {cart} = props;
    // console.log(cart);
    let total = 0;
    let productName= "";
        
    for(const product of cart){
        total = total + product.price;
        productName = productName+product.name;
    }

    const chooseOne = (product) => {
         
    
    }
    
    const removeItem = (product) => {
        
        const newCart = [];
        
    }
    
    const grandTotal = total; 

    return (
        <div className='cart'>
            <h2>Order Summery</h2>
            <h4>Selected Items: {cart.length}</h4>
            <div>
                <h2>Product Name:<br/>{productName}<br/></h2>
            </div>
            <h2>Total Price:${total}</h2>
            <h4>Grand Total:${grandTotal.toFixed(2)}</h4>
            <div>
            <button className='cart-btn-1' onClick={chooseOne}>Choose one for me</button>
            <button onClick={removeItem}>Remove</button>
            </div>
        </div>
    );
};

export default Carts;