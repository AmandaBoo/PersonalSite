import React from 'react';
import {GenshinCookbookPage} from "./Genshin/GenshinCookbookPage";
import {NavComponent} from "./Nav/NavComponent";
import {AboutPage} from "./About/AboutPage";
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom'
import {LandingPage} from "./ArtGallery/LandingPage";
import {ProjectsPage} from "./Projects/ProjectsPage";
import {DNDPage} from "./DND/DNDPage";
import {ArtGallery} from "./ArtGallery/ArtGallery";
import {PokemonPage} from "./Pokemon/PokemonPage";
import {FinalFantasyPage} from "./FinalFantasy/FinalFantasyPage";

export const HomePage = () => {
    return (
        <div className={'m-3 md:m-8 bg-primary-pink text-center min-h-screen'}> {/* creates root level container*/}
            <div> {/* creates container for contents of sharedPage*/}
                <div>
                    <Router> {/* router used to navigate throughout site*/}
                        <NavComponent/>

                        {/* routes for each subpage*/}
                        <Routes>
                            {/*other pages*/}
                            <Route path={'/'} element={<LandingPage/>}/>
                            <Route path={'/about'} element={<AboutPage/>}/>
                            <Route path={'/art'} element={<ArtGallery/>}/>

                            {/* project pages*/}
                            <Route path={'/projects'} element={<ProjectsPage/>}/>
                            <Route path={'/genshincookbook'} element={<GenshinCookbookPage/>}/>
                            <Route path={'/dndsheets'} element={<DNDPage/>}/>
                            <Route path={'/finalfantasy'} element={<FinalFantasyPage/>}/>
                            <Route path={'/pokemon'} element={<PokemonPage/>}/>
                        </Routes>
                    </Router>
                </div>
            </div>
        </div>
    );
}