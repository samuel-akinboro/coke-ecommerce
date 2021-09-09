import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";
import StarRateIcon from '@material-ui/icons/StarRate';

function CheckoutProduct({ id, quantity, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>₦</small>
                    <strong>{price}</strong> <br />
                    <strong>Quantity: {quantity} packs</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p><StarRateIcon /></p>
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove Product</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
