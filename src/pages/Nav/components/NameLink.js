import {NavLink} from "react-router-dom";
import React from "react";

export const NameLink = () => {
    return (
        <div className={'text-6xl md:text-8xl font-serif py-20 px-5'}>
            <NavLink to={"/"}>AMANDA BUI</NavLink>
        </div>
    );
}