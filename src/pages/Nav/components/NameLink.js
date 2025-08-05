import {NavLink} from "react-router-dom";
import React from "react";
import {IconButton} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {SvgLinkIcon} from "./SvgLinkIcon";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const NameLink = () => {
    return (
        <div className={'text-6xl md:text-8xl font-serif py-20 px-5'}>
            <div>
                <NavLink to={"/"}>AMANDA BUI</NavLink>
            </div>
            <div>
                <IconButton>
                    <NavLink to={'/kitfox'}>
                        <FavoriteBorderIcon/>
                    </NavLink>
                </IconButton>
            </div>
        </div>
    );
}