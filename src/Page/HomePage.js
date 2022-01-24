import React, {useState} from 'react';
import {ProjectComponent} from "./ProjectComponent";
import {NavComponent} from "./NavComponent";
import {AboutComponent} from "./AboutComponent";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {LandingComponent} from "./LandingComponent";

export const HomePage = ({}) => {
    return (
        <div className={'root-container'}> {/* creates root level container*/}
            <div className={'landing-container'}> {/* creates container for contents of page*/}
                <div>
                    <Router> {/* router used to navigate throughout site*/}
                        <NavComponent/>

                        {/* routes for each subpage*/}
                        <Routes>
                            <Route path={'/'} element={<LandingComponent/>}/>
                            <Route path={'/projects'} element={<ProjectComponent/>}/>
                            <Route path={'/about'} element={<AboutComponent/>}/>
                        </Routes>
                    </Router>
                </div>
            </div>
        </div>
    );
}