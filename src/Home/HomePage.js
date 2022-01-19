import React, {useState} from 'react';
import {ProjectComponent} from "./ProjectComponent";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {SvgLinkIcon} from "./SvgLinkIcon";
import {NavComponent} from "./NavComponent";

export const HomePage = ({}) => {
    const [selectedLink, setSelectedLink] = useState(null);
    return (
        <div className={'landing-container'}>
            <div>
                <NavComponent/>
                <ProjectComponent/>
            </div>
        </div>
    );
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