import React from 'react';
import {GenshinCookbookReadmeComponent} from "../components/GenshinCookbookReadmeComponent";
import {ExternalLink} from "../components/ExternalLink";
import {ProjectTitle} from "../components/ProjectTitle";

export const GenshinCookbookPage = ({}) => {

    return (
        <div className={'fade-popup p-5 md:p-0'}>
            <ProjectTitle
                projectTitleName={'GENSHIN COOKBOOK'}
            />
            {createProjectGIFContainer()}
            {createLinkContainer()}
            <div className={'max-w-article text-left m-0-auto py-10'}>
                {createOverviewContainer()}
                {createMyStoryContainer()}
                {createStackContainer()}
            </div>
        </div>
    );
}

function

createLinkContainer() {
    return (
        <div className={'flex justify-center'}>
            <ExternalLink
                url={'https://genshin-cookbook.com/'}
                title={'External Link to Genshin Cookbook Website'}
                displayName={'WEBSITE'}
            />
            <ExternalLink
                url={'https://github.com/AmandaBoo/Project-Not-Boba'}
                title={'External Link to Genshin Cookbook Repository'}
                displayName={'REPO'}
            />
        </div>
    );
}

function createProjectGIFContainer() {
    return (
        <div className={'flex justify-center md:px-16 py-8'}>
            <div className={'max-w-[1500px]'}>
                <a className={'thumbnail-link'} href={'https://genshin-cookbook.com'} target="_blank">
                    <img
                        alt={'genshin-screenshot'}
                        src={'./images/genshin_gif.gif'}
                    />
                </a>
            </div>
        </div>
    );
}

function createOverviewContainer() {
    return (
        <>
            {createTitle('OVERVIEW')}
            <div className={'article'}>
                <p>
                    Genshin Cookbook is a webtool designed to help assist in tracking the 100+ recipes of Genshin Impact!
                </p>
                <p>
                    The site currently supports the in-game Cooking system, however I'm actively working on
                    supporting the Alchemy and Smithing systems
                    with plans to support the Furniture system shortly afterwards!
                </p>
            </div>
        </>
    );
}

function createStackContainer() {
    return (
        <>
            {createTitle('TECHNICAL OVERVIEW')}
            <div>
                <p>
                    A brief description of the technical details of the site can be found below. A more thorough explanation can be found
                    at the repo using the link below.
                </p>
                <div className={'text-center py-5'}>
                    <ExternalLink
                        url={'https://github.com/AmandaBoo/Project-Not-Boba#readme'}
                        title={'External Link to Genshin Cookbook Readme'}
                        displayName={'README'}
                    />
                </div>
                <GenshinCookbookReadmeComponent/>
            </div>
        </>
    );
}

function createMyStoryContainer() {
    return (
        <>
            {createTitle('MY STORY')}
            <div className={'article'}>
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
        </>
    );
}

function createTitle(title) {
    return (
        <p className={'text-3xl my-[1em] font-serif border-b-[3px] border-white'}>{title}</p>
    );
}
