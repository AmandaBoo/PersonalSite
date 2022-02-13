import React from 'react';

export const LandingPage = ({}) => {

    return (
        <div className={'flex-center fade-popup'}>
            <img
                className={'home-page-img'}
                alt={'lavender'}
                src={'./images/lavender.png'}
            />
            <img
                className={'home-page-img'}
                alt={'tea and frogs'}
                src={'./images/teacup_froggy.png'}
            />
            <img
                className={'home-page-img'}
                alt={'mushrooms and frogs'}
                src={'./images/mushroom_frog.png'}
            />
        </div>
    );
}