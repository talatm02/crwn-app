import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import toggleHidden from '../../redux/cart/cart.action'

import './cart-icon.styles.scss';

const CartIcon = ({toggleHidden}) => {
    return (
        <div className="cart-icon" onClick={toggleHidden}>
            <ShoppingIcon className="shopping-icon " />
            <span className="item-count">0</span>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    toggleHidden: () => dispatch(toggleHidden())
})
export default connect(null, mapDispatchToProps)(CartIcon);