import React from 'react';

export const AboutPage = ({}) => {
    return (
        <div className={'fade-popup p-5 md:p-0'}>
            {createPersonalImageContainer()}
            {createIntroduction()}
        </div>
    );
}

function createPersonalImageContainer() {
    return (
        <div className={'flex justify-center'}>
            <img
                className={'w-1/2 md:w-3/12 rounded-lg px-2'}
                alt={'art-museum'}
                src={'/images/art_museum.jpg'}
            />
            <img
                className={'w-1/2 md:w-3/12 rounded-lg px-2'}
                alt={'bridge'}
                src={'/images/bridge2.jpg'}
            />
        </div>
    );
}

function createIntroduction() {
    return (
        <div className={'md:py-10 max-w-article m-0-auto text-left article'}>
            <p className={'text-3xl text-white my-[1em] font-serif'}>
                Amanda Bui is a full-time Software Developer based in Minneapolis, MN who enjoys making fun
                web-tools and resources for the games she plays.
            </p>

            <p>
                That's enough talking about me in the third person....
            </p>

            <p>
                I'm just a person who falls off of colorful rocks at my bouldering gym,
                plays DND with my friends, and loves boba!
            </p>

            <p>
                I'm passionate about designing tools
                that other people can freely use to enhance their experience in some of my favorite games.
                I credit my ability in continuing to make headway in these projects through careful, but non-intrusive, planning
                (kanban boards are my best friends), as well as motivation from my peers who enjoy the things I create.
            </p>
        </div>
    );
}