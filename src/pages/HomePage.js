import React from 'react';
import {GenshinCookbookPage} from "./Genshin/GenshinCookbookPage";
import {NavComponent} from "./Nav/NavComponent";
import {AboutPage} from "./About/AboutPage";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {LandingPage} from "./ArtGallery/LandingPage";
import {ProjectsPage} from "./Projects/ProjectsPage";
import {DNDPage} from "./DND/DNDPage";

export const HomePage = () => {
    return (
        <div className={'m-3 md:m-8 bg-primary-pink text-center min-h-screen'}> {/* creates root level container*/}
            <div> {/* creates container for contents of sharedPage*/}
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