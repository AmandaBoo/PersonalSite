import React from 'react';
import {Paragraph} from "../../components/sharedPage/Paragraph";
import {introduction} from "./consts";

export const AboutPage = ({}) => {
    return (
        <div className={'fade-popup p-5 md:p-0'}>
            {createPersonalImageContainer()}
            <Paragraph body={introduction}/>
        </div>
    );
}

function createPersonalImageContainer() {
    return (
        <div className={'flex justify-center'}>
            <img
                className={'w-1/2 md:w-3/12 rounded-lg px-2'}
                alt={'art-museum'}
                src={'/images/about/art_museum.jpg'}
            />
            <img
                className={'w-1/2 md:w-3/12 rounded-lg px-2'}
                alt={'bridge'}
                src={'/images/about/bridge2.jpg'}
            />
        </div>
    );
}