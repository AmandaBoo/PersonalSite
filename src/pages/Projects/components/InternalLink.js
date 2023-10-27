import React from 'react';
import {NavLink} from "react-router-dom";

export const InternalProjectLink = ({name, path}) => {
    return (
        <div className={'bg-dark-pink justify-center flex'}>
            <NavLink
                className={'text-xl p-2 text-center w-[100%] h-[100%] hover:text-white hover:bg-hover-black'}
                to={path}
            >{name}
            </NavLink>
        </div>
    );
}