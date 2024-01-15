import React, { useState } from 'react'
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
    const [{basket},dispatch]=useStateValue();

    const addToBasket = () => {
        dispatch(
            {
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,

            },            
        }
        );
    };
    
    <Product
    id={12312}
    title="Mediweave 3 Ply Non-Woven Filter 20 GSM Face Mask-Pack of 50"
    price={199.00}
    rating={3}
    image="https://images-na.ssl-images-amazon.com/images/I/71SUSc-97RL._UL1280_.jpg"
/>


    return (
        <div className='product'>
        <div className='product__info'>
        <p>{title}</p>
            <p className='product__price'><small>{"$"}</small><strong>{price}</strong>
            </p>
            {/* <div className='product__rating'>
            {Array(rating).fill().map(()=>{*"*\\"})}
            </div> */}
        </div>
        <img src={image} alt=''/>
            <button onClick={addToBasket}>Add to Basket</button>

        </div>
    )
}

export default Product;
