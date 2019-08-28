import React from 'react';
import './signinsignoutpage.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignOut from '../../components/sign-out/sign-out.component';

const SignInSignOutPage = () => {
    return (
        <div className="sign-in-and-sign-out">
            <SignIn />
            <SignOut />
        </div>
    )
}

export default SignInSignOutPage;