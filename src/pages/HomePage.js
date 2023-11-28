import React, {useEffect} from 'react';
import {GenshinCookbookPage} from "./Genshin/GenshinCookbookPage";
import {NavComponent} from "./Nav/NavComponent";
import {AboutPage} from "./About/AboutPage";
import {Route, Routes, useLocation} from 'react-router-dom'
import {LandingPage} from "./ArtGallery/LandingPage";
import {ProjectsPage} from "./Projects/ProjectsPage";
import {DNDPage} from "./DND/DNDPage";
import {ArtGallery} from "./ArtGallery/ArtGallery";
import {PokemonPage} from "./Pokemon/PokemonPage";
import {FinalFantasyPage} from "./FinalFantasy/FinalFantasyPage";
import {KitfoxPage} from "./Kitfox/KitfoxPage";

export const HomePage = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
        });
    }, [pathname]);

    return (
        <>
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

                {/* hidden web apps for personal use */}
                <Route path={'/kitfox'} element={<KitfoxPage/>}/>
            </Routes>
        </>
    );
}