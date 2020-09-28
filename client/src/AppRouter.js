import React, { useContext } from 'react'

import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from "react-router-dom";
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import { GlobalContext } from './context/GlobalState';

const AppRouter = () => {

    const {isLogged} = useContext(GlobalContext);

    return (
        <Router>
        {isLogged ? 
        <Switch>
            <Route excat path="/">
                <Dashboard/>
            </Route>
        </Switch>
            :
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignupPage/>
          </Route>
        </Switch>}
      </Router >
    )
}

export default AppRouter
