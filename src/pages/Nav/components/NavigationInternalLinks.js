import React from 'react';
import {NavLink} from "react-router-dom";

export const NavigationInternalLinks = ({name, path}) => {
    return (
        <NavLink
            className={
                ({ isActive }) => (isActive ? 'text-3xl p-5 line-through hidden md:block'
                    : 'text-3xl p-5 underline underline-offset-2 hover:text-white md:block hidden')}
            to={path}>{name}
        </NavLink>
    )
}

