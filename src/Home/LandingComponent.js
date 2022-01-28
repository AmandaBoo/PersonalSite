import React from 'react';

export const LandingComponent = ({}) => {

    return (
        <div className={'flex-center fade-popup'}>
            <img
                className={'home-page-img'}
                alt={'lavender'}
                src={'./images/lavender.jpg'}
            />
            <img
                className={'home-page-img'}
                alt={'tea and frogs'}
                src={'./images/tea-frog.jpg'}
            />
            <img
                className={'home-page-img'}
                alt={'mushrooms and frogs'}
                src={'./images/mushroom-frog.jpg'}
            />
        </div>
    );
}