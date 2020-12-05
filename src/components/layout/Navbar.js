import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { auth, profile } = props;
    // console.log(auth)
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo left">MarioPlan</Link>
                { links }
            </div>
        </nav>
    )
}

const mstp = (state) => {
    console.log(state)
    return {
        auth: state.firebaseReducer.auth,
        profile: state.firebaseReducer.profile
    }
}

export default connect(mstp)(Navbar);