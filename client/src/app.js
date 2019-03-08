/**
 * Created by 300126 on 3/6/2019.
 */

import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
// import PropTypes from 'prop-types';

import { history } from './_helpers';
import { appConstants, ROUTES } from './_constants';

import Teams from './components/Teams';
import Team from './components/Team';
import Player from './components/Player';

class App extends Component {
    componentDidMount() {
        document.title = appConstants.TITLE;
    }

    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path={ROUTES.TEAMS} component={Teams} />
                    <Route path={ROUTES.TEAM} component={Team} />
                    <Route path={ROUTES.PLAYER} component={Player} />
                </div>
            </Router>
        );
    }
}

App.propTypes = {};

export default App;
