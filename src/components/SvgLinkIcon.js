import React from 'react';
import {IconButton} from "@mui/material";

export const SvgLinkIcon = ({children, url}) => {
    return (
        <a href={url} target="_blank" className={'px-5 pt-2.5'}>
            <IconButton>
                {children}
            </IconButton>
        </a>
    )
}