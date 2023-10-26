import React from 'react';
import {PageTitle} from "../../components/sharedPage/PageTitle";
import {Article} from "../../components/sharedPage/Article";
import {ExternalLink, FFXIVExternalLink} from "./components/FFExternalLinksContainer";
import {background, overview} from "./consts";
import {FFProjectImagesContainer} from "./components/FFProjectImagesContainer";

export const FinalFantasyPage = () => {
    return (
        <div className={'fade-popup p-5 md:p-0'}>
            <PageTitle projectTitleName={'FFXIV AUTO CRAFTER'}/>
            <FFProjectImagesContainer/>
            <div className={'max-w-article text-left m-0-auto py-10'}>
                <Article title={'Overview'} body={overview}/>
                <FFXIVExternalLink/>
                <Article title={'Background'} body={background}/>
            </div>
        </div>
    );
}