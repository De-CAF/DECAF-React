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

export default function App() {
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
                <Route
                    path="/profile"
                    render={(props) => <ProfilePage {...props} />}
                />
                <Route
                    path="/download"
                    render={(props) => <DownloadPage {...props} />}
                />
                <Route
                    path="/account-settings"
                    render={(props) => <AccountSettings {...props} />}
                />
                <Route
                    path="/chat"
                    render={(props) => <ChatPage {...props} />}
                />
                <Redirect from="/" to="/home" />
            </Switch>
        </BrowserRouter>
    );
}