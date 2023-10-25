import React from 'react';
import {PageTitle} from "../../components/sharedPage/PageTitle";
import {Article} from "../../components/sharedPage/Article";
import {overview, story, technicalOverview} from "./consts";
import {ExternalLinksContainer} from "./components/ExternalLinksContainer";
import {ProjectGifsContainer} from "./components/ProjectGifsContainer";

export const GenshinCookbookPage = () => {
    return (
        <div className={'fade-popup p-5 md:p-0'}>
            <PageTitle projectTitleName={'GENSHIN COOKBOOK'}/>
            <ProjectGifsContainer/>
            <ExternalLinksContainer/>
            <div className={'max-w-article text-left m-0-auto py-10'}>
                <Article title={'Overview'} body={overview}/>
                <Article title={'Story'} body={story}/>
                <Article title={'Technical Overview'} body={technicalOverview}/>
            </div>
        </div>
    );
}
