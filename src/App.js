import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Index from "views/Index.js";
import AboutPage from "views/pages/aboutPage.js";
import RegisterPage from "views/pages/registerPage.js";
import ProfilePage from "views/pages/profilePage.js";
import DownloadPage from "views/pages/downloadPage.js"
import LoginPage from "views/pages/loginPage.js"
import ChatPage from "views/pages/chatPage.js"
import AccountSettings from "views/pages/accountSettingsPage.js";

import {useSelector} from "react-redux";

import { selectUserEmail, selectIsLoggedIn } from "./features/userSlice";

import { selectdefaultIsLoggedIn } from "./features/defaultAuthSlice";

export default function App() {

    const userEmail = useSelector(selectUserEmail)
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const defaultIsLoggedIn = useSelector(selectdefaultIsLoggedIn)

    const getAuth = () => {
        const status = userEmail ? (isLoggedIn ? (true):(false)):(defaultIsLoggedIn ? (true): (false));
        return status;
    }

    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={props =>
                getAuth() ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login"
                        }}
                    />
                )
            }
        />
    );
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home" render={(props) => <Index {...props} />} />
                <Route
                    path="/landing"
                    render={(props) => <AboutPage {...props} />}
                />
                <Route
                    path="/register"
                    render={(props) => <RegisterPage {...props} />}
                />
                <Route
                    path="/login"
                    render={(props) => <LoginPage {...props} />}
                />
                <PrivateRoute
                    path="/profile"
                    component={ProfilePage}
                />
                <Route
                    path="/download"
                    render={(props) => <DownloadPage {...props} />}
                />
                <PrivateRoute
                    path="/account-settings"
                    component={AccountSettings}
                />
                <Route
                    path="/chat"
                    component={ChatPage}
                />
                <Redirect from="/" to="/home" />
            </Switch>
        </BrowserRouter>
    );
}