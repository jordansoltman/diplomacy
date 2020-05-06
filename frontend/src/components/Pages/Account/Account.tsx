import React, { FunctionComponent, ReactElement } from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../store';
import './Account.scss';

interface AccountProps {
    //... all kinds of goodies.
}

const Account: FunctionComponent<AccountProps> = function (props): ReactElement {
    return <div className="account-container sub-container">Account</div>;
};

const mapStateToProps = (state: ApplicationState) => {
    return {
        auth: state.auth
    };
};

const mapDispatchToProps = {
    //... lots of goodies
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
