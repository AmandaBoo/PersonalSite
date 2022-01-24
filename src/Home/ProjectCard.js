import React from 'react';
import {NavLink} from "react-router-dom";

export const ProjectCard = ({projectName, projectLink}) => {
    return (
        <NavLink
            className={'project-link'}
            to={projectLink} activeStyle={'selected-nav-link'}>{projectName}
        </NavLink>
    );
}