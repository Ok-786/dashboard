import React from 'react'
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import RegForm from './components/RegForm';
import Signin from './components/Signin';
import Home from './components/Main';

export default function Routes(props) {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/Home" component={Home}/>
                    <Route path="/Signup" component={RegForm} />
                    <Route path="/Dashboard" component={Dashboard} />
                    <Route path="/Signin" component={Signin}/>
                    <Route
                        exact
                        path="/"
                        render={() => {
                            return (
                                <Redirect to="/Home" />
                            )
                        }}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
