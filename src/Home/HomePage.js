import React, {useState} from 'react';
import {GenshinCookbookProject} from "./GenshinCookbookProject";
import {NavComponent} from "./NavComponent";
import {AboutComponent} from "./AboutComponent";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {LandingComponent} from "./LandingComponent";
import {ProjectCardsContainer} from "./ProjectCardsContainer";
import {DNDProject} from "./DNDProject";

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
                            <Route path={'/projects'} element={<ProjectCardsContainer/>}/>
                            <Route path={'/about'} element={<AboutComponent/>}/>
                            <Route path={'/genshincookbook'} element={<GenshinCookbookProject/>}/>
                            <Route path={'/dndsheets'} element={<DNDProject/>}/>
                        </Routes>
                    </Router>
                </div>
            </div>
        </div>
    );
}