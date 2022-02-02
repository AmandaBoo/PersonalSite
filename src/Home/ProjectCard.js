import React from 'react';
import {NavLink} from "react-router-dom";

export const ProjectCard = ({projectName, projectLink, projectDescription, imgPath, imgUrl, isDisabled}) => {
    return (
        <div className={'flex-center padding-right'}>
            <div className={'project-card vertical-center'}>
                <NavLink
                    className={'project-link'}
                    to={projectLink} activeStyle={'selected-nav-link'}>{projectName}
                </NavLink>
                {createThumbnailImage(imgPath, imgUrl)}
                {createTextBody(projectDescription)}
            </div>
        </div>
    );
}

function createTextBody(projectDescription) {
    return (
        <p className={'project-card-description'}>
            {projectDescription}
        </p>
    );
}

function createThumbnailImage(imgPath, imgUrl) {
    if (imgUrl === null) {
        return (
            <a>
                <img
                    className={'dnd-image'}
                    alt={'project-gif'}
                    src={imgPath}
                />
            </a>
        );
    }
    return (
        <a className={'thumbnail-link'} href={imgUrl} target="_blank">
            <img
                className={'project-img'}
                alt={'project-gif'}
                src={imgPath}
            />
        </a>
    );
}