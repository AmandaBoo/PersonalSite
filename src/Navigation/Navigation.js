import React from 'react';
import {NavLink} from "react-router-dom";

export const Navigation = ({}) => {
    return (
        <div className={'desktop-navigation-bar'}>
            <NavLink className={'nav-bar-links'} to={"/"} activeClassName={''}>AMANDA BUI</NavLink>
        </div>
    );
}