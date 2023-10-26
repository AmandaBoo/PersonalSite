import React from 'react';
import {ProjectCard} from "./components/ProjectCard";
import {dndBlurb, finalFantasyBlurb, genshinBlurb, pokemonBlurb} from "./consts";

export const ProjectsPage = () => {
    return (
        <div className={'flex justify-center flex-wrap'}>
            <ProjectCard
                projectName={'GENSHIN COOKBOOK'}
                projectLink={'/genshincookbook'}
                projectDescription={genshinBlurb}
                imgPath={'./images/genshin/genshin-screenshot.png'}
            />
            <ProjectCard
                projectName={'DND SHEETS'}
                projectLink={'/dndsheets'}
                projectDescription={dndBlurb}
                imgPath={'./images/dnd/fullStatSheet.jpg'}
            />
            <ProjectCard
                projectName={'FFXIV AUTO CRAFTER'}
                projectLink={'/finalfantasy'}
                projectDescription={finalFantasyBlurb}
                imgPath={'./images/ff14/ff14AutoCrafterPy.jpeg'}
            />
            <ProjectCard
                projectName={'POKEMON TYPE CHART'}
                projectLink={'/pokemon'}
                projectDescription={pokemonBlurb}
                imgPath={'./images/pokemon/pokemonProjectCard.jpeg'}
            />
        </div>
    );
};