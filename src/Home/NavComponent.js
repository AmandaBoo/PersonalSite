import React from 'react';
import {SvgLinkIcon} from "./SvgLinkIcon";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {NavLink} from "react-router-dom";

export const NavComponent = ({}) => {
    return (
        <>
            {renderMainLink()}
            <div className={'flex-center small-text nav-bar'}>
                {renderInternalLink('PROJECTS', '/projects')}
                {renderExternalLinks()}
                {renderInternalLink('ABOUT', '/about')}
            </div>
        </>
    );
}

function renderMainLink() {
    return (
        <div className={'large-text name-container'}>
            <NavLink className={'nav-link'} to={"/"}>AMANDA BUI</NavLink>
        </div>
    );
}

function renderInternalLink(linkName, linkPath) {
    return (
        <span className={'link-spacing internal-link'}>
            <NavLink className={'nav-link'} to={linkPath}>{linkName}</NavLink>
        </span>
    )
}

function renderExternalLinks() {
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