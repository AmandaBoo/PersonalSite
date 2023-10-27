import React from 'react';
import {PageTitle} from "../../components/sharedPage/PageTitle";
import {Article} from "../../components/sharedPage/Article";
import {overview, story, technicalOverview} from "./consts";
import {GenshinExternalLinksContainer} from "./components/GenshinExternalLinksContainer";
import {GenshinProjectGifsContainer} from "./components/GenshinProjectGifsContainer";

export const GenshinCookbookPage = () => {
    return (
        <div className={'fade-popup p-5 md:p-0'}>
            <PageTitle projectTitleName={'GENSHIN COOKBOOK'}/>
            <GenshinProjectGifsContainer/>
            <GenshinExternalLinksContainer/>
            <div className={'max-w-article text-left m-0-auto py-10'}>
                <Article title={'Overview'} body={overview}/>
                <Article title={'Background'} body={story}/>
                <Article title={'Technical Overview'} body={technicalOverview}/>
            </div>
        </div>
    );
}
