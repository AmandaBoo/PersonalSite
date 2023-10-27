import React from 'react';
import {PageTitle} from "../../components/sharedPage/PageTitle";
import {Article} from "../../components/sharedPage/Article";
import {DNDProjectImages} from "./components/DNDProjectImages";
import {DNDInternalDownloadLinksContainer} from "./components/DNDInternalDownloadLinksContainer";
import {overview, story} from "./consts";

export const DNDPage = () => {
    return (
        <div className={'fade-popup p-5 md:p-0'}>
            <PageTitle projectTitleName={'DND SHEETS'}/>
            <DNDProjectImages/>
            <div className={'max-w-article text-left m-0-auto md:py-10'}>
                <Article title={'Overview'} body={overview}/>
                <Article title={'Background'} body={story}/>
                <DNDInternalDownloadLinksContainer/>
            </div>
        </div>
    );
}