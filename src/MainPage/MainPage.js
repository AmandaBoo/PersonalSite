import React from 'react';
import {Navigation} from "../Navigation/Navigation";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

export const MainPage = ({}) => {
    return (
        <div>
            <Router>
                {renderNavigationBar()}
                {renderRoutes()}
            </Router>
        </div>
    );
}

function renderNavigationBar() {
    return (
        <div>
            <Navigation/>
        </div>
    )
}

function renderRoutes() {
    return (
        <div>
            <Routes>
                <Route path={'/'}>
                    {}
                </Route>
            </Routes>
        </div>
    );
}