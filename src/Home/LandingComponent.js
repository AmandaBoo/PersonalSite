import React from 'react';

export const LandingComponent = ({}) => {

    return (
        <div className={'flex-center'}>
            <img
                className={'home-page-img'}
                alt={'lavender'}
                src={'./images/lavender.png'}
            />
            <img
                className={'home-page-img'}
                alt={'frogs-mushroom'}
                src={'./images/frogs.png'}
            />
        </div>
    );
}