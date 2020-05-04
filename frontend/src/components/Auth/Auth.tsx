import React from 'react';

import { ApplicationState } from '../../store';
import { connect } from 'react-redux';
import { AuthState } from '../../store/auth/types';
//FIXME: all kinds of fun stuff to fix here.
const Auth = function ( ) : any {
    console.log('auth', auth)
    return auth.loggedIn ? props.children : <div>Not Logged In</div>
};

const mapStateToProps = (state: ApplicationState) => {
    return {
        loggedIn: state.auth
    };
};
export default connect(mapStateToProps)(Auth);
