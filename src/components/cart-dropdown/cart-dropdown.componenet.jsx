import React from 'react';

import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component'

class CartDropdown extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="cart-dropdown">
                <div className="cart-items"></div>
                <CustomButton >GO TO CART</CustomButton>
            </div>
        )
    }
}

export default CartDropdown;