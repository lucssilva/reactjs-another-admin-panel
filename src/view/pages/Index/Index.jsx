import React from 'react';
import {
    Route,
    Switch,
    BrowserRouter as Router,
} from 'react-router-dom';
import { UsersListScreen } from '../../screens';
import { HeaderWidget } from '../../widgets';

export const IndexPage = () => {
    return (
        <Router>
            <HeaderWidget title="Another Admin Panel App" />

            <Switch>
                <Route exact path="/">
                    <UsersListScreen />
                </Route>
            </Switch>
        </Router>
    );
}
