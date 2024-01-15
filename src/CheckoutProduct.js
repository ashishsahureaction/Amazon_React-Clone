import React from 'react'

function Checkoutproduct({id, title, image, price, rating}) {
    return (
        <div className='checkoutProduct'>
            <img src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill()
                            .map(() => (
                                <p>*</p>
                            ))
                    }
                </div>
                <button>Remove item from basket</button>
        </div>
        </div>
    )
}

export default Checkoutproduct
