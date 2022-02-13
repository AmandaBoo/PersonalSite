import React from 'react';
import {NavLink} from "react-router-dom";

export const InternalLink = ({displayName, internalLink}) => {
    return (
        <div className={'px-0.5 p-3 flex justify-center'}>
            <NavLink
                className={'p-2 rounded bg-pale-pink text-dark-pink hover:bg-dark-pink hover:text-white'}
                to={internalLink}
            >{displayName}
            </NavLink>
        </div>
    );
}