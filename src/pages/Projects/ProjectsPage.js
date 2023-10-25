import React from 'react';
import {ProjectCard} from "./components/ProjectCard";
import {dndBlurb, genshinBlurb} from "./consts";

export const ProjectsPage = () => {
    return (
        <div className={'flex justify-center flex-wrap'}>
            <ProjectCard
                projectName={'GENSHIN COOKBOOK'}
                projectLink={'/genshincookbook'}
                projectDescription={genshinBlurb}
                imgPath={'./images/genshin-screenshot.png'}
            />
            <ProjectCard
                projectName={'DND SHEETS'}
                projectLink={'/dndsheets'}
                projectDescription={dndBlurb}
                imgPath={'./images/fullStatSheet.jpg'}
            />
        </div>
    );
};