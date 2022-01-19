import React from 'react';
import {SvgLinkIcon} from "./SvgLinkIcon";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const NavComponent = ({}) => {
    return (
        <>
            <div className={'large-text name-container'}>
                AMANDA BUI
            </div>
            <div className={'flex-center small-text nav-bar'}>
                <span className={'link-spacing'}>PROJECTS</span>
                {renderSvgLinks()}
                <span className={'link-spacing'}>ABOUT</span>
            </div>
        </>
    );
}

function renderSvgLinks() {
    return (
        <>
            <SvgLinkIcon url={'https://github.com/AmandaBoo/'}>
                <GitHubIcon className={'svg-icon'} fontSize={'large'}/>
            </SvgLinkIcon>
            <SvgLinkIcon url={'https://www.instagram.com/amanda_boo__/'}>
                <InstagramIcon className={'svg-icon'} fontSize={'large'}/>
            </SvgLinkIcon>
            <SvgLinkIcon url={'https://www.linkedin.com/in/amanda-b-077b26160/'}>
                <LinkedInIcon className={'svg-icon'} fontSize={'large'}/>
            </SvgLinkIcon>
        </>
    )
}