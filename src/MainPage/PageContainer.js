import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {HomePage} from "../Home/HomePage";

export const PageContainer = ({}) => {
    return (
        <div className={'page-container'}>
            <Router>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                </Routes>
            </Router>
        </div>
    );
}