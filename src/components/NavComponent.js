import React from 'react';
import {SvgLinkIcon} from "./SvgLinkIcon";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {NavLink} from "react-router-dom";

export const NavComponent = ({}) => {
    return (
        <>
            {renderNameLink()}
            <div className={'flex justify-center flex-col md:flex-row mx-2 md:m-0 pb-20'}>
                {renderMobileInternalLinks()}
                {renderInternalLink('PROJECTS', '/projects')}
                {renderExternalLinks()}
                {renderInternalLink('ABOUT', '/about')}
            </div>
        </>
    );
}

function renderNameLink() {
    return (
        <div className={'text-6xl md:text-8xl font-serif text-white py-20 px-5'}>
            <NavLink to={"/"}>AMANDA BUI</NavLink>
        </div>
    );
}

function renderMobileInternalLinks() {
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

function renderInternalLink(linkName, linkPath) {
    return (
        <NavLink
            className={
                ({ isActive }) => (isActive ? 'text-3xl p-5 line-through hidden md:block'
                    : 'text-3xl p-5 underline underline-offset-2 hover:text-white hover:bg-hover-black rounded-3xl md:block hidden')}
            to={linkPath}>{linkName}
        </NavLink>
    )
}

function renderExternalLinks() {
    return (
        <div className={'flex justify-center'}>
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