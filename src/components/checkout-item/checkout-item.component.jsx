import React from 'react';
import './checkout-item.styles.scss';


const CheckoutItem = ({ cartItem: { imageUrl, name, price, quantity}}) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item"/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">${price}</span>
        <div className="remove-button" onClick={()=>alert("Talat")}>&#10005;</div>
    </div>
)

// const mapDispatchToProps = dispatch => ({
//     removeItem: item => dispatch(removeItem(item))
// })
export default CheckoutItem;