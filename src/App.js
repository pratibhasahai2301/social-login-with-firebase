import React from 'react';
import Dashboard from "./components/dashboard";
import {Switch, Route} from "react-router";
import {AuthProvider} from "./contexts/authContext";
import PrivateRoute from "./components/private-route";
import Login from "./components/login";

const App = () => {
    return (
        <div className="container d-flex flex-column justify-content-center mt-4">
            <AuthProvider>
                <Switch>
                    <Route path="/login" component={Login} />
                    <PrivateRoute exact path="/" component={Dashboard} />
                </Switch>
            </AuthProvider>
        </div>
    );
}

export default App;
