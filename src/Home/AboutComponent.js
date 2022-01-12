import React from 'react';
import {LinkComponent} from "./LinkComponent";
import CircleIcon from '@mui/icons-material/Circle';

export const AboutComponent = ({isClicked}) => {
    return (
        <div className={'half-page-component left-side-padding'}>
            {renderAboutButton(isClicked)}
            {renderSocialLinks()}
        </div>
    );
}

function renderAboutButton(isClicked) {
    return (
        <div
            className={'large-text-button link'}
            onClick={() => {
                isClicked();
            }}

        >ABOUT</div>
    );

}
function renderSocialLinks() {
    return (

        <div className={'social-link display-flex'}>
            <LinkComponent
                url={"https://www.linkedin.com/in/amanda-b-077b26160/"}
                displayName={"LINKEDIN"}
                additionalStyles={'linkedin-link'}
            />
            <span className={'vertical-center'}>
                <CircleIcon fontSize={'small'}/>
            </span>
            <LinkComponent
                url={"https://www.instagram.com/amanda_boo__/?hl=en"}
                displayName={"INSTAGRAM"}
                additionalStyles={'insta-link'}
            />
        </div>
    );
}
