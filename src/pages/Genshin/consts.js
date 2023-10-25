import React from "react";
import {ExternalLink} from "./components/ExternalLink";
import {GenshinCookbookReadmeComponent} from "./components/GenshinCookbookReadmeComponent";

export const overview =
    <>
        <p>
            Genshin Cookbook is a webtool designed to help assist in tracking the 100+ recipes of Genshin Impact!
        </p>
        <p>
            The site currently supports the in-game Cooking system, however I'm actively working on
            supporting the Alchemy and Smithing systems
            with plans to support the Furniture system shortly afterwards!
        </p>
    </>

export const story =
    <>
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
    </>

export const technicalOverview =
    <>
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
    </>