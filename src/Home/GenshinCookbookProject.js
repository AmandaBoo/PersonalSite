import React from 'react';
import {GenshinCookbookReadmeComponent} from "./GenshinCookbookReadmeComponent";

export const GenshinCookbookProject = ({}) => {

    return (
        <div className={'content-container fade-popup'}>
            <div className={'mid-text link-spacing'}>GENSHIN COOKBOOK</div>
            {createLinkContainer()}
            {createProjectGIFContainer()}
                {createOverviewContainer()}
                {createMyStoryContainer()}
                {createStackContainer()}
        </div>
    );
}

function createLinkContainer() {
    return (
        <div className={'flex-center'}>
            {createLink('https://genshin-cookbook.com/',
                'Genshin Cookbook', 'WEBSITE')}
            {createLink( 'https://github.com/AmandaBoo/Project-Not-Boba',
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
            <div className={'project-text-line-height project-text-margin'}>
                <p>
                    Genshin Cookbook is a webtool designed to help assist in tracking the 100+ recipes of Genshin Impact!
                </p>
                <p>
                    The site currently supports the in-game Cooking system, however I'm actively working on
                    supporting the Alchemy and Smithing systems
                    with plans to support the Furniture system shortly afterwards!
                </p>
            </div>
        </div>
    );
}

function createStackContainer() {
    return (
        <div className={'body-text'}>
            <p className={'project-text-header divider project-text-margin'}>TECHNICAL OVERVIEW</p>
            <div className={'project-text-line-height project-text-margin'}>
                <p>
                    A brief description of the technical details of the site can be found below. A more thorough explanation can be found
                    at the repo using the link below.
                </p>
                <div className={'text-align-center'}>
                    {createLink('https://github.com/AmandaBoo/Project-Not-Boba#readme', 'readme', 'README')}
                </div>

                <GenshinCookbookReadmeComponent/>
            </div>
        </div>
    );
}

function createMyStoryContainer() {
    return (
        <div className={'body-text'}>
            <p className={'project-text-header divider project-text-margin'}>MY STORY</p>
            <div className={'project-text-line-height project-text-margin'}>
                <p>
                    When I picked up Genshin Impact back in 2021, I never thought the parts of the game that would hook me the most would
                    be the Cooking and Crafting systems. With almost a 100 (and counting) recipes, I found myself quickly struggling to keep
                    track of all of the ingredients required to perfect each dish...
                </p>
                <p>
                    Soon I was spending an hour or more every few days updating my hand-written
                    progress sheets and grocery lists. I gave digital spreadsheets a try but found that the amount
                    of text I'd have to scan through unpleasant to stare at for hours.
                    After thorough digging online, I discovered that while there were many digital planers to
                    assist in tracking character progression, there were none for cooking or crafting.
                </p>
                <p>
                    So I set about making my own~
                </p>
            </div>
        </div>
    );
}

function createLink(url, title, displayName) {
    return (
        <a className={'link'}
           href={url}
           title={title}
           target="_blank"
        >{displayName}</a>
    );
}
