import React from 'react';
import {GenshinCookbookPage} from "./GenshinCookbookPage";
import {NavComponent} from "../components/NavComponent";
import {AboutPage} from "./AboutPage";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {LandingPage} from "./LandingPage";
import {ProjectsPage} from "./ProjectsPage";
import {DNDPage} from "./DNDPage";

export const HomePage = () => {
    return (
        <div className={'m-3 md:m-8 bg-primary-pink text-center min-h-screen'}> {/* creates root level container*/}
            <div> {/* creates container for contents of page*/}
                <div>
                    <Router> {/* router used to navigate throughout site*/}
                        <NavComponent/>

                        {/* routes for each subpage*/}
                        <Routes>
                            <Route path={'/'} element={<LandingPage/>}/>
                            <Route path={'/projects'} element={<ProjectsPage/>}/>
                            <Route path={'/about'} element={<AboutPage/>}/>
                            <Route path={'/genshincookbook'} element={<GenshinCookbookPage/>}/>
                            <Route path={'/dndsheets'} element={<DNDPage/>}/>
                        </Routes>
                    </Router>
                </div>
            </div>
        </div>
    );
}