import React from 'react';
import "../Product/Products.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {

    const {name, img, price, seller} = props.product;

    return (
        <div className='product'>
          
          <img className='max-w-sm max-w-lg' src={img} alt=""/>
           <div className='product-info'>
           <p className='product-name'>{name}</p>
            <p>Price:${price}</p>
            <p><small>Seller:{seller}</small></p>
           </div>
           <button onClick={()=>props.handleAddToCart(props.product)} className='btn-cart'><p className='btn-text'>Add to Cart</p>
           {/* <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>*/ } </button>
         
        </div>
    );
};

export default Product;