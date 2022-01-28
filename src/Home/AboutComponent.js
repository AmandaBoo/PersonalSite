import React from 'react';

export const AboutComponent = ({}) => {

    return (
        <div className={'fade-popup'}>
            {createIntroduction()}
        </div>
    );
}

function createIntroduction() {
    return (
        <div className={'body-text'}>
            <div className={'flex-center'}>
                <img
                    className={'personal-img'}
                    alt={'art-museum'}
                    src={'/images/art_museum.jpg'}
                />
                <img
                    className={'personal-img'}
                    alt={'bridge'}
                    src={'/images/bridge2.jpg'}
                />
            </div>
            <p className={'third-person-text'}>
                Amanda Bui is a full-time Software Developer based in Minneapolis, MN who enjoys making fun
                web-tools and resources for the games she plays,
                and then letting them loose on the internet for everyone to have fun with!
            </p>

            <p>
                That's enough talking about me in the third person....
            </p>

            <p>
                I'm just a silly person who falls off of colorful rocks at my bouldering gym,
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