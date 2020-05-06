import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.scss';

import Home from '../Pages/Home/Home';
import Diplomacy from '../Pages/Diplomacy/Diplomacy';
import Auth from '../Auth/Auth';
import Games from '../Pages/Games/Games';
import Login from '../Pages/Login/Login';
import Header from '../Header/Header';
import Container from '../Container/Container';
import Account from '../Pages/Account/Account';

function App(): ReactElement {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/login">
                    <Container>
                        <Login />
                    </Container>
                </Route>
                <Auth redirectURL="/login">
                    <Container>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/diplomacy">
                            <Diplomacy />
                        </Route>
                        <Route exact path="/publicgames">
                            <Games />
                        </Route>
                        <Route exact path="/account">
                            <Account />
                        </Route>
                    </Container>
                </Auth>
            </Switch>
        </Router>
    );
}

export default App;
