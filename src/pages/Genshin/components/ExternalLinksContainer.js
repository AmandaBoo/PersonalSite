import {ExternalLink} from "./ExternalLink";
import React from "react";

export const ExternalLinksContainer = () => {
    return (
        <div className={'flex justify-center'}>
            <ExternalLink
                url={'https://genshin-cookbook.com/'}
                title={'External Link to Genshin Cookbook Website'}
                displayName={'WEBSITE'}
            />
            <ExternalLink
                url={'https://github.com/AmandaBoo/Project-Not-Boba'}
                title={'External Link to Genshin Cookbook Repository'}
                displayName={'REPO'}
            />
        </div>
    );
}