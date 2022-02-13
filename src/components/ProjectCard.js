import React from 'react';
import {NavLink} from "react-router-dom";

export const ProjectCard = ({projectName, projectLink, projectDescription, imgPath}) => {
    return (
        <div className={'flex justify-center pb-5 text-left mx-10'}>
            <div className={'flex justify-center flex-col border border-white border-4 bg-hover-black'}>
                {createThumbnailImage(imgPath)}
                {createTitle(projectName)}
                {createTextBody(projectDescription)}
                {createInternalLink(projectName, projectLink)}
            </div>
        </div>
    );
}

function createTitle(projectName) {
    return (
        <span className={'font-serif text-2xl p-3 pb-2'}>
            {projectName}
        </span>
    );
}

function createTextBody(projectDescription) {
    return (
        <p className={'w-96 pb-10 pb-3 px-3'}>
            {projectDescription}
        </p>
    );
}

function createThumbnailImage(imgPath) {
    return (
        <div className={'flex justify-center'}>
            <img
                className={'object-cover w-96 h-96'}
                alt={'project-gif'}
                src={imgPath}
            />
        </div>
    );
}

function createInternalLink(projectName, projectLink) {
    return (
        <div className={'px-0.5 p-3 flex justify-center'}>
            <NavLink
                className={'p-2 rounded bg-pale-pink text-dark-pink'}
                to={projectLink}
            >ARTICLE
            </NavLink>
        </div>
    );
}