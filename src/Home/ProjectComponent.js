import React from 'react';
import {NavLink} from "react-router-dom";

export const ProjectComponent = ({}) => {
    return (
        <div className={'half-page-component'}>
            <NavLink className={'large-text-button large-text-button-link link'} to={"/projects"}>PROJECTS</NavLink>
        </div>
    );
};