import {NavLink} from "react-router-dom";
import React from "react";

export const NavigationInternalLinksMobile =() => {
    return (
        <div className={'md:hidden pb-5'}>
            <NavLink
                className={
                    ({ isActive }) => (isActive ? 'text-3xl p-5 line-through'
                        : 'text-3xl p-5 underline underline-offset-2 hover:text-white hover:bg-hover-black rounded-3xl')}
                to={'/projects'}>{'PROJECTS'}
            </NavLink>
            <NavLink
                className={
                    ({ isActive }) => (isActive ? 'text-3xl p-5 line-through'
                        : 'text-3xl p-5 underline underline-offset-2 hover:text-white hover:bg-hover-black rounded-3xl')}
                to={'/about'}>{'ABOUT'}
            </NavLink>
        </div>
    )
}