import React from 'react';
import {ProjectCard} from "./ProjectCard";

export const ProjectCardsContainer = ({}) => {
    return (
        <div className={'flex-center fade-popup'}>
            <ProjectCard
                projectName={'GENSHIN COOKBOOK'}
                projectLink={'/genshincookbook'}
                projectDescription={"A webtool designed to assist in tracking the many recipes of Genshin Impact"}
            />
        </div>
    );
};