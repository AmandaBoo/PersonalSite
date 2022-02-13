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
            <div className={'flex justify-center'}>
                {renderInternalLink('PROJECTS', '/projects')}
                {renderExternalLinks()}
                {renderInternalLink('ABOUT', '/about')}
            </div>
        </>
    );
}

function renderMainLink() {
    return (
        <div className={'text-8xl font-serif text-white py-20'}>
            <NavLink to={"/"}>AMANDA BUI</NavLink>
        </div>
    );
}

function renderInternalLink(linkName, linkPath) {
    return (
        <NavLink
            className={
                ({ isActive }) => (isActive ? 'text-3xl p-5 line-through'
                    : 'text-3xl p-5 underline hover:text-white hover:bg-hover-black rounded-3xl')}
            to={linkPath}>{linkName}
        </NavLink>
    )
}

function renderExternalLinks() {
    return (
        <div className={'contents'}>
            <SvgLinkIcon url={'https://github.com/AmandaBoo/'}>
                <GitHubIcon className={'text-pale-pink'} fontSize={'large'}/>
            </SvgLinkIcon>
            <SvgLinkIcon url={'https://www.instagram.com/amanda_boo__/'}>
                <InstagramIcon className={'text-pale-pink'} fontSize={'large'}/>
            </SvgLinkIcon>
            <SvgLinkIcon url={'https://www.linkedin.com/in/amandabui-dev/'}>
                <LinkedInIcon className={'text-pale-pink'} fontSize={'large'}/>
            </SvgLinkIcon>
        </div>
    )
}