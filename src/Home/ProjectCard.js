import React from 'react';
import {NavLink} from "react-router-dom";

export const ProjectCard = ({projectName, projectLink, projectDescription}) => {
    return (
        <div className={'flex-center'}>
            <div className={'project-card vertical-center'}>
                <NavLink

                    className={'project-link'}
                    to={projectLink} activeStyle={'selected-nav-link'}>{projectName}
                </NavLink>
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