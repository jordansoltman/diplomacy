import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from '../Home/Home';
import Diplomacy from '../Diplomacy/Diplomacy';


function App() {
    return (
        <Router>
            <Auth>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/diplomacy">
                        <Diplomacy />
                    </Route>
                    <Route exact path="/publicgames">
                        <Games />
                    </Route>
                </Switch>
            </Auth>
        </Router>
    );
}

export default App;
