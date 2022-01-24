import React from 'react';

export const GenshinCookbookProject = ({}) => {

    return (
        <div className={'vertical-center content-container fade-popup'}>
            <div className={'mid-text link-spacing'}>GENSHIN COOKBOOK</div>
            {createLinkContainer()}
            {createProjectGIFContainer()}
            {createOverviewContainer()}
            {createStackMyStoryContainer()}
        </div>
    );
}

function createLinkContainer() {
    return (
        <div className={'flex-center'}>
            {createLink('link', 'https://genshin-cookbook.com/',
                'Genshin Cookbook', 'WEBSITE')}
            {createLink('link', 'https://github.com/AmandaBoo/Project-Not-Boba',
                'GC Repo', 'REPO')}
        </div>
    );
}

function createProjectGIFContainer() {
    return (
        <div className={'link-spacing'}>
            <img
                className={'project-img'}
                alt={'genshin-screenshot'}
                src={'./images/genshin_gif.gif'}
            />
        </div>
    );
}

function createOverviewContainer() {
    return (
        <div className={'body-text'}>
            <p className={'project-text-header divider project-text-margin'}>OVERVIEW</p>
            <p className={'project-text-margin project-text-spacing'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    );
}

function createStackMyStoryContainer() {
    return (
        <div className={'flex'}>
            <div className={'text-body body-text project-text-margin'}>
                <p className={'project-text-header divider'}>STACK</p>
                <p className={'project-text-spacing'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className={'text-body body-text project-text-margin'}>
                <p className={'project-text-header divider'}>MY STORY</p>
                <p className={'project-text-spacing'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    );
}

function createLink(classNames, url, title, displayName) {
    return (
        <a className={classNames}
           href={url}
           title={title}
           target="_blank"
        >{displayName}</a>
    );
}
