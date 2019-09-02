import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom'

import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import toggleHidden from '../../redux/cart/cart.action';


const CartDropdown = ({ cartItems, history, toggleHidden }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ? (
                        cartItems.map(item => (
                            <CartItem key={item.id} item={item} />
                        ))
                    ) : (
                            <span className="empty-message">Your cart is empty</span>
                        )
                }

            </div>
            <CustomButton onClick={()=> {
                history.push("/checkoutpage");
                toggleHidden();
            }}>GO TO CART</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

const maptDispatchToProps = dispatch => ({
    toggleHidden: () => dispatch(toggleHidden())
})

export default withRouter(connect(mapStateToProps, maptDispatchToProps)(CartDropdown));