import React, {useState} from 'react';
import {Navigation} from "../Navigation/Navigation";
import {AboutComponent} from "./AboutComponent";
import {ProjectComponent} from "./ProjectComponent";

export const HomePage = ({}) => {
    const [popupName, setPopupName] = useState(null);
    return (
        <>
            <div className={'left-hand-page'}>
                {renderTopNavigation()}
                {renderAboutSection(setPopupName)}
            </div>
            <div className={'right-hand-page'}>
                {renderRightRoutes()}
            </div>
            {renderAboutPopup(popupName === 'ABOUT')}
        </>
    );
}

function renderTopNavigation() {
    return (
        <div>
            <Navigation/>
        </div>
    )
}

function renderAboutSection(setPopupName) {
    // TODO : IF CLICKED RUN ANIMATION TO FADE AWAY EVERYTHING
    // RUN ANIMATION TO HAVE X APPEAR
    // RUN ANIMATION TO HAVE POPUP APPEAR
    return (
        <div className={'flex-center'}>
            <AboutComponent
                isClicked={() => {
                    setPopupName('ABOUT')
                }}
            />
        </div>
    );
}

function renderRightRoutes() {
    return (
        <div className={'flex-center'}>
            <ProjectComponent/>
        </div>
    );
}

function renderAboutPopup(doRender) {
    if (doRender) {
        return (
            <div className={'fade-popup'}> HELLO </div>
        );
    }
}