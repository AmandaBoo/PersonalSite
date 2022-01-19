import React, {useState} from 'react';
import {ProjectComponent} from "./ProjectComponent";
import {NavComponent} from "./NavComponent";
import {AboutComponent} from "./AboutComponent";

export const HomePage = ({}) => {
    const [selectedLink, setSelectedLink] = useState('AMANDA');

    return (
        <div className={'landing-container'}>
            <div>
                <NavComponent
                    onLinkSelect={(linkId) => setSelectedLink(linkId)}
                />
                {renderComponentWithSelectedLink(selectedLink)}
            </div>
        </div>
    );
}

function renderComponentWithSelectedLink(linkId) {
    if (linkId === 'AMANDA') {
        return (
            <div className={'flex-center'}>
                <img
                    className={'home-page-img'}
                    alt={'lavender'}
                    src={'./images/lavender.png'}
                />
                <img
                    className={'home-page-img'}
                    alt={'frogs-mushroom'}
                    src={'./images/frogs.png'}
                />
            </div>
        )
    } else if (linkId === 'PROJECTS') {
        return <ProjectComponent/>;
    } else if (linkId === 'ABOUT') {
        return <AboutComponent/>
    }
}

function aklsjdf() {
    return (
        <div className={'body-text'}>
            <p className={'small-text divider'}>STACK</p>
            <p>
                React JS ~ Sass ~ Cloudflare
            </p>

            <p className={'small-text divider'}>OVERVIEW</p>
            <p>
                Genshin Cookbook is a nifty webtool that I began working on in the Summer 2021. The site currently assists
                users by helping them keep track of their progress towards mastery of the many dishes that Genshin Impact offers.
            </p>
            <p>
                New features such as support for the furniture system and alchemy are actively in the works!
            </p>

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
    )
}