import React from 'react';
import {DigitalArt} from "./components/DigitalArt";

export const LandingPage = () => {
    return (
        <>
            {/*support in future PR*/}
            {/*<LandingPageLink name={'MORE ART HERE'} path={'/art'}/>*/}
            <div className={'flex justify-center fade-popup pb-5'}>
                <DigitalArt src={'./images/art/lavender.png'} alt={'Lavender Painting by Amanda Bui'}/>
                <DigitalArt src={'./images/art/teacup_froggy.png'} alt={'Tea and Frogs Painting by Amanda Bui'}/>
                <DigitalArt src={'./images/art/mushroom_frog.png'} alt={'Mushrooms and Frogs by Amanda Bui'}/>
            </div>
        </>
    );
}