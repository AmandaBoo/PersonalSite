import React from 'react';
import {NavLink} from "react-router-dom";

export const LandingPageLink = ({name, path}) => {
    return (
        <NavLink
            className={
                'p-5 hidden underline hover:text-white md:block'}
            to={path}>{name}
        </NavLink>
    )
}

