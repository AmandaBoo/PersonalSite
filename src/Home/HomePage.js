import React, {useState} from 'react';

export const HomePage = ({}) => {
    return (
        <>
            {renderLandingSection()}
        </>
    );
}

function renderLandingSection() {
    return (
        <div className={'landing-container flex-center'}>
            <div>
                <div className={'large-text name-container'}>
                    AMANDA BUI
                </div>
                <div className={'flex-center small-text'}>
                    <span className={'link-spacing'}>PROJECTS</span>
                    {createImageLink('image-icon', './images/instagram.png', 'Instagram',
                        'https://www.instagram.com/amanda_boo__/')}
                    {createImageLink('image-icon', './images/linkedin.png', 'LinkedIn',
                        'https://www.linkedin.com/in/amanda-b-077b26160/')}
                    <span className={'link-spacing'}>ABOUT</span>
                </div>
            </div>
        </div>
    );
}

function createImageLink(classNames, imgSrc, alt, url) {
    return (
        <a href={url} target="_blank">
            <img
                src={imgSrc}
                alt={alt}
                className={classNames}
            />
        </a>
    );
}

function createLink(classNames, url, title, displayName) {
    return (
        <a className={classNames}
           href={url}
           title={title}
           target="_blank"
        >{displayName}</a>
    );
}