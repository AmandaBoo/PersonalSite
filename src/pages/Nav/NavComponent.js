import React from 'react';
import {NameLink} from "./components/NameLink";
import {NavigationInternalLinksMobile} from "./components/NavigationInternalLinksMobile";
import {NavigationInternalLinks} from "./components/NavigationInternalLinks";
import {ExternalSocialLinks} from "./components/ExternalSocialLink";

export const NavComponent = ({}) => {
    return (
        <>
            <NameLink/>
            <div className={'flex justify-center flex-col md:flex-row mx-2 md:m-0 pb-20'}>
                <NavigationInternalLinksMobile/>
                <NavigationInternalLinks name={'PROJECTS'} path={'/projects'}/>
                <ExternalSocialLinks/>
                <NavigationInternalLinks name={'ABOUT'} path={'/about'}/>
            </div>
        </>
    );
}