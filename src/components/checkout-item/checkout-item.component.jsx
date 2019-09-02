import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';

import { removeItem, substractItem, addItem } from '../../redux/cart/cart.action';

const CheckoutItem = ({ cartItem, removeItem, substractItem, addItem }) => {
    const { imageUrl, name, price, quantity } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => {
                    (cartItem.quantity == 1) ?
                        removeItem(cartItem)
                        :
                        substractItem(cartItem)
                }}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={() => removeItem(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    substractItem: item => dispatch(substractItem(item)),
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);