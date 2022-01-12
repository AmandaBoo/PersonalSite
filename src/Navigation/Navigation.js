import React from 'react';
import {NavLink} from "react-router-dom";

export const Navigation = ({}) => {
    return (
        <div className={'desktop-navigation-bar'}>
            <NavLink className={'nav-bar-links link'} to={"/"}>AMANDA BUI</NavLink>
        </div>
    );
}