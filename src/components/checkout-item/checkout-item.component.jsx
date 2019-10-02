import React from 'react';

import './checkout-item.styles.scss';
import { addItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem: { cartItem, name, imageUrl, price, quantity } }) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quatity'>
            <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={() => addItem(cartItem)}>&#10095</div>
        </span>
        
        <span className='price'>{price}</span>
        <div className='remove-button'>&#10005;</div>
    </div>
)

export default CheckoutItem;