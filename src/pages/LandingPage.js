import React from 'react';

export const LandingPage = ({}) => {

    return (
        <div className={'flex justify-center fade-popup pb-5'}>
            {createLandingImg('./images/lavender.png', 'Lavender Painting by Amanda Bui')}
            {createLandingImg('./images/teacup_froggy.png', 'Tea and Frogs Painting by Amanda Bui')}
            {createLandingImg('./images/mushroom_frog.png', 'Mushrooms and Frogs by Amanda Bui')}
        </div>
    );
}

function createLandingImg(src, alt) {
    return (
        <div className={'w-3/12 m-2'}>
            <img
                alt={alt}
                src={src}
            />
        </div>
    );
}