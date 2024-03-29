import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from "../cart-dropdown/cart-dropdown.componenet";
import { selectHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>

        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            {
                currentUser ?
                    <div className="option" onClick={() => auth.signOut()} >SIGN OUT</div>
                    :
                    <Link className="option" to="/signin">SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }

    </div>
)

// const mapStateToProp = state => ({ currentUser: state.user.currentUser, hidden: state.cart.hidden })
// advance destructure
// const mapStateToProp = (state) => ( {currentUser:selectCurrentUser(state), hidden:selectHidden(state)})
const mapStateToProp = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHidden
})


export default connect(mapStateToProp)(Header)