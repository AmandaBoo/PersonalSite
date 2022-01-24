import React from 'react';
import {ProjectCard} from "./ProjectCard";

export const ProjectCardsContainer = ({}) => {
    return (
        <div className={'flex-center fade-popup'}>
            <ProjectCard
                projectName={'GENSHIN COOKBOOK'}
                projectLink={'/genshincookbook'}
            />
        </div>
    );
};