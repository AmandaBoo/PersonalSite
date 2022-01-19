import React, {useState} from 'react';

export const ProjectComponent = ({}) => {

    return (
        <div className={'vertical-center content-container'}>
            <div className={'mid-text link-spacing'}>GENSHIN COOKBOOK</div>
            {createLinkContainer()}
            {createProjectGIFContainer()}
            {/*{createStackOverviewContainer()}*/}

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

function createStackOverviewContainer() {
    return (
        <div className={'flex'}>
            <div className={'text-body body-text'}>
                <p className={'small-text divider'}>STACK</p>
                <p>
                    React JS ~ Sass ~ Cloudflare
                </p>
            </div>
            <div className={'text-body body-text'}>
                <p className={'small-text divider'}>MY STORY</p>
                <p>
                    I began work on it after spending many weeks hand-tracking my recipes and their many ingredients, not to mention sub-ingredients...
                </p>
                <p>
                    The project was originally going to be developed in plain JS and HTMl, but quickly realized that I needed to modularize many sections of the site, and thus turned to React.
                </p>
                <p>
                    I credit my success in getting the project this far through the power of careful planning and documentation as you can see in my repository~
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
