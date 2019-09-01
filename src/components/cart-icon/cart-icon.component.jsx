import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import toggleHidden from '../../redux/cart/cart.action';
import {selectCartItemCount} from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleHidden, itemCount }) => {
    console.log("i am rendered");
    return (
        <div className="cart-icon" onClick={toggleHidden}>
            <ShoppingIcon className="shopping-icon " />
            <span className="item-count">{itemCount}</span>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    toggleHidden: () => dispatch(toggleHidden())
})

const mapStateToProps = (state) => ({
    itemCount: selectCartItemCount(state)
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);