import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

// Component.
import Header from './components/Header';
const browserHistory = createBrowserHistory();

import {
    Dashboard,
    SignIn
} from './modules';


export default function App() {
    return (
        <Fragment>
            <ThemeProvider theme={theme}>
                <Header />
                <Router history={browserHistory} basename="/facebook-react-app">
                    <Switch>
                        <Route exact path="/">
                            <SignIn />
                        </Route>
                        <Route exact path="/dashboard" basename="/facebook-react-app">
                            <Dashboard />
                        </Route>
                    </Switch>
                </Router>
            </ThemeProvider>
        </Fragment>
    );
};

