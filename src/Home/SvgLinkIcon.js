import React from 'react';
import {IconButton} from "@mui/material";

export const SvgLinkIcon = ({children, url}) => {
    return (
        <a href={url} target="_blank" className={'image-icon'}>
            <IconButton>
                {children}
            </IconButton>
        </a>
    )
}